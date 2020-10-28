import React, {useState} from 'react';
import UserInfo from './UserInfo';
import {fetchSingleUser} from '../fetchSingleUser';
import { Link } from 'react-router-dom';
import AnimationBlocks from './AnimationBlocks';

function SerchUser(){

    const [value,setValue] = useState("");
    const [user,setUser] = useState([]);
    const [load,setIsLoad] = useState(false);
    //{console.log(value)}


    return(
        <div className="search-user-wrapper">
            {!load && <Link to="/" className="link">Go back</Link>}
            <div className="search-user-bar">
                <input type="text" placeholder="Serch for a user" className="search-input" value={value} onKeyDown={(e) =>{
                    if(e.key === 'Enter'){
                        setIsLoad(true);
                        fetchSingleUser(e.target.value,setUser);
                    }
                } } onChange={(e) => setValue(e.target.value)}/>
                <button className="search-button" onClick={() => {
                    setIsLoad(true)
                    fetchSingleUser(value,setUser,setIsLoad)
                }
                }><i class="fas fa-search"></i></button>
            </div>
         {load && <AnimationBlocks/>}
         {!load && user.map(user => <UserInfo key={user.id} id={user.id} address={user.address} name={user.name} email={user.email} phone={user.phone}/>)}
        </div>

    )
}

export default SerchUser;