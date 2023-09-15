import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/Main.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const PersonDiagram: React.FC = () => {
  return (

      <div className={styles.personDiagram}>Person Diagram</div>

  );
};

export default PersonDiagram;
