import { useEffect, useState } from "react";

export default function List(){
    const [data, setData] = useState([])

    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('items') || '[]')
        setData(items)
    }, [])

  return (
    <>
        <h1 className="text-2xl font-semibold mb-4">My Skills</h1>
        <ul className="space-y-2">
            {data.map(it=>(
                <li key={it.id} className="p-3 rounded bg-gray-100">
                    <div className="font-medium">{it.title}</div>
                    <div className="text-sm text-gray-600">{it.status}</div>
                </li>
            ))}
            {data.length === 0 && <p className="text-sm text-gray-500"> No items yet.</p>}
        </ul>
    </>
  );
}

