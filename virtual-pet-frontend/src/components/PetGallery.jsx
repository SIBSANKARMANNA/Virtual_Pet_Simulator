import PetCard from "./PetCard";

export default function PetGallery({ pets, onSelect, selectedPetId }) {
  if (!pets?.length)
    return <p className="text-center mt-6">No pets available. Create one!</p>;

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {pets.map((pet) => (
        <PetCard
          key={pet._id}
          pet={pet}
          onSelect={() => onSelect(pet)}
          isSelected={selectedPetId === pet._id}
        />
      ))}
    </div>
  );
}
