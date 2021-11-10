import React from "react";
import { Alert } from "react-bootstrap";

interface ErrorMsgProps {
  msgTxt: string;
}

export const ErrorMsg: React.FC<ErrorMsgProps> = ({ msgTxt }) => {
  return <Alert variant={"danger"}>{msgTxt}</Alert>;
};
