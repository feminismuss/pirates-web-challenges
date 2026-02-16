import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/products", fetcher);
  if (error) return <div>Fehler beim laden</div>;
  if (!data) return <div>Lädt ....</div>;
  return (
    <div>
      <h1>Alle Produkte</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Preis: {product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
