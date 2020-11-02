import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Album from './Album';
import {roll} from '../Random';
import AnimationBlocks from './AnimationBlocks';


function Albums(){
    const [albums, setAlbums] = useState([]);
    const [loadAlbum,setLoadAlbum] = useState(false);
    const preTab = [];
    let rngTab = [];
    roll(rngTab);

        useEffect(() => {

            for(let i = 0; i <= 99; i++){
            fetch(`https://jsonplaceholder.typicode.com/albums/${rngTab[i]}`)
                .then(res => res.json())
                .then(json => {
                    preTab.push(json)
                    if(preTab.length === 100){
                        setAlbums(preTab);
                        setLoadAlbum(true)
                    }
                })
            }
        },[])



    return(

        <div className="albums-wrapper">
            {!loadAlbum && <AnimationBlocks/>}
             <Link to="/" className="link-to-main"><i className="fas fa-arrow-left fa-2x"></i></Link>
            <h1 className="albums-header">Albums</h1>
            {loadAlbum && albums.map(album => <Album key={album.id} userId={album.userId} id={album.id} title={album.title}/>)}
        </div>
    )
}

export default Albums;