import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Album from './Album';
import {roll} from '../Random';


function Albums(){
    const [albums, setAlbums] = useState([]);
    const preTab = [];
    let rngTab = [];
    roll(rngTab);

        useEffect(() => {

            for(let i = 0; i <= 100; i++){
            fetch(`https://jsonplaceholder.typicode.com/albums/${rngTab[i]}`)
                .then(res => res.json())
                .then(json => {
                    preTab.push(json)
                    if(preTab.length === 100){
                        setAlbums(preTab);
                    }
                })
            }
        },[])



    return(
        <div className="albums-wrapper">
            <Link to="/" className="album-link">Main Page</Link>
            <h1>Albums</h1>
            {albums.map(album => <Album key={album.id} userId={album.userId} id={album.id} title={album.title}/> )}
        </div>
    )
}

export default Albums;