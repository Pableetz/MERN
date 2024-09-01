import { useState } from "react";
import './ContactManager.css';

interface Contact {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    phone: string;
}

const ContactManager = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [nom, setNom] = useState<string>('');
    const [prenom, setPrenom] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [filter, setFilter] = useState<string>('');

    const handleAddContact = () => {
        if(nom === '' || email === '' || phone === '') {
            alert('Veuillez remplir tous les champs');
            return;
        }

        const newContact: Contact = {
            id: Math.random(),
            nom: nom,
            prenom: prenom,
            email: email,
            phone: phone
        }
        setContacts([...contacts, newContact]);

        setNom('');
        setPrenom('');
        setEmail('');
        setPhone('');
    }

    const handleDeleteContact = (id: number) => {
        const contactsAfterDelete = contacts.filter((contact) => contact.id !== id);
        setContacts(contactsAfterDelete);
    }


    const filteredContacts = contacts.filter((contact) => 
        contact.nom.toLowerCase().includes(filter.toLowerCase()) ||
        contact.prenom.toLowerCase().includes(filter.toLowerCase()) ||
        contact.email.toLowerCase().includes(filter.toLowerCase())
    );


    return (
        <div className="contact-container">
            <div className="contact-title">
                <h1>Voici votre Contact Manager</h1>
            </div>
            <div className="contact-inputs">
            <input type="text" value={nom} placeholder="Nom" onChange={(e) => setNom(e.target.value)} />
            <input type="text" value={prenom} placeholder="Nom" onChange={(e) => setPrenom(e.target.value)} />
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" value={phone} placeholder="Téléphone" onChange={(e) => setPhone(e.target.value)} />
            <button onClick={handleAddContact}>Ajouter</button>
            </div>
            <div className="filters">
            <input 
                type="text" 
                value={filter} 
                placeholder="Rechercher par nom, prénom ou email" 
                onChange={(e) => setFilter(e.target.value)} 
            />
            </div>

            {filteredContacts.map((contact) => (
                <div className="contact">
                    <h2>{contact.nom}</h2>
                    <h2>{contact.prenom}</h2>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <button onClick={() => handleDeleteContact(contact.id)}>Supprimer</button>
                </div>
            ))}
        </div>
    )
}

export default ContactManager;