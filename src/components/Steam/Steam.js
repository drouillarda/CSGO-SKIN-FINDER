import "./Steam.scss";
import { Card } from "../Card/Card";

export const Steam = () => {
    return (
        <article className="steam">
            <h2 className="steam__heading">Steam Marketplace</h2>
            <div className="steam__lower">
                <Card />
                <div className="steam__lower--details">
                    <p>Ak-47, Minwear</p>
                    <p>Float</p>
                    <p>Price</p> 
                </div>
            </div>
        </article>
    );
};