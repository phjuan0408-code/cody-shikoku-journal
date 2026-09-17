import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { journalDays, journalPlaces } from "../data/journalDays";
const days = journalDays;
const placeName = id => journalPlaces[id];
const placePath = id => `/${id}`;
export default function Itinerary() { return <section className="page-shell">
 <header className="page-heading"><div><p className="eyebrow">02 / SHIKOKU · DAILY JOURNAL</p><h1>每日行程</h1><p>從高松到小豆島，經德島走到松山。八天七夜的四國旅記。</p></div><span className="page-count">2025.01.04 — 01.11<br/>{days.length} 天的旅行紀錄</span></header>
 <div className="itinerary-list">{days.map(day=><article key={day.day} className="itinerary-row">
  <img className="itinerary-photo" src={day.image} alt={day.title} loading="lazy"/>
  <div className="day-number"><small>DAY</small>{day.day.replace("Day ","").padStart(2,"0")}</div>
  <div className="itinerary-copy"><time>{day.date}</time><h2><Link className="day-title-link" to={day.path}>{day.title}</Link></h2><p>{day.note}</p><div className="route-chips">{day.placeIds.map(id=><Link key={id} to={placePath(id)}>{placeName(id)}</Link>)}</div></div><ArrowUpRight className="row-arrow" size={21}/>
 </article>)}</div></section>; }
