export default function PetCard({ pet, onSelect, isSelected }) {
  const petType = pet.type?.toLowerCase() || "cat";
  const petState = pet.state?.toLowerCase() || "neutral";
  const imagePath = `/pets/${petType}/${petState}.png`;

  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer w-40 p-4 rounded-xl shadow-md flex flex-col items-center 
        transition-all duration-300 hover:scale-105
        ${
          isSelected
            ? "ring-4 ring-blue-400 dark:ring-blue-600"
            : "ring-1 ring-gray-300 dark:ring-gray-700"
        }`}
    >
      <img
        src={imagePath}
        alt={pet.name}
        className="w-24 h-24 object-contain mb-2"
      />
      <h3 className="font-semibold text-center">{pet.name}</h3>
      <p className="text-sm opacity-70">{pet.type}</p>
    </div>
  );
}

