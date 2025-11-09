const skills = [
    { id: 1, name: "JavaScript"},
    { id: 2, name: "React" },
    { id: 3, name: "Next.js" },
]

export default function List() {
  return (
    <div className="space-y-2">
        <h1 className="text-2xl font-semibold mb-4">My Skills</h1>
        {skills.map(skill => (
            <div
                key={skill.id}
                className="p-2 boarder rounded bg-gray-50"
            >
                {skill.name}
            </div>
        ))}
    </div>
  );
}

