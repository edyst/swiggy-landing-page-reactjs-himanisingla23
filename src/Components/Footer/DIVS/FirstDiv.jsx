import React from 'react'
import Heading from '../Footer_heading/Heading'
import ListItem from '../Footer_desc/ListItem'
import heading_data, {list_data} from '../data'

function FirstDiv() {
    return (
        <div className="first_div">
        { 
            heading_data[0].map((item,index)=>{
                 return(
                     <div>
                         <Heading
                             heading={item}
                         />
                         <ListItem
                             data = {list_data[index]}
                         />
                     </div>
                 )
             })
         
        }
        </div>
    )
}

export default FirstDiv
