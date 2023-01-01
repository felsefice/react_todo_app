//import { useState } from 'react';

function Footer({ contacts, setContacts, otherContacts, setOtherContacts }) {

    const clearComplated = () => {
        const newContacts = contacts.filter((contact) => !contact.isCompleted)
        setContacts([...newContacts])
        setOtherContacts([...newContacts])
    }

    const count = contacts.filter((contact) => !contact.isCompleted);

    const clickAll = () => {
        const allContacts = otherContacts.map((contact) => contact);
        setContacts([...allContacts]);
    }

    const clickActive = () => {
        const activeContacts = otherContacts.filter((contact) => !contact.isCompleted);
        setContacts([...activeContacts]);
    }

    const clickCompleted = () => {
        const complatedContacts = otherContacts.filter((contact) => contact.isCompleted);
        setContacts([...complatedContacts]);
    }


    return (
        <div>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{count.length} </strong>
                    item left
                </span>
                <ul className="filters">
                    <li>
                        <button className='selected' onClick={clickAll}>
                            All
                        </button>
                    </li>
                    <li>
                        <button onClick={clickActive}>
                            Active
                        </button>
                    </li>
                    <li>
                        <button onClick={clickCompleted}>
                            Completed
                        </button>
                    </li>
                </ul>

                <button className="clear-completed" onClick={clearComplated}>
                    Clear Completed
                </button>
            </footer>
        </div>
    )
}

export default Footer;