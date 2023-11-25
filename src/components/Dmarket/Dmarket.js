import "./Dmarket.scss";
import ak from './../../assets/images/Ak-47.jpg';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Dmarket = ({ searchQuery }) => {
    // const [skin, setSkin] = useState(null);

    // useEffect(() => {
    //     const getSkins = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/DmarketName?searchSkins=${searchQuery}`)
    //             const info = response.data;
    //             console.log(info);
    //             setSkin(info);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getSkins();
    // }, [searchQuery]);
    
    // return (
    //     <article className="dmarket">
    //         {skin && (
    //         <div className="dmarket__card">
    //             <h2 className="dmarket__card--heading">Dmarket</h2>
    //             <div className="dmarket__card--lower">
    //                 <img className="dmarket__card--lower--img" src={ak} alt="Ak-47" />
    //                 <div className="dmarket__card--lower--details">
    //                     <p>Skin:{skin.name}</p>
    //                     <p>Price:{skin.price_min}</p>
    //                 </div>
    //             </div>
    //         </div>
    //         )}
    //     </article>
    // );
};