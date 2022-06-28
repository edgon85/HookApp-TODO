
export const Quote = ({ quote, author }) => {
  return (
    <>
      <blockquote className="blockquote">
        <p>{quote}</p>
        <footer>{author}</footer>
      </blockquote>
    </>
  )
}
