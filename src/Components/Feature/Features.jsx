import React from 'react';
import Cards from './Cards/Cards';
import CardData from './CardData'
import './Features.css'


function Features() {

    return (
        <>
        {CardData.map(val => {
            return (
                <Cards 
                src = {val.src}
                width = {val.width}
                height = {val.height}
                head = {val.head}
                desc = {val.desc}
                />
            )
        })}

        </>
    )
}

export default Features;
