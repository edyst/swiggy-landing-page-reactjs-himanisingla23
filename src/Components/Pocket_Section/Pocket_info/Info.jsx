import React from 'react'
import Image from '../../Images/Image'
import "./Info.css"

function Info() {
    return (
        <div className="info-div" >
            <h1>Restaurants in your pocket</h1>
            <p>Order from your favorite restaurants & track on the go, 
            with the all-new Swiggy app.</p>
            {/* <div>
                <Image
                    src = "https://web.archive.org/web/20210909224830im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
                    Cls = "play_img"
                />
                <Image
                    src="https://web.archive.org/web/20210909224830im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
                    Cls = "play_img"
                />

            </div>
             */}
        </div>
    )
}

export default Info
