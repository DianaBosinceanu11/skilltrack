import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    setData(items);
  }, []);

  return (
    <ul className="space-y-2">
      {data.map(it => (
        <li key={it.id}>
          <Link
            to={`/item/${it.id}`}
            className="block p-3 rounded bg-gray-100 hover:bg-gray-200"
          >
            {it.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
