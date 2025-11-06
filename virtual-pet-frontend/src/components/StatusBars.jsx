export default function StatusBars({ pet }) {
  const Bar = ({ label, value, color }) => (
    <div className="my-2">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="w-64">
      <Bar label="Hunger" value={pet.hunger} color="bg-red-500" />
      <Bar label="Happiness" value={pet.happiness} color="bg-yellow-400" />
      <Bar label="Energy" value={pet.energy} color="bg-green-500" />
    </div>
  );
}
