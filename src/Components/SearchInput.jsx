import { memo } from 'react'

const SearchInput = ({ onChangeInputSearch, value }) => {
    return (
        <input
            placeholder="search..."
            value={value}
            type="text"
            onChange={(e) => onChangeInputSearch(e.target.value)}
        />
    )
}

export default memo(SearchInput)
