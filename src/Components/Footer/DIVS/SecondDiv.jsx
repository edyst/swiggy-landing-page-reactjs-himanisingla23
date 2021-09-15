import React from 'react'
import Heading from '../Footer_heading/Heading'
import ListItem from '../Footer_desc/ListItem'
import heading_data, {list_data} from '../data'

function SecondDiv() {
    return (
        <div>
            <Heading
                heading = {heading_data[1]}
            />
            <ListItem
                data = {list_data[3][0]}
            />
        </div>        
    )
}

export default SecondDiv
