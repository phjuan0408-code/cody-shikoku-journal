import { Link } from "react-router-dom";
import { journalDays } from "../data/journalDays";
import "./Itinerary.css";
const days = journalDays;
const summaries = [["初抵高松", "飛抵高松，在超市晚餐與夜空中開始旅程。"], ["小豆島", "走訪橄欖公園與醬油之鄉，搭船往返小豆島。"], ["丸龜城・金刀比羅宮", "從丸龜城的石垣，走到金刀比羅宮的石階。"], ["栗林公園・德島", "早晨逛庭園，午後到德島看阿波舞、搭眉山纜車。"], ["鳴門・渦之道", "走上鳴門大橋的步道，俯瞰海峽的潮流。"], ["梅津寺・松山", "移動到松山，在梅津寺看海、搭高島屋摩天輪。"], ["松山城・道後溫泉", "登松山城，走訪道後溫泉與大街道商店街。"], ["返回高松・返程", "從松山搭車回高松，前往機場結束八天旅程。"]];
export default function Itinerary() { return <section className="page-shell">
<header className="page-heading"><div><p className="eyebrow">02 / SHIKOKU · DAILY JOURNAL</p><h1>每日行程</h1><p>從高松到小豆島，經德島走到松山。八天七夜的四國旅記。</p></div><span className="page-count">2025.01.04 — 01.11<br/>{days.length} 天的旅行紀錄</span></header>
<table className="itinerary-table"><caption className="sr-only">每日行程：點選標題閱讀當天旅記</caption><thead><tr><th scope="col">DAY</th><th scope="col">行程</th><th scope="col">旅程摘要</th></tr></thead><tbody>{days.map((day,index)=><tr key={day.day}><td className="itinerary-day">{String(index+1).padStart(2,"0")}</td><td><Link to={day.path} aria-label={`Day ${index+1}：${summaries[index][0]}`}>{summaries[index][0]}</Link></td><td className="itinerary-summary">{summaries[index][1]}</td></tr>)}</tbody></table>
</section>; }
