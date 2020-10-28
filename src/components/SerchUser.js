import React, {useState} from 'react';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';
import AnimationBlocks from './AnimationBlocks';

function SerchUser(){

    const [value,setValue] = useState("");
    const [user,setUser] = useState([]);
    const [load,setIsLoad] = useState(false);
    //{console.log(value)}
    const [isSearching,setIsSearching] = useState(false)

    function fetchUser(){
        fetch(`https://jsonplaceholder.typicode.com/users/?username=${value}`)
        .then(res => res.json())
        .then(json =>  {
            setUser(json)
            setIsLoad(true)
            setIsSearching(true)
        })
    }

    function add(e){
        if(e.keyCode === 13){
            fetchUser();
        }
    }

    return(
        <div className="search-user-wrapper">
            <Link to="/" className="link">Go back</Link>
            <div className="search-user-bar">
                <input type="text" placeholder="Serch for a user" className="search-input" onKeyDown={add} value={value}  onChange={(e) => setValue(e.target.value)}/>
                <button className="search-button" onClick={() => fetchUser()}
                ><i class="fas fa-search"></i></button>
            </div>
         {!load && isSearching && <AnimationBlocks/>}
         {isSearching && user.length === 0 && <p>User not  found</p>}
         {load && user.map(user => <UserInfo key={user.id} id={user.id} address={user.address} name={user.name} email={user.email} phone={user.phone}/>)}
        </div>

    )
}

export default SerchUser;