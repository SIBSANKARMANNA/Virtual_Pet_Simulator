export default function ActionButtons({ petId, onAction }) {
  console.log("Rendering ActionButtons for petId:", petId);
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={() => onAction("feed")}
        className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-600"
      >
        🍎 Feed
      </button>
      <button
        onClick={() => onAction("play")}
        className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600"
      >
        🎾 Play
      </button>
      <button
        onClick={() => onAction("sleep")}
        className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-600"
      >
        😴 Sleep
      </button>
    </div>
  );
}
