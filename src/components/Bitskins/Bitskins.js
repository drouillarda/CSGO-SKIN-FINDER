import "./Bitskins.scss";
import ak from './../../assets/images/Ak-47.jpg';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Bitskins = ({ searchQuery }) => {
    const [skin, setSkin] = useState(null);

    useEffect(() => {
        const getSkins = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Bitskins/${searchQuery}`)
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
        <article className="bitskins">
            {skin && (
            <div className="bitskins__card">
                <h2 className="bitskins__card--heading">Bitskins</h2>
                <div className="bitskins__card--lower">
                <img className="bitskins__card--lower--img" src={ak} alt="Ak-47" />
                    <div className="bitskins__card--lower--details">
                        <p>{skin.name}</p>
                        <p>{skin.price_min}</p>
                    </div>
                </div>
            </div>
            )}
        </article>
    );
};