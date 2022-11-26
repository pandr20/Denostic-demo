import React from "react";
import ButtonMailto from "./ButtonMailto";

const Button = ({ styles }) => (
  
  
  <button onClick={() => window.location = 'mailto:mw@dentait.dk?subject=I would like to crowdfund&body=I think the project is interesting and would like to crowdfund this project'} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Crowdfund Press here
  </button>
  
  
);

export default Button;
