import React, { useState } from "react";
import gmail from "./assets/gmail.svg";
import whatsapp from "./assets/whatsapp.svg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          console.error("Error al enviar el formulario");
        }
      })
      .catch((error) => {
        console.error("Error al conectar con el servidor:", error);
      });
  };

  return (
    <div id="contact" className="py-20  mx-auto w-[500px]">
      <div className="flex justify-between  items-center">
        <h2 className="text-white font-russo text-3xl p-2">{t("contact.contact")}</h2>
        <div className="flex gap-3 mr-2">
          <a
            className="hover:-translate-y-1 ease-in-out transform duration-300"
            href="https://wa.me/584140457124"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-6 h-6" src={whatsapp} alt="whatsapp icon" />
          </a>
          <a
            className="hover:-translate-y-1 ease-in-out transform duration-300"
            href="mailto:diegogelvis14@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-6 h-6" src={gmail} alt="gmail icon" />
          </a>
        </div>
      </div>
      <div className="w-[500px]">
        <form className="flex flex-col gap-3 w-[500px]" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t("contact.name")}
            value={formData.name}
            onChange={handleChange}
            required
            className="flex p-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.email")}
            value={formData.email}
            onChange={handleChange}
            required
            className="flex p-2 rounded-md"
          />
          <textarea
            name="message"
            placeholder={t("contact.message")}
            value={formData.message}
            onChange={handleChange}
            required
            className="flex p-2 rounded-md h-28"
          />
          <button
            className="border rounded-md py-1 text-white font-russo hover:-translate-y-1 ease-in-out transform duration-300"
            type="submit"
          >
            {t("contact.send")}
          </button>
        </form>
        {success && (
          <p className="grid text-white mt-3 font-russo justify-center items-center">
            {t("contact.alert")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
