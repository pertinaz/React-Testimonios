import React from 'react';
import '../styleSheets/weaponWiki.css';

function Weapon(props){
    return(
      <div className='weapon-container'>
        <img className='weapon-image' 
        src={require(`../images/weapon-${props.image}.png`)} 
        alt='Weapon reference image in pgn format'/>
          <div className='description-container'>
            <p className='weapon-name'><strong>{props.name}</strong>, ammo  {props.cartridge}</p>
            <p className='weapons-specs'>{props.manufacturingCountry} in <strong>{props.production}</strong></p>
            < p className='details'>"{props.details}"</p>
          </div>
      </div>
    );
}

export default Weapon;