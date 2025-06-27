import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import Btn from "@/components/Btn";
import CheckList from "@/components/CheckList";
import Gnb from "@/components/Gnb";
import Search from "@/components/Search";
import {
  getItems,
  patchItem,
  postItem,
  ResponseSimpleItems,
  SimpleItem,
} from "@/lib/api";
import todo from "@/assets/images/todo.png";
import done from "@/assets/images/done.png";

export async function getServerSideProps() {
  const items = await getItems();

  return { props: { items } };
}

export default function Home({
  items: initialItems,
}: {
  items: ResponseSimpleItems;
}) {
  const [items, setItems] = useState(initialItems);
  const [disabled, setDisabled] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current?.value) {
      try {
        setDisabled(true);
        const item = await postItem({ name: searchRef.current.value });
        setItems((prev) => [...prev, item]);
        searchRef.current.value = "";
      } finally {
        setDisabled(false);
      }
    }
  };

  const changeIsCompleted = async (item: SimpleItem) => {
    await patchItem(item.id, { isCompleted: !item.isCompleted });
    setItems((prev) =>
      prev.map((p) => {
        if (p.id !== item.id) return p;
        return { ...p, isCompleted: !p.isCompleted };
      })
    );
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
                <CheckList
                  key={item.id}
                  isChecked={false}
                  onButtonClick={async (e) => {
                    e.currentTarget.disabled = true;
                    try {
                      await changeIsCompleted(item);
                    } catch {
                      e.currentTarget.disabled = false;
                    }
                  }}
                >
                  {item.name}
                </CheckList>
              ))}
          </section>
          <section>
            <Image alt="done" src={done} />
            {items
              .filter((item) => item.isCompleted)
              .map((item) => (
                <CheckList
                  key={item.id}
                  isChecked={false}
                  onButtonClick={async (e) => {
                    e.currentTarget.disabled = true;
                    try {
                      await changeIsCompleted(item);
                    } catch {
                      e.currentTarget.disabled = false;
                    }
                  }}
                >
                  {item.name}
                </CheckList>
              ))}
          </section>
        </div>
      </main>
    </div>
  );
}
