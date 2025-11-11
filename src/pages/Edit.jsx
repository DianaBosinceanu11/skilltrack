// src/pages/Edit.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Edit(){
  const { id } = useParams()
  const nav = useNavigate()
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('todo')

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items') || '[]')
    const it = items.find(i => i.id === id)
    if (it) { setTitle(it.title); setStatus(it.status) }
  }, [id])

  function save(){
    const items = JSON.parse(localStorage.getItem('items') || '[]')
    const updated = items.map(i => i.id === id ? { ...i, title, status } : i)
    localStorage.setItem('items', JSON.stringify(updated))
    nav(`/item/${id}`)
  }

  return (
    <div className="space-y-3">
      <input className="border p-2 rounded w-full" value={title} onChange={e=>setTitle(e.target.value)} />
      <select className="border p-2 rounded" value={status} onChange={e=>setStatus(e.target.value)}>
        <option value="todo">todo</option>
        <option value="in_progress">in_progress</option>
        <option value="done">done</option>
      </select>
      <button onClick={save} className="px-3 py-2 rounded bg-black text-white">Save</button>
    </div>
  )
}
