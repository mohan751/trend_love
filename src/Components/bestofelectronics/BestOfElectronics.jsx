
import React from "react";
import './BestOfElectronics.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const data=[
    {
        image:'https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg',
        title:'Smart watches',
        price:'800'
    },
    {
        image:'https://i5.walmartimages.com/seo/Portable-Bluetooth-Speaker-Wireless-Speaker-10W-Loud-Stereo-Sound-Outdoor-Speakers-5-0-30H-Playtime-66ft-Range-Dual-Pairing-Home-Party_5c462825-76ea-4776-8265-bd743590a8ca.5ae3c55c65970f584371f215042688b0.jpeg',
        title:'Mobile Speakers',
        price:'400'
    },
    {
        image:'https://5.imimg.com/data5/SELLER/Default/2022/11/CO/UO/OO/107323815/realme-buds-air-3-neo-500x500.jpg',
        title:'Wireless Headpones',
        price:'1200'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQR6EPpYlwyDyz5oJfhrAbH2UnN2cFsyQQ1w&s',
        title:'Monitors',
        price:'20000'
    },
    {
        image:'https://cdn.moglix.com/p/IlYZwSKSbovZW-xxlarge.jpg',
        title:'Home Theatres',
        price:'1800'
    },
    {
        image:'https://5.imimg.com/data5/SELLER/Default/2024/5/422228273/FE/VG/AY/91097062/wear-professional-zero-hair-trimmers-500x500.jpeg',
        title:'Trimmers',
        price:'600'
    }
]

function BestOfElectronics(){

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };

    return(
        <div className="main">
            <h2>BestOfElectronics</h2><br/>
            <div className="main0">
                <Slider {...settings}>

            
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index} className="main1">
                                <div>
                                <img src={item.image} className="main2"/>
                                </div>
                                <br/>

                                <div className="main3">
                                    <p className="main4">{item.title}</p>
                                    <p className="main5">From ₹{item.price}</p>
                                </div>
                            </div>
                            
                        )
                    })
                }
                </Slider>
                
            </div>

        </div>
    )
}

export default BestOfElectronics;



