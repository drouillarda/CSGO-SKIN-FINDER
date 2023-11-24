import "./Bitskins.scss";
import { Card } from "../Card/Card";

export const Bitskins = () => {
    return (
        <article className="market">
            <div className="market__card">
                <h2 className="market__card--heading">Bitskins</h2>
                <div className="market__card--lower">
                    <Card />
                    <div className="market__card--lower--details">
                        <p>Ak-47, Minwear</p>
                        <p>Float</p>
                        <p>Price</p> 
                    </div>
                </div>
            </div>
        </article>
    );
};