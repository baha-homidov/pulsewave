import React from "react";
import styles from "@/styles/Index.module.css";
import Image from "next/image";
import TitleLogo from "@/components/TitleLogo";
import MainLogin from "@/components/MainLogin";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const HomePage: React.FC = () => {
  // animation to enable page transition animation
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.homePageComponent}>
        <TitleLogo />
        <div className={styles.content}>
          <div className={styles.qr}>
            <Image src="/images/qr.png" alt="logo" width={200} height={200} />
            <div className={styles.qrText}>扫码登录 安全快捷</div>
          </div>
          <div className={styles.divider}>
            <div className={styles.line}></div>
            <div className={styles.or}>或者</div>
            <div className={styles.line}></div>
          </div>
          <MainLogin />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
