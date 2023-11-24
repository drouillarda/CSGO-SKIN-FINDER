import './Search.scss';
import searchIcon from './../../assets/icons/search_FILL0_wght400_GRAD0_opsz24.svg'
import { useEffect, useState } from 'react';

export const Search = ({ defaultValue }) => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        defaultValue && setQuery(defaultValue);
    }, []);
    return (
        <article className="search">
            <div className="search__container">
                <img className="search__icon" src={searchIcon} alt="search icon" />
                <input
                    className="search"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for a skin"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </div>
        </article>
    )
}