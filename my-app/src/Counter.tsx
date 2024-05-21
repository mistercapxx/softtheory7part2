import React, { useState } from 'react'

function Counter() {

    // const [count, setCount] = useState<number | null >(null);

    const [count, setCount] = useState(0);
const [incrementBy, setIncrementBy] = useState(1);


    // const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    //     setCount(count + 1);
    //     event.currentTarget.innerText = "incremented";
        
    // }
    const onClickHandler = (
event: React.MouseEvent<HTMLButtonElement,MouseEvent> //// 2 variant
    ) => {
        setCount(count + incrementBy);
        event.currentTarget.innerText = "incremented";
        
    }
    const onInputHandler: React.FormEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = Number(event.currentTarget.value);
        setIncrementBy(value);
    }
  return (
    <>
    <div>Count: {count}</div>
    <input value={incrementBy} onInput={onInputHandler} type="number" />
    <button onClick={onClickHandler}>Increment</button>
    </>
  );
}

export default Counter;