import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1337, name: "🍌 banana", color: "yellow" },
    { id: 1338, name: "🍎 apple", color: "red" },
    { id: 1339, name: "🍐 pear", color: "lightgreen" },
    { id: 1340, name: "🍇 grape", color: "purple" },
    { id: 1341, name: "plum", color: "violet" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
