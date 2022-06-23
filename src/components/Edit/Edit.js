import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const Edit = ({getOneContact, oneContact, updateContact}) => {
    const params = useParams();
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');

    function handleSave() {
        let editedContact = {
            name,
            surname,
            number,
        };
        updateContact(params.id, editedContact)
        navigate("/")
    }

    useEffect(() => {
        getOneContact(params.id)
    }, [])
    useEffect(() => {
        if (oneContact) {
            setName(oneContact.name)
            setSurname(oneContact.surname)
            setNumber(oneContact.number)
        }
    }, [oneContact])
    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            {oneContact ? <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <input className="inputs" value={name} type="text" onChange={(e) => setName(e.target.value)}/>
                <input className="inputs" value={surname} type="text" onChange={(e) => setSurname(e.target.value)}/>
                <input className="inputs" value={number} type="text" onChange={(e) => setNumber(e.target.value)}/>
                <button className="save-btn" onClick={() => handleSave()}>Save</button>
            </div> : <h2>Loading...</h2>}
        </div>
    );
};

export default Edit;
