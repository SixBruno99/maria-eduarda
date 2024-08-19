import { TPolaroid } from "../../types/polaroid";
import styles from "./polaroid.module.scss";

export default function Polaroid({ id, date, image }: TPolaroid) {
  return (
    <div className={styles.container}>
      <div className={styles.polaroid}>
        <img src={image} alt={id} />
        <p>{date}</p>
      </div>
    </div>
  );
}
