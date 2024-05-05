import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/PulseQuality.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import pulseQualityImg from "../../public/images/icons/pulseQuality.webp";
interface PulseQualityProps {
  intensity: string;
  rhythm: string;
  summary: string;
}

const PulseQuality: React.FC<PulseQualityProps> = ({
  intensity,
  rhythm,
  summary,
}) => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className={styles.pulseQuality}>
      <div className={styles.titleContainer}>
        <Image
          alt="heart icon"
          className={styles.img}
          src={pulseQualityImg}
          height={128}
        />
        <div className={styles.title}>脉冲质量</div>
      </div>
      <div className={styles.content}>
        <div className={styles.horizontalContainer}>
          <div className={styles.container}>
            <div className={styles.small}>脉冲强度</div>
            <div className={styles.big}>{intensity}</div>
          </div>
          <div className={styles.container}>
            <div className={styles.small}>脉搏节律</div>
            <div className={styles.big}>{rhythm}</div>
          </div>
        </div>
        <div className={styles.summary}><strong>总体评价: </strong>{summary}</div>
      </div>
    </div>
  );
};

export default PulseQuality;
