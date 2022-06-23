import React, {useState} from 'react';

const AddContacts = ({addContact}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')

    function handleSave() {
        if (!name || !surname || !number) {
            alert('Заполните все поля!')
        } else {
            let newContact = {
                name,
                surname,
                number,
            }
            addContact(newContact)
            // console.log(newProduct);
        }
    }
    return (
        <div style={{
            marginTop:'100px',
            display:"flex",
            flexDirection:'column'
        }}>
            <input className="inputs" type="text"
                   placeholder="name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <input className="inputs" type="text"
                   placeholder="surname"
                   value={surname}
                   onChange={(e) => setSurname(e.target.value)}/>

            <input className="inputs" type="text"
                   placeholder="number"
                   value={number}
                   onChange={(e) => setNumber(e.target.value)}/>

            <button className="save-btn" onClick={() => handleSave()}>Save</button>
        </div>
    );
};

export default AddContacts;
