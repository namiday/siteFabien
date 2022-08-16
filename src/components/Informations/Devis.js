import React from "react";
import "./Devis.css"

const Devis = () => (
    <div id="divFormulaire">
        <label id="lblContact">Contactez-nous</label>
        <form id="formulaire">
            <label>
                Nom :
                <input type="text" name="name" placeholder="Nom" />
            </label>
            <label>
                Prenom :
                <input type="text" name="firstname" placeholder={"Prenom"} />
            </label>
            <label>
                Telephone :
                <input type="text" name="phone" placeholder="0611223344"/>
            </label>
            <label>
                Mail :
                <input type="text" name="mail" placeholder="machin@gmail.com"/>
            </label>
            <textarea name="message" rows="3" cols="20" placeholder="Décrivez-nous vos besoins !"/>
            <input type="submit" value="Envoyer" />
        </form>
    </div>
);

export default Devis;