import foodData from "../data/foodData";
import FoodCard from "./FoodCard";

const allowedTypes = ["拉麵", "烏龍麵", "冰品"];

export default function FoodForDay({ dates, title = "🍱 當天吃了這些" }) {
  const foods = foodData
    .filter((f) => dates.some((date) => f.days.includes(date)))
    .map((f) => ({
      ...f,
      displayType: allowedTypes.includes(f.type) ? f.type : "其他",
    }));

  if (foods.length === 0) return null;

  return (
    <section className="story-grid max-w-6xl mx-auto pt-1 px-4 py-12 font-serif text-[#504339]">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
}
