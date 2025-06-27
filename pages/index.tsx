import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import Btn from "@/components/Btn";
import CheckList from "@/components/CheckList";
import Gnb from "@/components/Gnb";
import Search from "@/components/Search";
import { getItems, postItem, ResponseItems } from "@/lib/api";
import todo from "@/assets/images/todo.png";
import done from "@/assets/images/done.png";

export async function getServerSideProps() {
  const items = await getItems();

  return { props: { items } };
}

export default function Home({
  items: initialItems,
}: {
  items: ResponseItems;
}) {
  const [items, setItems] = useState(initialItems);
  const [disabled, setDisabled] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current?.value) {
      try {
        setDisabled(true);
        await postItem({ name: searchRef.current.value });
        searchRef.current.value = "";
      } finally {
        setDisabled(false);
      }
    }
  };

  return (
    <div id="home">
      <Gnb />
      <main>
        <form onSubmit={handleSubmit}>
          <Search disabled={disabled} ref={searchRef} />
          <Btn mode="add" disabled={disabled} />
        </form>
        <div>
          <section>
            <Image alt="to do" src={todo} />
            {items
              .filter((item) => !item.isCompleted)
              .map((item) => (
                <CheckList isChecked={false}>{item.name}</CheckList>
              ))}
          </section>
          <section>
            <Image alt="done" src={done} />
            {items
              .filter((item) => item.isCompleted)
              .map((item) => (
                <CheckList isChecked={false}>{item.name}</CheckList>
              ))}
          </section>
        </div>
      </main>
    </div>
  );
}
