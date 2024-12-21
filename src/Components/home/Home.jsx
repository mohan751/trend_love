import React from "react";
import './Home.css';
import mobiles from '../assets/mobiles.jpg';
import Fashions from '../assets/Fashions.jpeg';
import Electronics from '../assets/Electronics.avif';
import HomeFurnitures from '../assets/HomeFurnitures.webp';
import Toys from '../assets/Toys.avif';
import Grocery from '../assets/Grocery.webp';
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function Home(){
    const navigate = useNavigate();
    const onclickMobile = () => {
        navigate('/mobilespage'); 
      };
    return(

        <div>
            <div className="navbar">
                <h1>TRENDLOVE</h1>

                <form className="form">
                    <input type="search" placeholder="Search for Products,Brands & More"/>
                </form>
                    

                <div className="login-cart">
                    <p>login</p>
                    <p>cart</p>
                 </div>


            </div>

            <br/>
            <br/>

            <div className="nav2">

                <div>
                       <img src={mobiles} alt="mobiles"  onClick={onclickMobile}/>
                       <Link to={'/mobilespage'}>Mobiles</Link>
                </div>

                <div>
                     <img src={Fashions} alt="Fashions" />
                      <p>Fashions</p>
                </div>

                <div className="electronics">
                     <img src={Electronics} alt="Electronics" />
                     <p>Electronics</p>
                </div>

                <div>
                     <img src={HomeFurnitures} alt="Home&Furnitures" />
                     <p>Furnitures</p>
                </div>

                <div>
                    <img src={Toys} alt="Toys" />
                    <p>Toys</p>
                </div>

                <div>
                     <img src={Grocery} alt="Grocery" />
                     <p>Grocery</p>
                </div>


             </div>



        </div>


    )
}

export default Home;