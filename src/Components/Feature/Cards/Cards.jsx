import React from 'react';
function Cards(props) {
    return (
       <>
        <div className="feature-data">
            <div className="feature-img">
                <img 
                    src={props.src} 
                    alt=""
                    height={props.height} 
                    width={props.width}
                />
            </div>
            <div className="feature-heading">{props.head}</div>
            <div className="feature-desc"><p>{props.desc}</p></div>
        </div>
       </>
    )
}

export default Cards;

