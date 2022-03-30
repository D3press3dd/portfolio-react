import qrCode from "../img/qr-code.png";

const QrModal = ({ isOpen, handleModal }) => {
  return (
    <div
      onClick={handleModal}
      className={`contact-qr-container ${isOpen ? "is-close" : ""}`}
    >
      <img className="qr-code" src={qrCode} alt="" />
    </div>
  );
};

export default QrModal;
