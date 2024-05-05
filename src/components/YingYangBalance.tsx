import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/YingYangBalance.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import yingYangImg from "../../public/images/icons/yingyang.webp";
interface YingYangBalanceProps {
  ying: number;
  yang: number;
  summary: string;
}

const YingYangBalance: React.FC<YingYangBalanceProps> = ({
  ying,
  yang,
  summary,
}) => {
  return (
    <div className={styles.YingYangBalance}>
      <div className={styles.titleContainer}>
        <Image
          alt="heart icon"
          className={styles.img}
          src={yingYangImg}
          height={128}
        />
        <div className={styles.title}>阴阳平衡</div>
      </div>
      <div className={styles.content}>
        <div className={styles.infoContainer}>
          <strong>阴阳平衡状态: </strong>
          <p>{summary}</p>
        </div>
        <div className={styles.balanceContainer}>
          <div style={{ width: `${ying}%` }} className={styles.white}></div>
          <div
            style={{ width: `${100 - ying}%` }}
            className={styles.black}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default YingYangBalance;
