import React from "react";
import Image from "next/image";
import styles from "@/styles/Index.module.css";

const TitleLogo: React.FC = () => {
  return (
    <div className={styles.titleContainer}>
      <Image
        src="/images/logo.png"
        alt="logo"
        width={700 * 0.7}
        height={297 * 0.7}
      />
    </div>
  );
};

export default TitleLogo;
