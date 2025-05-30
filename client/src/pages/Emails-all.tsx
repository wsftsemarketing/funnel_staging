import React from "react";
import EmailTemplate from "./EmailTemplate";
import EmailTemplate2 from "./EmailTemplate2";
import EmailTemplate3 from "./EmailTemplate3";
import EmailTemplate4 from "./EmailTemplate4";
import EmailTemplate5 from "./EmailTemplate5";


export default function EmailsAll() {
  return (
        <div className="min-h-screen bg-white">
          <EmailTemplate />
          <EmailTemplate2 />
          <EmailTemplate3 />
          <EmailTemplate4 />
          <EmailTemplate5 />
        </div>
    );
}