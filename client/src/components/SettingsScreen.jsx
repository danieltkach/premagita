import React from "react";
import Editor from "./Editor";
import styles from "../css/SettingsScreen.module.css";

const SettingsScreen = () => {
  return (
    <div className={styles.container}>
      <h1>Configuración</h1>
      <Editor />
    </div>
  );
};

export default SettingsScreen;
