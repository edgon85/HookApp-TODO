import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote, author } = !!data && data[0];


  return (
    <>
      <h1>Custom Hooks</h1>
      <hr />

      {
        (isLoading)
          ? <LoadingQuote />
          : <Quote author={author} quote={quote} />
      }


      <button
        className="button is-primary"
        onClick={() => increment()}
        disabled={isLoading}
      >Next quote</button>

    </>
  )
}
