import './HomePage.scss'
import { Search } from '../../components/Search/Search';
import { Steam } from '../../components/Steam/Steam';
import { Dmarket } from '../../components/Dmarket/Dmarket';
import { Bitskins } from '../../components/Bitskins/Bitskins';
import { SearchHistory } from '../../components/SearchHistory/SearchHistory';

export const HomePage = () => {
    return (
        <section className="home">
            <section className="home__left">
                <h5>Search for a skin below:</h5>
                <Search />
                <Steam />
            </section>
            <section className="home__right">
                <Dmarket />
                <Bitskins />
                <Dmarket />
                <Bitskins />
            </section>
            <section>
                <SearchHistory />
            </section>
        </section>
    );
};