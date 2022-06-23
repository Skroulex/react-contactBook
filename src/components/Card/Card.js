import React from 'react';
import {Link} from "react-router-dom";

const Card = ({item,deleteContact}) => {
    return (
        <div>
            <div className="container">
                <h2 className="names">{item.name}</h2>
                <h2 className="names">{item.surname}</h2>
                <h2 className="names">{item.number}</h2>
                <Link to={`/edit/${item.id}`}><button className="edits">
                    Edit
                </button></Link>
                <button className="edits" onClick={() => deleteContact(item.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;
