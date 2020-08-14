import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import api from "../../services/api";

import logoImg from "../../assets/logo.png";
import mercado from "../../assets/mercado-das-pulgas.jpg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post("/ongs", data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push("/");
    } catch (err) {
      console.log(err);
      alert("Erro no cadastro, tente novamente");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Feira das Pulgas" />
          <h1>Sobre</h1>
          <p>
          O mercado das pulgas (português brasileiro) ou feira da ladra (português europeu) é um local onde diversos vendedores se reúnem para comercializar bens antigos, usados e outras mercadorias, inclusive de fabricação artesanal. No Nordeste brasileiro é conhecido como “feira do rolo”.

          O mercado das pulgas original é o "Marché aux puces" de Saint-Ouen, nos subúrbios do norte de Paris, um grande bazar ao ar livre - um dos quatro existentes em Paris - que recebeu seu nome por causa da venda de vestuário, muitas vezes infestado por pulgas.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#297c38" />
            Não tenho cadastro
          </Link>
        </section>
      </div>
      <img src={mercado} alt="Mercado de Pulgas" />
    </div>
  );
}