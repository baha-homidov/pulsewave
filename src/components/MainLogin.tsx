import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "@/styles/Index.module.css";

const MainLogin: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form className={styles.mainLoginComponent} onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder=" "
        />
        <span>用户名</span>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder=" "
          value={formData.password}
          onChange={handleChange}
        />
        <span>密码</span>
      </div>

      <button type="submit">登录</button>
    </form>
  );
};

export default MainLogin;
