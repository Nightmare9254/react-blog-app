import React from 'react';
import {Link} from 'react-router-dom';
import {imgTab} from  '../userImg';

function UserInfo({name, email, address, id}){

    return(
        <div className="user-info">
            <p>Username: <span className="user-info-span">{name}</span></p>
            <p>Email: <span className="user-info-span">{email}</span></p>
            <p>City: <span className="user-info-span">{address.city}</span></p>
            <p>Zipcode: <span className="user-info-span">{address.zipcode}</span></p>
            <img src={imgTab[id]} className=" user-info-img"/>
            <Link to="/" className="link link-user-info">Go back</Link>
        </div>
    )
}


export default UserInfo;