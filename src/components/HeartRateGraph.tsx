import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/HeartRateGraph.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import heartRateImg from "../../public/images/icons/heartrate.webp";

const HearRateGraph: React.FC = () => {
  const divs = [];

  for (let i = 0; i < 200; i++) {
    divs.push(
      <div className={styles.dot} key={i}>
        {}
      </div>
    );
  }
  return <div className={styles.hearRateGraph}></div>;
};

export default HearRateGraph;
