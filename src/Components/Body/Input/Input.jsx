import React,{useState} from 'react'
import Button from '../../Button/Button';

function Input() {
    const [data, setData] = useState('');
    return (

        <div className="input__class">
            <input 
                value={data} 
                onChange={(e)=>{
                    setData(e.currentTarget.value)
                    } }
                type="text" 
                placeholder="Enter your delivery location" 
                 />

                <Button
                    className = "Location_btn"
                    btn = "Location"
                    />
                <Button
                    className = "Food_btn"
                    btn = "Find Food"
                />
         </div>
            
        
    )
}

export default Input
