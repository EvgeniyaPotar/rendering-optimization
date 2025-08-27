import { memo, useMemo } from 'react'

const ItemList = ({ list, searchElement }) => {
    const filteredList = useMemo(() => {
        return list.filter((item) =>
            item.title.toLowerCase().includes(searchElement.toLowerCase())
        )
    }, [list, searchElement])

    return (
        <ol>
            {filteredList.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ol>
    )
}
export default memo(ItemList)
