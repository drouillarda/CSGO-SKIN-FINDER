import "./Bitskins.scss";
import ak from './../../assets/images/Ak-47.jpg';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Bitskins = () => {
    // const [skin, setSkin] = useState([]);
    // const apiKey = "a1b1c4e460e59dfbe9b88fd7df3b1ce5e259a2e55b718dceffcd50acacce1e46";

    // useEffect(() => {
    //     const getSkins = async () => {
    //         try {
    //             const response = await axios.get(`${apiKey}https://api.bitskins.com/market/insell/730`)
    //             const info = response.data;
    //             setSkin(info);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getSkins();
    // }, []);

    return (
        <article className="bitskins">
            <div className="bitskins__card">
                <h2 className="bitskins__card--heading">Bitskins</h2>
                <div className="bitskins__card--lower">
                <img className="bitskins__card--lower--img" src={ak} alt="Ak-47" />
                    <div className="bitskins__card--lower--details">
                        <p>skin.name</p>
                        <p>price_min</p>
                    </div>
                </div>
            </div>
        </article>
    );
};