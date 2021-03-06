import React, { Component } from 'react'
import withCounter from './withCounter'

function ClickCounter({ value, counter, increaseCounter }) {

    return (
        <div>
            <span>Value:&nbsp;{value}</span>
            <br />
            <span>Counter:&nbsp;{counter}</span>
            <br />
            <button onClick={increaseCounter}>Increase Counter By Clicking</button>
        </div>
    )
}

// const ClickWithCounter = withCounter(ClickCounter);
// export default ClickWithCounter;
export default withCounter(ClickCounter);
/*
const X = React.forwardRef((props, ref) => {
    return (
        <div>
            <span ref={ref}>Value:&nbsp;{value}</span>
            <br />
            <span>Counter:&nbsp;{counter}</span>
            <br />
            <button onClick={increaseCounter}>Increase Counter By Clicking</button>
        </div>
    )
})

export default withCounter(X);
*/


