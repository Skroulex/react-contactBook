import React, {useState} from 'react';
import "./App.css"
import AddContacts from "./components/AddContacts/AddContacts";
import axios from "axios";
import List from "./components/List/List";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";

const App = () => {
    const [contacts, setContacts] = useState([])
    const [oneContact, setOneContact] = useState(null)
    const API = " http://localhost:8000/contacts"

    async function addContact(newContact) {
        await axios.post(API, newContact);
        getContacts()
    }

    async function getContacts() {
        let res = await axios(API)
        setContacts(res.data);
    }

    async function deleteContact(id) {
        await axios.delete(`${API}/${id}`)
        getContacts()
    }
    async function getOneContact(id){
        let res = await axios(`${API}/${id}`)
        setOneContact(res.data)
    }
    async function updateContact(id, editedContact) {
        await axios.patch(`${API}/${id}`, editedContact)
        getContacts()
    }


    return (
        <BrowserRouter>
            <Header />
            <img className="img" src="https://i.pinimg.com/474x/63/7a/d8/637ad8795b2d9b7114892fa62092c89b.jpg" alt="phone"/>
            <Routes>
                <Route path="/add" element={<AddContacts contacts={contacts} addContact={addContact}/>} />
                <Route path="/" element={<List deleteContact={deleteContact} contacts={contacts} getContacts={getContacts}/>} />
                <Route path="/edit/:id" element={<Edit updateContact={updateContact} oneContact={oneContact} getOneContact={getOneContact}/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
