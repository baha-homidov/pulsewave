import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/PersonDiagram.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import bodyImg from "../../public/images/body.webp";
const PersonDiagram: React.FC = () => {
  return (
    <div className={styles.personDiagram}>
      <Image src={bodyImg} className={styles.img} alt="body" width={200} />
    </div>
  );
};

export default PersonDiagram;
