import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, default: "cat" },
  hunger: { type: Number, default: 50 },
  happiness: { type: Number, default: 50 },
  energy: { type: Number, default: 50 },
  state: { type: String, default: "neutral" },
  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model("Pet", petSchema);
