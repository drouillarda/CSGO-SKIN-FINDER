import "./Dmarket.scss";
import ak from './../../assets/images/Ak-47.jpg';

export const Dmarket = () => {
    return (
        <article className="dmarket">
            <div className="dmarket__card">
                <h2 className="dmarket__card--heading">Dmarket</h2>
                <div className="dmarket__card--lower">
                    <img className="dmarket__card--lower--img" src={ak} alt="Ak-47" />
                    <div className="dmarket__card--lower--details">
                        <p>skin.name</p>
                        <p>price_min</p>
                    </div>
                </div>
            </div>
        </article>
    );
};