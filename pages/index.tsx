import { FormEvent, useRef, useState } from "react";
import Btn from "@/components/Btn";
import Gnb from "@/components/Gnb";
import Search from "@/components/Search";
import { postItem } from "@/lib/api";

export default function Home() {
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
