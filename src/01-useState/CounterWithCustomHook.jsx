import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {


  const { counter, increment, decrement, reset } = useCounter(10);

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />
      <button className="button is-primary" onClick={() => increment()} >+1</button>
      <button className="button  is-danger" onClick={reset} >Reset</button>
      <button className="button is-primary" onClick={() => decrement(2)} >-1</button>
    </>
  )
}
