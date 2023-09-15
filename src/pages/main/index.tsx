import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/Main.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import HearRate from "@/components/HeartRate";
import RawData from "@/components/RawData";
import PossibleCases from "@/components/PossibleCases";
import PersonDiagram from "@/components/PersonDiagram";
import MainButtons from "@/components/MainButtons";

const MainView: React.FC = () => {
  return (
    <Layout>
      <div className={styles.mainViewComponent}>
        <div className={styles.content}>
          <div className={styles.leftContainer}>
            <HearRate />
            <RawData />
            <PossibleCases />
          </div>
          <div className={styles.rightContainer}>
            <PersonDiagram />
            <MainButtons />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainView;
