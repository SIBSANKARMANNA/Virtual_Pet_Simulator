import { useEffect, useState } from "react";
import {
  getPets,
  createPet,
  feedPet,
  playPet,
  sleepPet,
} from "../api/petAPI";
import PetGallery from "../components/PetGallery";
import PetDisplay from "../components/PetDisplay";
import StatusBars from "../components/StatusBars";
import ActionButtons from "../components/ActionButtons";

export default function Home() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showGallery, setShowGallery] = useState(true); // 👈 toggle between gallery and single pet view

  // Fetch all pets
  const fetchPets = async () => {
    const res = await getPets();
    setPets(res.data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  // Create new pet
  const handleCreatePet = async () => {
    const name = prompt("Enter your pet's name:");
    const type = prompt("Enter pet type (cat, dog, dragon):") || "cat";
    if (name) {
      const res = await createPet({ name, type });
      await fetchPets();
      setSelectedPet(res.data);
      setShowGallery(false); // immediately show new pet
    }
  };

  // Handle pet action (feed, play, sleep)
  const handleAction = async (action) => {
    if (!selectedPet) return;
    setLoading(true);
    let res;
    if (action === "feed") res = await feedPet(selectedPet._id);
    if (action === "play") res = await playPet(selectedPet._id);
    if (action === "sleep") res = await sleepPet(selectedPet._id);
    setSelectedPet(res.data);
    await fetchPets(); // refresh gallery data
    setLoading(false);
  };

  // Handle pet selection
  const handleSelectPet = (pet) => {
    setSelectedPet(pet);
    setShowGallery(false);
  };

  // Handle back to gallery view
  const handleBackToGallery = () => {
    setShowGallery(true);
    setSelectedPet(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 w-full">
      {showGallery ? (
        <>
          {/* ===== PET GALLERY VIEW ===== */}
          <div className="flex justify-between items-center w-full max-w-4xl">
            <h2 className="text-2xl font-semibold">Your Pets</h2>
            <button
              onClick={handleCreatePet}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-400"
            >
              ➕ Create Pet
            </button>
          </div>

          <PetGallery
            pets={pets}
            onSelect={handleSelectPet}
            selectedPetId={selectedPet?._id}
          />
        </>
      ) : (
        <>
          {/* ===== SINGLE PET VIEW ===== */}
          <div className="flex justify-between items-center w-full max-w-4xl mb-4">
            <button
              onClick={handleBackToGallery}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              ← Back to All Pets
            </button>
            <h2 className="text-2xl font-semibold">{selectedPet?.name}</h2>
          </div>

          {selectedPet && (
            <div className="mt-2 flex flex-col items-center gap-4">
              <PetDisplay pet={selectedPet} />
              <StatusBars pet={selectedPet} />
              <ActionButtons petId={selectedPet._id} onAction={handleAction} />
              {loading && (
                <p className="mt-4 text-sm opacity-80">Updating...</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
