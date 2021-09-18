import React from 'react'
import Image from '../Images/Image'
import Button from '../Button/Button'
import Input from './Input/Input'
import './Body'

export default function Body() {
    return (
        <div className="main-body">
        <div className="left_div">
           <Image
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltPMGDF7UGsme8WBuFxEwG8H-Ys4nW7TbOBFXG4H36Q11Ccbmc0tvVK_RU4N9-EI2GQ&usqp=CAU" 
               cls="swiggy_logo"
           />
            <div>
                <Button
                    className = "login_btn"
                    btn = "Login"
                />
                <Button
                    className = "sign_btn"
                    btn = "Sign UP"
                />
            </div>
            <Input/>
        </div>

            <div className="right_div">
                <Image
                src='https://web.archive.org/web/20210903175246im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq'
                cls= "main_img"
                />

            </div>

         
        </div>
    )
}
