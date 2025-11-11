import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    const found = items.find(i => i.id === id);
    setItem(found || null);
  }, [id]);

  if (!item) return <p>Item not found.</p>;

  function markDone() {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    const updated = items.map(i =>
      i.id === item.id ? { ...i, status: "done" } : i
    );
    localStorage.setItem("items", JSON.stringify(updated));
    setItem(prev => ({ ...prev, status: "done" }));
  }

  return (
    <div className="space-y-2 ">
      <h1 className="text-2xl font-semibold">{item.title}</h1>
      <p>Status: {item.status}</p>
      <div className="space-x-5">
        {item.status !== "done" && (
          <button
          onClick={markDone}
          className="px-3 py-2 rounded bg-blue-500 text-white "
          >
            Mark as Done ✅
          </button>
        )}

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded bg-gray-200"
          >
            Back
          </button>
      </div>
    </div>
  );
}
