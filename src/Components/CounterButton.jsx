import { memo } from 'react'

const CounterButton = ({ count, onIncrement }) => {
    return <button onClick={onIncrement}>Count {count}</button>
}

export default memo(CounterButton)
