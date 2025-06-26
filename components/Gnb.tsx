import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo_text.png";
import styles from "./Gnb.module.css";

export default function Gnb() {
  return (
    <nav className={styles.gnb}>
      <div>
        <Link href="/">
          <Image height={40} alt="logo" src={logo} />
        </Link>
      </div>
    </nav>
  );
}
