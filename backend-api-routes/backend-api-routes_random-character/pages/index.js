import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  console.log("data:", data);
  console.log("error", error);

  if (error) return <div>Fehler beim laden.</div>;
  if (!data) return <div>lädt ...</div>;

  return (
    <div>
      <h1>Random Character</h1>
      <p>Vorname: {data.firstName}</p>
      <p>Nachname: {data.lastName}</p>
      <p>Beruf: {data.profession}</p>
      <p>Geohash: {data.geohash}</p>
    </div>
  );
}
