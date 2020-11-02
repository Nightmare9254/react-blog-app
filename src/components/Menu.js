import React,{useState} from 'react';
import ListBurger from '../components/ListBurger';

function Menu(){

    const [isOpen,setIsOpen] = useState(false);

    return(
        <div className="hamburger">
                    {!isOpen && <i onClick={() => {
                    setIsOpen(true)
                    }} className="fas fa-bars"></i>}
                {isOpen && <i onClick={() => {
                    setIsOpen(false)
                }} className="fas fa-chevron-right"></i>}
                <ListBurger open={isOpen}/>
       </div>
    )
}

export default Menu;