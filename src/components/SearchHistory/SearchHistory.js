import './SearchHistory.scss';
import ak from './../../assets/images/Ak-47.jpg';

export const SearchHistory = () => {

    const lastSearchQuery = localStorage.getItem('lastSearchQuery');
    const lastSearchImage = localStorage.getItem('lastSsearchImage');

    return (
        <section className="history">
            <section className="history__heading">
            <h4>Search History</h4>
            </section>
                <section section className="history__images">
                    {lastSearchQuery && (
                <article>
                    <img className='history__images--img' src={lastSearchImage || null} alt={lastSearchQuery} />
                </article>
                )}
            </section>
        </section>
    );
};