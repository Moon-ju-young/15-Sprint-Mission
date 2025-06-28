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
import empty_todo from "@/assets/images/empty_todo.png";
import empty_done from "@/assets/images/empty_done.png";
import styles from "@/styles/index.module.css";

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
    <div className={styles.home}>
      <Gnb />
      <main>
        <form onSubmit={handleSubmit}>
          <Search
            className={styles.search}
            disabled={disabled}
            ref={searchRef}
          />
          <Btn mode="add" disabled={disabled} />
        </form>
        <div>
          <section>
            <Image height={36} alt="to do" src={todo} />
            {items.filter((item) => !item.isCompleted).length ? (
              items
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
                ))
            ) : (
              <div className={styles.empty}>
                <Image height={240} alt="empty to do" src={empty_todo} />
                할 일이 없어요.
                <br />
                TODO를 새롭게 추가해주세요!
              </div>
            )}
          </section>
          <section>
            <Image height={36} alt="done" src={done} />
            {items.filter((item) => item.isCompleted).length ? (
              items
                .filter((item) => item.isCompleted)
                .map((item) => (
                  <CheckList
                    key={item.id}
                    isChecked={true}
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
                ))
            ) : (
              <div className={styles.empty}>
                <Image height={240} alt="empty done" src={empty_done} />
                아직 다 한 일이 없어요.
                <br />
                해야 할 일을 체크해보세요!
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
