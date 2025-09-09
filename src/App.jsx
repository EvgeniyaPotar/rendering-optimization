import { useCallback, useMemo, useState } from 'react'
import withRenderTracker from './HOC/withRenderTracker.jsx'
import ItemList from './Components/ItemList.jsx'
import SearchInput from './Components/SearchInput.jsx'
import CounterButton from './Components/CounterButton.jsx'
import './App.css'

const WrapCounterButton = withRenderTracker(CounterButton)
const WrapSearchInput = withRenderTracker(SearchInput)
const WrapItemList = withRenderTracker(ItemList)

const generateList = () => {
    let elements = []
    for (let i = 0; i < 120; i++) {
        elements.push({ id: i, title: 'Element ' + i })
    }
    return elements
}

function App() {
    const [searchElement, setSearchElement] = useState('')
    const [count, setCount] = useState(1)
    const [listElements, setListElements] = useState(generateList)

    const changeInputSearch = useCallback((value) => {
        setSearchElement(value)
    }, [])

    const increment = useCallback(() => {
        setCount((count) => count + 1)
    }, [])

    const filteredList = useMemo(() => {
        return listElements.filter((item) =>
            item.title.toLowerCase().includes(searchElement.toLowerCase())
        )
    }, [listElements, searchElement])

    return (
        <>
            <div className="header">
                <WrapCounterButton count={count} onIncrement={increment} />
                <WrapSearchInput
                    value={searchElement}
                    onChangeInputSearch={changeInputSearch}
                />
            </div>
            <WrapItemList filteredList={filteredList} />
        </>
    )
}

export default App
