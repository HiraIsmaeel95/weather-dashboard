import React from 'react';
import './searchBar.css'
import SearchIcon from './SearchIcon';

interface SearchBarProps {
    city: string;
    onChange: (city: string) => void;
    onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ city, onChange, onSearch }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
        };
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onSearch();
        }
        };

    const handleSearchClick = () => {
        onSearch();
    };
    
    return (
        <div className="search-bar">
        <input
            type="text"
            value={city}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Search"
            className="search-input"
        />
        <div className="search-icon-wrapper" onClick={handleSearchClick}>
            <SearchIcon />
        </div>
        </div>
    );
};
export default SearchBar;
