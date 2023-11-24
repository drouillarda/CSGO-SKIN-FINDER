import "./Steam.scss";
import { Card } from "../Card/Card";

export const Steam = () => {
    return (
        <article className="steam">
            <div className="steam__card">
                <h2 className="steam__card--heading">Steam Marketplace</h2>
                <div className="steam__card--lower">
                    <Card />
                    <div className="steam__card--lower--details">
                        <p>Ak-47, Minwear</p>
                        <p>Float</p>
                        <p>Price</p> 
                    </div>
                </div>
            </div>
        </article>
    );
};