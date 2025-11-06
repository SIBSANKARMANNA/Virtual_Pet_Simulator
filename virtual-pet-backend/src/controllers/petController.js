import Pet from "../models/Pet.js";

// Create new pet
export const createPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all pets
export const getPets = async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
};

// Get single pet
export const getPet = async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  pet ? res.json(pet) : res.status(404).json({ message: "Pet not found" });
};

// Feed pet
export const feedPet = async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (!pet) return res.status(404).json({ message: "Pet not found" });

  pet.hunger = Math.max(0, pet.hunger - 20);
  pet.happiness = Math.min(100, pet.happiness + 10);
  pet.state = "happy";
  await pet.save();
  res.json(pet);
};

// Play with pet
export const playPet = async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (!pet) return res.status(404).json({ message: "Pet not found" });

  pet.happiness = Math.min(100, pet.happiness + 15);
  pet.energy = Math.max(0, pet.energy - 10);
  pet.state = "excited";
  await pet.save();
  res.json(pet);
};

// Put pet to sleep
export const sleepPet = async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (!pet) return res.status(404).json({ message: "Pet not found" });

  pet.energy = Math.min(100, pet.energy + 20);
  pet.hunger = Math.min(100, pet.hunger + 10);
  pet.state = "sleeping";
  await pet.save();
  res.json(pet);
};

// Delete pet
export const deletePet = async (req, res) => {
  await Pet.findByIdAndDelete(req.params.id);
  res.json({ message: "Pet deleted" });
};
