import React from 'react';
import '../images/purplerose.png';

function Card(props){
    // console.log(props);
    return (
        <div className='card'>
            <img src={props.cardContent.imgSrc}  />
            <h3>{props.cardContent.name}</h3>
            <p>{props.cardContent.phone}</p>
            <p>{props.cardContent.email}</p>
        </div>
    );
}

export default Card;