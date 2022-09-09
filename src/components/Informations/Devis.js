import React, {useRef} from "react";
import "./Devis.css"
import emailjs from '@emailjs/browser'
const Devis = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID, process.env.REACT_APP_MAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_MAIL_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("Votre demande a été transmise !  Nous revenons vers vous dans les plus brefs délais !");
    };

    return (
    <div id="divFormulaire">
        <label id="lblContact">Contactez-nous</label>
        <form ref={form} id="formulaire" onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Nom" />
                <input type="text" name="firstname" placeholder="Prenom" />
                <input type="text" name="phone" placeholder="0611223344"/>
                <input type="text" name="mail" placeholder="machin@gmail.com"/>
            <textarea name="message" rows="3" cols="20" placeholder="Décrivez-nous vos besoins !"/>
            <input type="submit" value="Envoyer" />
        </form>
    </div>
    );
}
export default Devis;