import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/RawData.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const RawData: React.FC = () => {
  return (
    <div className={styles.rawData}>
      <div className={styles.title}>原始数据</div>
      <ul className={styles.content}>
        <li className={styles.placeholder}>占位符:1</li>
        <li className={styles.placeholder}>占位符:2</li>
        <li className={styles.placeholder}>占位符:3</li>
        <li className={styles.placeholder}>占位符:4</li>
      </ul>
    </div>
  );
};

export default RawData;
