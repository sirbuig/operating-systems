import React from "react";
import clsx from "clsx";
import styles from "./question.module.css";

export default function Question({ children }) {
  return (
    <div className={clsx(styles.question)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
