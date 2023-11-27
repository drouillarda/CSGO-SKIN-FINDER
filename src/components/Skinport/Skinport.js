import "./Skinport.scss";
import notAvailable from './../../assets/images/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Skinport = ({ searchQuery }) => {
    const [skin, setSkin] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSkins = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Skinport/${searchQuery}`)
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

    const exchangeRateEuroToCAD = 1.5;

    function convertToCAD(euroAmount) {
        return euroAmount * exchangeRateEuroToCAD;
    }

    const euroAmount = skin && skin.min_price ? skin.min_price : 0;
    const cadAmount = convertToCAD(euroAmount);

    return (
        <article className="skinport">
            {loading && <p>Loading...</p>}
            {skin && (
                <div className="skinport__card">
                    <h2 className="skinport__card--heading">Skinport</h2>
                    <div className="skinport__card--lower">
                    <img className="skinport__card--lower--img" src={notAvailable} alt="Not Available" />
                        <div className="skinport__card--lower--details">
                            <p>{skin.market_hash_name}</p>
                            <p>Lowest Price: ${cadAmount}</p>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
};