import React from "react";
import { BtnContainer } from "./Button.styles";
import { SaveBtn } from "./Button.styles";

const Button = ({ label, onClick }) => {
  return (
    <BtnContainer>
      <SaveBtn onClick={onClick}>{label}</SaveBtn>
    </BtnContainer>
  );
};

export default Button;
