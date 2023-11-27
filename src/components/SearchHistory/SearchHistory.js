import './SearchHistory.scss';
import ak from './../../assets/images/Ak-47.jpg';

export const SearchHistory = () => {
    return (
        <section className="history">
            <section className="history__heading">
            <h4>Search History</h4>
            </section>
                <section section className="history__images">
                <article>
                    <img className='history__images--img' src={ak} alt='ak' />
                </article>
                <article>
                    <img className='history__images--img' src={ak} alt='ak' />
                </article>
                <article>
                    <img className='history__images--img' src={ak} alt='ak' />
                </article>
            </section>
        </section>
    );
};