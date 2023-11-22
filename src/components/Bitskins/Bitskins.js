import "./Bitskins.scss";
import { Card } from "../Card/Card";

export const Bitskins = () => {
    return (
        <article className="market">
            <h2 className="market__heading">Bitskins</h2>
            <Card />
            <div className="market__details">
                <p>Ak-47, Minwear</p>
                <p>Float</p>
                <p>Price</p> 
            </div>
        </article>
    );
};