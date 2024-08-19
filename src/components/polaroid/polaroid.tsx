import { TPolaroid } from "../../types/polaroid";
import styles from "./polaroid.module.scss";

export default function Polaroid({ id, date, image, description }: TPolaroid) {
  return (
    <div className={styles.container}>
      <div className={styles.polaroid}>
        <div className={styles.imageContainer}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardFront}>
              <img src={image} alt={id} />
            </div>
            <div className={styles.flipCardBack}>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
}
