import React, { useState, useEffect } from "react";

const Alert = ({ alertObj, setAlertObj }) => {
  useEffect(() => {
    setTimeout(() => {
      setAlertObj({ ...alertObj, show: false });
    }, 3000);
  });
  return <div>Alert</div>;
};

export default Alert;
