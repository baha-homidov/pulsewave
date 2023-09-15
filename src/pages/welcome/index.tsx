import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/Index.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const UserData: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <Layout>
      <div className={styles.userDataComponent}>
        <div className={styles.title}>告诉我们关于您的信息</div>
        <div className={styles.content}>
          <form className={styles.inputForm} onSubmit={handleSubmit}>
            <div>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder=" "
              />
              <span>年龄</span>
            </div>
            <div>
              <input
                type="number"
                name="weight"
                placeholder=" "
                value={formData.weight}
                onChange={handleChange}
              />
              <span>体重</span>
            </div>

            <div>
              <input
                type="number"
                name="height"
                placeholder=" "
                value={formData.height}
                onChange={handleChange}
              />
              <span>身高</span>
            </div>

            <button type="submit">登录</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default UserData;
