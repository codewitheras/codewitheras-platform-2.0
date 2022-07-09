/* eslint-disable no-unused-vars */
import React from "react";
import { usePaystackPayment } from "react-paystack";
import { useHistory } from "react-router-dom";

const usePayStackHook = (email, amount) => {
  const history = useHistory();
  
  // PayStack Config
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount,
    publicKey: process.env.REACT_PAYSTACK_API_KEY,
    currency: "GHS",
  };

  // you can call this function anything
  const onSuccess = () => {
    // Implementation for whatever you want to do with reference and after success call.
    history.push("/success");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    history.push("/failed");
  };

  const initializePayment = usePaystackPayment(config);

  const payWithPayStack = async () => {
    initializePayment(onSuccess, onClose);
  };

  return payWithPayStack;
};

export default usePayStackHook;
