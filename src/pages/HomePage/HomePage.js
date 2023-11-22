import './HomePage.scss'
import { Search } from '../../components/Search/Search';
import { Card } from './../../components/Card/Card'

export const HomePage = () => {
    return (
        <section>
            <h5>Search for a skin below:</h5>
            <Search />
        </section>
    );
};