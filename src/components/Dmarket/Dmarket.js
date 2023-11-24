import "./Dmarket.scss";
import ak from './../../assets/images/Ak-47.jpg';

export const Dmarket = () => {
    return (
        <article className="market">
            <div className="market__card">
                <h2 className="market__card--heading">Dmarket</h2>
                <div className="market__card--lower">
                    <img className="steam__card--lower--img" src={ak} alt="Ak-47" />
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