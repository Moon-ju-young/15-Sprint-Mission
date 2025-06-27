import { FormEvent, useRef, useState } from "react";
import Btn from "@/components/Btn";
import Gnb from "@/components/Gnb";
import Search from "@/components/Search";
import { getItems, postItem, ResponseItems } from "@/lib/api";

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
      </main>
    </div>
  );
}
