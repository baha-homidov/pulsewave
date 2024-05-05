import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/Main.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const MainButtons: React.FC = () => {
  return (
    <div className={styles.mainButtons}>
      <button className={`${styles.button} ${styles.pause}`}>
        暂停
      </button>
      <button className={`${styles.button} ${styles.start}`} type="submit">
        重新开始
      </button>
    </div>
  );
};

export default MainButtons;
