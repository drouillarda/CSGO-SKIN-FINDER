import './SearchHistory.scss';

export const SearchHistory = () => {

    const lastSearchQuery = localStorage.getItem('lastSearchQuery');
    const lastSearchImage = localStorage.getItem('lastSearchImage');

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