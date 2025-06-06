import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";

const ScanQr = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });

    scanner.render(
      async (decodedText) => {
        await axios.post("http://localhost:8000/scaned", decodedText);
        scanner.clear(); // stop scanning after one scan
      },
      (error) => {
        console.warn("Scan error:", error);
      }
    );
  }, []);

  return (
    <div>
      <h2>Scan QR Code</h2>
      <div id="reader" style={{ width: "300px" }}></div>
    </div>
  );
};

export default ScanQr;
