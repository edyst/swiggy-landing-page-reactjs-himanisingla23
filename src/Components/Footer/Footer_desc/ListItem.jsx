import React from 'react'

export default function ListItem(props) {
    return (
        <ul>
            {
                props.data.map(item=>{
                    return <li><a href="#">{item}</a></li>
                })
            }

        </ul>
    )
}
