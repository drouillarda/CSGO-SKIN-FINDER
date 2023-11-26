import "./Skinport.scss";
import ak from './../../assets/images/Ak-47.jpg';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Skinport = ({ searchQuery }) => {
    const [skin, setSkin] = useState(null);

    useEffect(() => {
        const getSkins = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Skinport/${searchQuery}`)
                const info = response.data;
                console.log(info);
                setSkin(info);
            } catch (error) {
                console.log(error);
            }
        };
        getSkins();
    }, [searchQuery]);

    return (
        <article className="skinport">
            {skin && (
            <div className="skinport__card">
                <h2 className="skinport__card--heading">Skinport</h2>
                <div className="skinport__card--lower">
                <img className="skinport__card--lower--img" src={ak} alt="Ak-47" />
                    <div className="skinport__card--lower--details">
                        <p>{skin.market_hash_name}</p>
                        <p>{skin.min_price}</p>
                    </div>
                </div>
            </div>
            )}
        </article>
    );
};