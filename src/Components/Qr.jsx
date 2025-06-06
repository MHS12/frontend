import React from "react";
import QRCode from "react-qr-code";
const Qr = () => {
  const valueToEncode = JSON.stringify("Vamshi");

  return (
    <div style={{ background: "white", padding: "16px" }}>
      <QRCode value={valueToEncode} />
    </div>
  );
};

export default Qr;
