import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Photo from './Photo';
import {Link} from 'react-router-dom';
import AnimationBlocks from './AnimationBlocks';

function Photos(){
    const [photos,setPhotos] = useState([]);
    const [album,setAlbum] = useState({});
    const [photoLoad,setPhotoLoad] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(response => response.json())
        .then(json => {
            setPhotos(json);
            setPhotoLoad(true);
        })

        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(res => res.json())
        .then(json => setAlbum(json));
        //.then(json => console.log(json));
    },[id])

    return (
        <div className="photos-wrapper">
            {!photoLoad && <AnimationBlocks/>}
            {photoLoad && <Link to="/albums" className="link-to-main"><i class="fas fa-arrow-left fa-2x"></i></Link>}
            {photoLoad && <h1 className="photos-album-title">Album title: {album.title}</h1>}
            {photoLoad && photos.map(photo => <Photo key={photo.id} title={photo.title} url={photo.url}/>)}
        </div>
    )
}

export default Photos;