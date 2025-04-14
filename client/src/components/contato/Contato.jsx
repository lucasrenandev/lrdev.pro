import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Axios from "axios";
import { Contact, ContactContent, ContactForm, 
InputField, Label, Input, TextArea } from "./styled";

export default function ContactComponent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        message: ""
    });
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);
    const [isSeding, setIsSeding] = useState(false);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setIsSeding(true);
            await Axios.post(`${import.meta.env.VITE_API_URL}/contact-form`, formData);
            setFadeOut(true);
            setTimeout(() => {
                navigate("/agradecimento");
            }, 600);
            setIsSeding(false);
        }
        catch(error) {
            setIsSeding(false);
            console.error("Error: ", error);
        }
    };

    return(
        <Contact id="contato">
            <div className="heading" data-aos="fade-left" data-aos-delay="200">
                <h2>Contate-me</h2>
                <p>Está buscando um profissional comprometido, criativo e atento aos detalhes? Estou aqui para te ajudar! Fale comigo e vamos dar vida ao seu projeto.</p>
            </div>
            <motion.div
                initial={{opacity: 1}}
                animate={{opacity: fadeOut ? 0 : 1}}
                transition={{duration: 0.6}}
            >
                <ContactContent>
                    <ContactForm onSubmit={handleSubmit}>
                        <InputField data-aos="zoom-in" data-aos-delay="200">
                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" 
                            name="name" 
                            id="name" 
                            pattern="[A-Za-zÀ-ÿ\s]+"
                            placeholder="Seu nome" 
                            autoComplete="off"
                            onChange={handleChange} required/>
                        </InputField>
                        <InputField data-aos="zoom-in" data-aos-delay="400">
                            <Label htmlFor="email">E-mail</Label>
                            <Input type="email"
                            name="email" 
                            id="email" 
                            placeholder="email@gmail.com" 
                            autoComplete="off"
                            onChange={handleChange} required/>
                        </InputField>
                        <InputField data-aos="zoom-in" data-aos-delay="600">
                            <Label htmlFor="tel">Telefone</Label>
                            <Input type="tel" 
                            name="tel" 
                            id="tel" 
                            pattern="\(?\d{2}\)?\s?\d{4,5}-\d{4}"
                            placeholder="11 91234-5678"
                            autoComplete="off" 
                            onChange={handleChange} required/>
                        </InputField>
                        <InputField data-aos="zoom-in" data-aos-delay="800">
                            <Label htmlFor="message">Mensagem</Label>
                            <TextArea name="message" 
                            id="message" 
                            placeholder="Descrição do projeto" 
                            onChange={handleChange} required></TextArea>
                        </InputField>
                        <div className="button-box" data-aos="zoom-in" data-aos-delay="1000">
                            <button type="submit" className="button" disabled={isSeding}>
                                {isSeding ? "Enviando..." : "Enviar"}
                            </button>
                        </div>
                    </ContactForm>
                </ContactContent>
            </motion.div>
        </Contact>
    );
}