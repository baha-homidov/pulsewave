import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/Main.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import HearRate from "@/components/HeartRate";
import RawData from "@/components/RawData";

import PersonDiagram from "@/components/PersonDiagram";
import MainButtons from "@/components/MainButtons";
import DiagnosisCard from "@/components/DiagnonsisCard";
import Imbalance from "@/components/Imbalance";
import PulseQuality from "@/components/PulseQuality";

const MainView: React.FC = () => {
  return (
    <Layout>
      <div className={styles.mainViewComponent}>
        <div className={styles.content}>
          <div className={styles.leftContainer}>
            <div className={styles.left}>
              <div className={styles.logo}>PULSEWAVE TECH</div>
            </div>
            <div className={styles.right}>
              <div className={styles.bodyGraphic}>
                <PersonDiagram />
              </div>
              <div className={styles.diagnosisContainer}>
                <DiagnosisCard
                  title="气的不平衡警报"
                  subTitle="系统检测到身体能量流中的气的不平衡，气，在中医学中是一个其本断念，对整体健康和幸福至关重要。气的不平衡可能导致一系列症状，如疲劳、失眠、消化问题和情绪波动。"
                />
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.top}>
              <div>
                <HearRate current="71" highest="97" lowest="52" />
              </div>
              <div>
                <PulseQuality
                  intensity="强"
                  rhythm="规则"
                  summary="脉冲质量均衡、强劲"
                />
              </div>
              <div>
                <Imbalance
                  type="肝气郁结"
                  info="肝经气血不畅，导致腹部不适和烦躁不安；通过针灸、草药和压力管理缓解。"
                  fullInfo="肝经气血不畅，导致腹部不适和烦躁不安；通过针灸、草药和压力管理缓解。肝经气血不畅，导致腹部不适和烦躁不安；通过针灸、草药和压力管理缓解。肝经气血不畅，导致腹部不适和烦躁不安；通过针灸、草药和压力管理缓解。肝经气血不畅，导致腹部不适和烦躁不安；通过针灸、草药和压力管理缓解。肝经气血不畅，导致腹部不适和烦躁不安；通过针灸、草药和压力管理缓解。肝经气血不畅，导致腹部不适和烦躁不安；通过针灸、草药和压力管理缓解。"
                />
              </div>
              <div></div>
            </div>
            <div className={styles.bottom}></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainView;
