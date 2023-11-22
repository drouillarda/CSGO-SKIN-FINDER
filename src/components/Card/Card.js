import "./Card.scss";
import ak from './../../assets/images/Ak-47.jpg';

export const Card = () => {
    return (
        <article className="card">
            <img className="card__img" src={ak} alt="Ak-47" />
        </article>
    );
};