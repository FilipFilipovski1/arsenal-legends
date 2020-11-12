import React from 'react';
import Card from './Card';


const CardList=({legendi})=> {

const cardComponent=legendi.map((user,i)=>{
    return <Card key={i} id={legendi[i].id} username={legendi[i].username} name={legendi[i].name} email={legendi[i].email} />

    })
    return (
<div>
    {cardComponent}
</div>
    );
}

export default CardList;
