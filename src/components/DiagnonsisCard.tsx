import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/DiagnosisCard.module.css";
import { useRouter } from "next/router";

interface DiagnosisCardProps {
  title: string;
  subTitle: string;
}

const DiagnosisCard: React.FC<DiagnosisCardProps> = ({ title, subTitle }) => {
  return (
    <div className={styles.diagnosisCard}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{subTitle}</div>
    </div>
  );
};

export default DiagnosisCard;
