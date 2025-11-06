import { motion } from "framer-motion";

export default function PetDisplay({ pet }) {
  if (!pet) return <p className="text-center">No pet found. Create one!</p>;

  const petType = pet.type?.toLowerCase() || "cat";
  const petState = pet.state?.toLowerCase() || "neutral";

  // Dynamically resolve image path
  const imagePath = `/pets/${petType}/${petState}.png`;

  // Define animations based on pet state
  const stateAnimations = {
    happy: {
      // bounce gently up and down
      animate: {
        y: [0, -10, 0],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
    excited: {
      // bounce faster
      animate: {
        y: [0, -20, 0],
        transition: {
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
    sleeping: {
      // slow breathing scale effect
      animate: {
        scale: [1, 1.05, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
    neutral: {
      // slow gentle sway left and right
      animate: {
        rotate: [-2, 2, -2],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
    sad: {
      // subtle downward motion
      animate: {
        y: [0, 5, 0],
        opacity: [1, 0.9, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
  };

  // fallback to neutral if no matching animation found
  const animation = stateAnimations[petState] || stateAnimations.neutral;

  return (
    <div className="flex flex-col items-center">
      <motion.img
        src={imagePath}
        alt={`${pet.name} the ${pet.type}`}
        className="w-48 h-48 object-contain mb-4"
        animate={animation.animate}
      />

      <h2 className="text-xl font-semibold">{pet.name}</h2>
      <p className="text-sm opacity-75 capitalize">Status: {pet.state}</p>
    </div>
  );
}
