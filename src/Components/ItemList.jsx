import { memo } from 'react'

const ItemList = ({ filteredList }) => {
    return (
        <ol>
            {filteredList.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ol>
    )
}
export default memo(ItemList)
