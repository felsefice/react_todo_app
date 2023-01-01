import { useState, useEffect } from 'react'
import Footer from './Footer';
import Header from './Header';
import Section from './Section';
import './index.css';

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [otherContacts, setOtherContacts] = useState([]);

    useEffect(() => {
        console.log(contacts);

    }, [contacts]);

    return (
        <div>
            <section className='todoapp'>
                <Header contacts={contacts} setContacts={setContacts} otherContacts={otherContacts} setOtherContacts={setOtherContacts} />
                <Section contacts={contacts} setContacts={setContacts} otherContacts={otherContacts} setOtherContacts={setOtherContacts} />
                <Footer contacts={contacts} setContacts={setContacts} otherContacts={otherContacts} setOtherContacts={setOtherContacts} />
            </section>
        </div>

    )
}

export default Contacts;