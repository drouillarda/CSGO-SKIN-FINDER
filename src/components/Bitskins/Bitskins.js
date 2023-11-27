import "./Bitskins.scss";
import notAvailable from './../../assets/images/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Bitskins = ({ searchQuery }) => {
    const [skin, setSkin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSkins = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Bitskins/${searchQuery}`)
                const info = response.data;
                console.log(info);
                setSkin(info);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getSkins();
    }, [searchQuery]);

    return (
        <article className="bitskins">
            {loading && <p>Loading...</p>}
            {skin && (
            <div className="bitskins__card">
                <h2 className="bitskins__card--heading">Bitskins</h2>
                <div className="bitskins__card--lower">
                <img className="bitskins__card--lower--img" src={notAvailable} alt="Not Available" />
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