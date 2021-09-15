import React from 'react';
import Image from '../../Images/Image';
import "./Info.css";


function Info() {
    return (
        <div >
            <h1>Restauants in Your Pocket</h1>
            <p>Order from your favorite restaurants & track on the go, 
            with the all-new Swiggy app.</p>
            <div>
                <Image
                    src = "https://web.archive.org/web/20210909224830im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
                    Cls = "Googleplay"
                />
                <Image
                    src="https://web.archive.org/web/20210909224830im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
                    Cls = "Googleplay"
                />

            </div>
            
        </div>
    )
}

export default Info
