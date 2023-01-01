
import List from './List';

function Section({ contacts, setContacts, otherContacts, setOtherContacts }) {
    const handleDlete = (index) => {
        const newContacts = contacts.filter((item, i) => i !== index);
        setContacts([...newContacts]);
        setOtherContacts([...newContacts]);
    }

    const allToggle = () => {

        const isActiveAllToggle = contacts.map((contact) => ({...contact, isCompleted: true}) )
        console.log(isActiveAllToggle);
        setContacts([...isActiveAllToggle])
    }

    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor='toggle-all' onClick={allToggle} >
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        contacts.map((a, i) =>
                            <List element={a} key={a.inpValue}  onDelete={() => handleDlete(i)} onUpdate={() => setContacts([...contacts])} />
                        )
                    }

                </ul>
            </section>
        </div>
    )
}

export default Section;