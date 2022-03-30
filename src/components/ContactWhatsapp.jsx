import { useState } from "react";
import useLanguages from "../context/LanguageContext";
import logoWs from "../img/whatsapp-logo.png";
import QrModal from "./QrModal";

const ContactWhatsapp = () => {
  const { language } = useLanguages();

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <div className="contact-container">
      <p className="contact-title">
        {language === "en"
          ? "What are you waiting for?"
          : "¿Que estas esperando?"}
      </p>

      <p className="contact-description">
        {language === "en"
          ? "Im looking for new experiences in the business, my inbox is always open, don't hesitate to contact me, just click the whatsapp icon below or email me, i will respond as soon as possible"
          : "Estoy buscando nuevas experiencias en el negocio, mi bandeja de entrada siempre está abierta, no dude en contactarme, solo clickee el icono de whastapp a continuación o envíeme un correo electrónico, le responderé lo antes posible"}
      </p>

      <img
        className="contact-image"
        src={logoWs}
        alt="Whatsapp logo"
        aria-label="Whatsapp"
        onClick={handleModal}
      />
      <QrModal isOpen={isOpen} handleModal={handleModal} />
    </div>
  );
};

export default ContactWhatsapp;
