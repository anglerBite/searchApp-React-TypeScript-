import type { Dispatch, SetStateAction } from 'react';

const SearchBar = ({ text, setText }: { text: string; setText: Dispatch<SetStateAction<string>> }) => {
    return (
        <>
            <label htmlFor="search">Search</label>
            <input
                id="search"
                type="text"
                placeholder="Search..."
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
        </>
    );
};

export default SearchBar;