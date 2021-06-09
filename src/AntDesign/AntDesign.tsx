import React, { memo } from "react";
import styles from "./AntDesign.module.scss";

const AntDesignScreen = () => {
  return (
    <>
      <p className={styles.p_bg}>Ant Design</p>
    </>
  );
};

export default memo(AntDesignScreen);
