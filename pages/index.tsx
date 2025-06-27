import Btn from "@/components/Btn";
import Gnb from "@/components/Gnb";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div id="home">
      <Gnb />
      <main>
        <form>
          <Search />
          <Btn mode="add" />
        </form>
      </main>
    </div>
  );
}
