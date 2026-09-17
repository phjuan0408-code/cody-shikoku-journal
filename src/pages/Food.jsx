import { useState } from "react";
import foodData from "../data/foodData";
import FoodCard from "../components/FoodCard";
import "keen-slider/keen-slider.min.css";
import "yet-another-react-lightbox/styles.css";

// 類別限定
const categories = ["全部", "拉麵", "烏龍麵", "冰品", "其他"];
const typeMap = {
  拉麵: "🍜",
  烏龍麵: "🍥",
  冰品: "🍦",
};

export default function Food() {
  const [selected, setSelected] = useState("全部");

  const filtered = foodData
    .map((f) => ({
      ...f,
      displayType: categories.includes(f.type) ? f.type : "其他",
    }))
    .filter((f) => selected === "全部" || f.displayType === selected);

  return <section className="page-shell">
    <header className="page-heading"><div><p className="eyebrow">02 / SHIKOKU · FOOD NOTES</p><h1>沿途美食</h1><p>從高松的烏龍麵，到德島拉麵與松山的甜點。</p></div><span className="page-count">{foodData.length} 則美食紀錄</span></header>
    <div className="filter-bar" aria-label="美食分類">{categories.map(cat=><button type="button" key={cat} className="filter-chip" aria-pressed={selected === cat} onClick={()=>setSelected(cat)}><span aria-hidden="true">{typeMap[cat] || "🍴"}</span>{cat}</button>)}</div>
    <p className="food-result-count" aria-live="polite">{selected} · {filtered.length} 則紀錄</p>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">{filtered.map(food=><FoodCard key={food.id} food={food}/>)}</div>
  </section>;
}
