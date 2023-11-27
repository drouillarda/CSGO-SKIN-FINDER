import "./Dmarket.scss";
import ak from './../../assets/images/Ak-47.jpg';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Dmarket = ({ searchQuery }) => {
    const [skin, setSkin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSkins = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Steam/${searchQuery}`);
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

    const lowestPrice = skin?.histogram?.sell_order_array ? Math.min(...skin.histogram.sell_order_array.map(order => order.price)) : null;
    const medianPrices = skin?.median_avg_prices_15days || [];
    const calculateMedianPriceLastWeek = (prices) => {
        const lastWeekPrices = prices.slice(-7);
        if (lastWeekPrices.length < 2 ) {
            return null;
        }
        const sortedPrices = lastWeekPrices.map(item => item[1]).sort((a, b) => a - b);
      
        const length = sortedPrices.length;
        const middle = Math.floor(length / 2);
      
        if (length % 2 === 0) {
          return (sortedPrices[middle - 1] + sortedPrices[middle]) / 2;
        } else {
          return sortedPrices[middle];
        }
      };
      
      const lastWeekMedianPrice = calculateMedianPriceLastWeek(medianPrices);
      if (lastWeekMedianPrice !== null) {
        const medianPriceRounded = lastWeekMedianPrice.toFixed(2);
        console.log('Median Price Last Week:', medianPriceRounded);
      } 
      console.log('Median Price Last Week:', lastWeekMedianPrice);

      const quantity = skin?.histogram?.sell_order_array ? Math.min(...skin.histogram.sell_order_array.map(order => order.quantity)) : null;
    
    return (
        <article className="dmarket">
           {loading && <p>Loading...</p>}
            {skin && (
            <div className="dmarket__card">
                <h2 className="dmarket__card--heading">Dmarket</h2>
                <div className="dmarket__card--lower">
                    <img className="dmarket__card--lower--img" src={skin.image} alt="Ak-47" />
                    <div className="dmarket__card--lower--details">
                        <p>Skin:{skin.market_hash_name}</p>
                        <p>Price: ${lowestPrice}</p>
                        <p>Quantity: {quantity}</p> 
                    </div>
                </div>
            </div>
            )}
        </article>
    );
};