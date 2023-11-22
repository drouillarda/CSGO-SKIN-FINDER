import "./Dmarket.scss";
import { Card } from "../Card/Card";

export const Dmarket = () => {
    return (
        <article className="market">
            <h2 className="market__heading">DMarket</h2>
            <Card />
            <div className="market__details">
                <p>Ak-47, Minwear</p>
                <p>Float</p>
                <p>Price</p> 
            </div>
        </article>
    );
};