import React, {useEffect} from 'react';
import Card from "../Card/Card";

const List = ({contacts, getContacts,deleteContact}) => {
    useEffect(() => {
        getContacts()
    },[])
    return (
        <div className="list-container">
            {contacts.map((item) => <Card deleteContact={deleteContact} key={item.id} item={item}/>)}
        </div>
    );
};

export default List;
