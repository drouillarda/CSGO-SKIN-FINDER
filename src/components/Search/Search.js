import './Search.scss';
import searchIcon from './../../assets/icons/search_FILL0_wght400_GRAD0_opsz24.svg'
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

export const Search = ({ defaultValue, onSearchChange }) => {
    const [query, setQuery] = useState("");
    useEffect(() => {
        defaultValue && setQuery(defaultValue);
    }, [defaultValue]);

    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearchChange(newQuery);
        debouncedSearchSubmit(newQuery);
      };

    const handleSubmit = () => {
        console.log("search requested")
        onSearchChange(query);
    }
    
    const debouncedSearchSubmit = debounce(handleSubmit, 300);
    
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
                    onChange={handleChange} 
                    onKeyUp={handleSubmit}
                />
            </div>
        </article>
    )
}