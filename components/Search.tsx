import styles from "./Search.module.css";

export default function Search() {
  return (
    <label className={styles.search}>
      <div />
      <input placeholder="할 일을 입력해주세요" />
    </label>
  );
}
