import "./Skinbaron.scss";
import notAvailable from './../../assets/images/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Skinbaron = ({ searchQuery }) => {
    const [skin, setSkin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSkins = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Skinbaron/${searchQuery}`)
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

    const euroAmount = skin && skin.lowestPrice ? skin.lowestPrice : 0;
    const cadAmount = convertToCAD(euroAmount);

    return (
        <article className="skinbaron">
            {loading && <p>Loading...</p>}
            {skin && (
            <div className="skinbaron__card">
                <h2 className="skinbaron__card--heading">Skinbaron</h2>
                <div className="skinbaron__card--lower">
                <img className="skinbaron__card--lower--img" src={notAvailable} alt="Not Available" />
                    <div className="skinbaron__card--lower--details">
                        <p>{skin.name}</p>
                        <p>Lowest Price: ${(cadAmount)?.toFixed(2)}</p>
                        <p>Quantity: {skin.quantity}</p>
                    </div>
                </div>
            </div>
            )}
        </article>
    );
};