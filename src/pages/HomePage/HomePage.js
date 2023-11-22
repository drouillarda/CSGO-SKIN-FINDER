import './HomePage.scss'
import { Search } from '../../components/Search/Search';
import { Steam } from '../../components/Steam/Steam';
import { Dmarket } from '../../components/Dmarket/Dmarket';
import { Bitskins } from '../../components/Bitskins/Bitskins';

export const HomePage = () => {
    return (
        <section className="home">
            <h5>Search for a skin below:</h5>
            <Search />
            <Steam />
            <Dmarket />
            <Bitskins />
        </section>
    );
};