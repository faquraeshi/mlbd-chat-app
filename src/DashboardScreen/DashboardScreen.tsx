import React, { memo } from "react";
import { Button } from "antd";

const DashboardScreen = () => {
  return (
    <>
      <p>Dashboard</p>
      <Button type="primary">Primary</Button>
    </>
  );
};

export default memo(DashboardScreen);
