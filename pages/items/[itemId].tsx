import { GetServerSidePropsContext } from "next";
import CheckListDetail from "@/components/CheckListDetail";
import Gnb from "@/components/Gnb";
import { getItem, ResponseItem } from "@/lib/api";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const item = await getItem(Number(context.params?.itemId));

  return { props: { item } };
}

export default function Item({ item }: { item: ResponseItem }) {
  return (
    <div>
      <Gnb />
      <form>
        <CheckListDetail
          defaultValue={item.name}
          defaultIsChecked={item.isCompleted}
        />
      </form>
    </div>
  );
}
