import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative mt-28">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={true}
            showIndicators={false}
            showThumbs={false}
            interval={3000}
            >
                <div>
                    <img loading="lazy" src="https://links.papareact.com/gi1"/>
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/6ff"/>
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/June_21/Pantry/01_5TH-JUN-pc1x._CB667446449_.jpg"/>
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/June21/SUD/OP_9pro_1500x600_1._CB667432116_.jpg"/>
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/SFH21/MSO/SFH_Hero_PC_1x._CB667323714_.jpg"/>
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/June_5th/Nord_June_5th__1500x600._CB667420464_.jpg"/>
                </div>

            </Carousel>
            
        </div>
    )
}

export default Banner
