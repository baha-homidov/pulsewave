import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/Imbalance.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import heartRateImg from "../../public/images/icons/imbalance.webp";
interface HearRateProps {
  type: string;
  info: string;
  fullInfo: string;
}

const Imbalance: React.FC<HearRateProps> = ({ type, info, fullInfo }) => {
  const [showInfo, setShowInfo] = useState(false);

  if (showInfo) {
    return (
      <div className={styles.imbalance}>
        <button
          onClick={() => {
            setShowInfo(false);
          }}
          className={styles.hideButton}
        >
          <svg
            fill="#ffffff"
            height="80px"
            width="80px"
            version="1.1"
            className={styles.hideIcon}
            viewBox="0 0 460.775 460.775"
          >
            <path
              d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
            />
          </svg>
        </button>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{type}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.imbalanceInfo}>{fullInfo}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.imbalance}>
      <div className={styles.titleContainer}>
        <Image
          alt="heart icon"
          className={styles.img}
          src={heartRateImg}
          height={128}
        />
        <div className={styles.title}>发现健康失衡</div>
      </div>
      <div className={styles.content}>
        <div className={styles.typeContainer}>
          <strong>类型：</strong>
          <p>{type}</p>
        </div>
        <div className={styles.infoContainer}>
          <strong>描述：</strong>
          <p>{info}</p>
        </div>
        <button
          onClick={() => {
            setShowInfo(true);
          }}
        >
          更多
          <svg
            width="9"
            height="15"
            className={styles.svg}
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.377208 0.478811C-0.125736 0.981755 -0.125736 1.7942 0.377208 2.29715L5.38085 7.30079L0.377208 12.3044C-0.125736 12.8074 -0.125736 13.6198 0.377208 14.1228C0.880151 14.6257 1.6926 14.6257 2.19554 14.1228L8.1148 8.20351C8.61774 7.70056 8.61774 6.88812 8.1148 6.38517L2.19554 0.465915C1.70549 -0.0241328 0.880151 -0.0241324 0.377208 0.478811Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Imbalance;
