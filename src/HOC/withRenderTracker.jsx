import { useRef, memo, forwardRef } from 'react'

const withRenderTracker = (WrappedComponent) => {
    const Tracker = (props, ref) => {
        const name = WrappedComponent.type.name
        const renderCount = useRef(0)
        renderCount.current += 1

        console.log(`Компонент ${name} рендерился ${renderCount.current} раз`)
        return <WrappedComponent ref={ref} {...props} />
    }

    return memo(forwardRef(Tracker))
}

export default withRenderTracker
