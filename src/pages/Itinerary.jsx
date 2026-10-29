import { Link } from "react-router-dom";
import { journalDays, journalPlaces } from "../data/journalDays";
import { ArrowUpRight } from "lucide-react";
const days = journalDays;
const summaries = [["初抵高松", "飛抵高松，在超市晚餐與夜空中開始旅程。"], ["小豆島", "走訪橄欖公園與醬油之鄉，搭船往返小豆島。"], ["丸龜城・金刀比羅宮", "從丸龜城的石垣，走到金刀比羅宮的石階。"], ["栗林公園・德島", "早晨逛庭園，午後到德島看阿波舞、搭眉山纜車。"], ["鳴門・渦之道", "走上鳴門大橋的步道，俯瞰海峽的潮流。"], ["梅津寺・松山", "移動到松山，在梅津寺看海、搭高島屋摩天輪。"], ["松山城・道後溫泉", "登松山城，走訪道後溫泉與大街道商店街。"], ["返回高松・返程", "從松山搭車回高松，前往機場結束八天旅程。"]];
const placeName = id => journalPlaces[id];
const placePath = id => `/${id}`;
export default function Itinerary() { return <section className="page-shell">
<header className="page-heading"><div><p className="eyebrow">02 / SHIKOKU · DAILY JOURNAL</p><h1>每日行程</h1><p>從高松到小豆島，經德島走到松山。八天七夜的四國旅記。</p></div><span className="page-count">2025.01.04 — 01.11<br/>{days.length} 天的旅行紀錄</span></header>
<div className="itinerary-list">{days.map((day,index)=><article key={day.day} className="itinerary-row">
<img className="itinerary-photo" src={day.image} alt={summaries[index][0]} loading="lazy"/>
<div className="day-number"><small>DAY</small>{String(index+1).padStart(2,"0")}</div>
<div className="itinerary-copy"><time>{day.date}</time><h2><Link className="day-title-link" to={day.path}>{summaries[index][0]}</Link></h2><p>{summaries[index][1]}</p><div className="route-chips">{day.placeIds.map(id=><Link key={id} to={placePath(id)}>{placeName(id)}</Link>)}</div></div><ArrowUpRight className="row-arrow" size={21}/>
</article>)}</div>
</section>; }
