import React from "react";
import clsx from "clsx";
import styles from "./answer.module.css";

export default function Answer({ children }) {
  return (
    <div className={clsx(styles.answer)}>
      <h5 className={styles.title}>✅ Răspuns</h5>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
