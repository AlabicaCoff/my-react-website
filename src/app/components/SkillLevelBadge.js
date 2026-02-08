export default function SkillLevelBadge({ level }) {
  switch (level) {
    case "Beginner":
      return (
        <div className="rounded-xl bg-green-600 px-3 py-1 text-sm font-medium text-white text-center text-bold">
          {level}
        </div>
      );
    case "Intermediate":
      return (
        <div className="rounded-xl bg-yellow-500 px-3 py-1 text-sm font-medium text-white text-center text-extrabold">
          {level}
        </div>
      );
    case "Advanced":
      return (
        <div className="rounded-xl bg-red-600 px-3 py-1 text-sm font-medium text-white text-center text-bold">
          {level}
        </div>
      );
  }
}
