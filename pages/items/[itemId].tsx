import { ChangeEvent, useState } from "react";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import BtnImage from "@/components/BtnImage";
import CheckListDetail from "@/components/CheckListDetail";
import Gnb from "@/components/Gnb";
import { getItem, postImage, ResponseItem } from "@/lib/api";
import ic_img from "@/assets/images/img.png";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const item = await getItem(Number(context.params?.itemId));

  return { props: { item } };
}

export default function Item({ item }: { item: ResponseItem }) {
  const [imageUrl, setImageUrl] = useState(item.imageUrl);

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
      <form>
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
        </section>
      </form>
    </div>
  );
}
