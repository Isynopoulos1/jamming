import React from "react";

import { Btn } from "./Button.styles";

const Button = ({ label, onClick }) => {
  return <Btn onClick={onClick}>{label}</Btn>;
};

export default Button;
