import { ChangeEvent, useRef, useState } from "react";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Btn from "@/components/Btn";
import BtnImage from "@/components/BtnImage";
import CheckListDetail from "@/components/CheckListDetail";
import Gnb from "@/components/Gnb";
import { getItem, postImage, ResponseItem } from "@/lib/api";
import ic_img from "@/assets/images/img.png";
import ic_memo from "@/assets/images/memo.png";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const item = await getItem(Number(context.params?.itemId));

  return { props: { item } };
}

export default function Item({ item }: { item: ResponseItem }) {
  const [imageUrl, setImageUrl] = useState(item.imageUrl);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        const { url } = await postImage(e.target.files[0]);
        setImageUrl(url);
      } catch (error) {
        alert((error as Error).message);
      }
    }
  };

  return (
    <div>
      <Gnb />
      <form ref={formRef}>
        <CheckListDetail
          defaultValue={item.name}
          defaultIsChecked={item.isCompleted}
        />
        <section>
          <div>
            <Image alt="image" src={imageUrl ?? ic_img} />
            <label>
              <BtnImage mode={imageUrl ? "edit" : "plus"} />
              <input type="file" accept="image/*" onChange={handleChange} />
            </label>
          </div>
          <label>
            Memo
            <textarea />
            <Image alt="memo" src={ic_memo} />
          </label>
        </section>
        <section>
          <Btn mode="edit" />
          <Btn mode="delete" />
        </section>
      </form>
    </div>
  );
}
