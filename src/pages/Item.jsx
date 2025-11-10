import { useParams } from "react-router-dom";

export default function Item() {
  const { id } = useParams();
  const items = JSON.parse(localStorage.getItem("items") || "[]");
  const item = items.find(i => i.id === id);

  if (!item) return <p>Item not found.</p>;

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">{item.title}</h1>
      <p>Status: {item.status}</p>
    </div>
  );
}
