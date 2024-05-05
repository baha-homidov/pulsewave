import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/HeartRate.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import heartRateImg from "../../public/images/icons/heartrate.webp";
interface HearRateProps {
  highest: string;
  lowest: string;
  current: string;
}

const HearRate: React.FC<HearRateProps> = ({ current, highest, lowest }) => {
  return (
    <div className={styles.heartRate}>
      <div className={styles.titleContainer}>
        <Image
          alt="heart icon"
          className={styles.img}
          src={heartRateImg}
          height={128}
        />
        <div className={styles.title}>心跳</div>
      </div>
      <div className={styles.content}>
        <div className={`${styles.container}  ${styles.current}`}>
          <div className={styles.label}>当前</div>
          <div className={styles.textContainer}>
            <div className={styles.num}>{current}</div>
            <div className={styles.text}>BPM</div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.label}>最高</div>
          <div className={styles.textContainer}>
            <div className={styles.num}>{highest}</div>
            <div className={styles.text}>BPM</div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.label}>最低</div>
          <div className={styles.textContainer}>
            <div className={styles.num}>{lowest}</div>
            <div className={styles.text}>BPM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearRate;
