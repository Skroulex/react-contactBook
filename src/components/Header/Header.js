import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div style={{
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
            marginTop:'50px'
        }}>
            <Link to="/add">
                <button className="btn-header">ADD CONTACT</button>
            </Link>
            <Link to="/">
                <button className="btn-header">CONTACTS</button>
            </Link>
        </div>
    );
};

export default Header;
