import React from 'react';

const Card=(props)=>  {
    const { email, id, name, username } = props;

    return(
        <div className="tc white bg-red dib br3 pa3 ma2 grow bw2 shadow-5 ">
            <img src={require(`../img/${id}.jpg`)} alt='photo' width='200' height='200'/>
            <div>
                <h2>{name}</h2>
                <h2>{username}</h2>
                <p>{email}</p>
            </div>

        </div>
    );
    }

export default Card;


