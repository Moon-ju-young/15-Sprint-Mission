import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import Gnb from "@/components/Gnb";
import { getItem, ResponseItem } from "@/lib/api";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const item = await getItem(Number(context.params?.itemId));

  return { props: { item } };
}

export default function Item({ item: initialItem }: { item: ResponseItem }) {
  const [item, setItem] = useState(initialItem);

  return (
    <div>
      <Gnb />
    </div>
  );
}
