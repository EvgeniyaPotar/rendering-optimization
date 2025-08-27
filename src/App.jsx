import { useCallback, useEffect, useState } from 'react'
import ItemList from './Components/ItemList.jsx'
import SearchInput from './Components/SearchInput.jsx'
import CounterButton from './Components/CounterButton.jsx'
import './App.css'

function App() {
    const [listElements, setListElements] = useState([])
    const [searchElement, setSearchElement] = useState('')
    const [count, setCount] = useState(1)

    const generateList = () => {
        let elements = []
        for (let i = 0; i < 120; i++) {
            elements.push({ id: i, title: 'Element ' + i })
        }
        return elements
    }

    useEffect(() => {
        const items = generateList()
        setListElements(items)
    }, [])

    const changeInputSearch = useCallback((value) => {
        setSearchElement(value)
    }, [])

    const increment = useCallback(() => {
        setCount((count) => count + 1)
    }, [])

    return (
        <>
            <div className="header">
                <CounterButton count={count} onIncrement={increment} />
                <SearchInput
                    value={searchElement}
                    onChangeInputSearch={changeInputSearch}
                />
            </div>
            <ItemList list={listElements} searchElement={searchElement} />
        </>
    )
}

export default App
