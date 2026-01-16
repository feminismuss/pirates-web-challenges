import "./styles.css";

export default function App() {
  return <article>Replace me with an article</article>;
}

function Article() {
  return (
  <article className="article">
    <h2>Attributes in React</h2>
    <label htmlFor="questionInput">Ask your Question here:</label>
    <input id="questionInput"type="text" />
    <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        Learn more about React
      </a>
  </article>)
}