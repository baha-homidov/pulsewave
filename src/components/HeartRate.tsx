import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/HeartRate.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const HearRate: React.FC = () => {
  return (
    <div className={styles.heartRate}>
      <div className={styles.title}>心率</div>
      <div className={styles.content}>
        <div className={styles.heartContainer}>
          <div className={styles.pulseWrapper}>
            <div className={styles.wrapper}>
              <div className={styles.pulsingheart}></div>
            </div>
          </div>
          <div className={styles.pulseRate}>69</div>
        </div>
        <div className={styles.text}>
          <div>平均值: 71</div>
          <div>最高值: 91</div>
          <div>最低值: 53</div>
        </div>
      </div>
    </div>
  );
};

export default HearRate;
