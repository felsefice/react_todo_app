import { useState, useEffect } from 'react'

const initialInpValues = { inpValue: "" };

function Header({ contacts, setContacts, otherContacts, setOtherContacts }) {
    const [inp, setInp] = useState(initialInpValues);

    useEffect(() => {
        setInp(initialInpValues);
    }, [contacts]);

    const onChangeInp = (e) => {
        setInp({ ...inp, inpValue: e.target.value });
    }

    const onSubmitForm = (e) => {
        //console.log(inp, contacts);
        e.preventDefault();

        if (inp.inpValue === "") {
            return false;
        }

        setContacts([...contacts, inp]);
        setOtherContacts([...otherContacts, inp]);

    }



    return (
        <div>
            <header className='header'>
                <h1>ToDo's</h1>
                <form onSubmit={onSubmitForm} >
                    <input
                        className='new-todo'
                        onChange={onChangeInp}
                        value={inp.inpValue}
                        placeholder='What needs to be done?'
                        autoFocus
                    />
                </form>
            </header>
        </div>
    )
}

export default Header;