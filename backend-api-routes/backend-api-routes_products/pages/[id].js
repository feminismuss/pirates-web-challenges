import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Fehler beim laden</div>;
  if (!data) return <div>Lädt ....</div>;

  return (
    <div>
      <h1>Alle Produkte</h1>
      <h2>{data.name}</h2>
      <p>Preis: {data.price}</p>
      <p>{data.description}</p>
    </div>
  );
}
