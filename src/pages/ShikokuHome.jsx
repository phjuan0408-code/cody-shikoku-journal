import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Banner from "../components/Banner";
import ShikokuMap from "../components/ShikokuMap";
export default function ShikokuHome() { return <>
 <Banner title="四國・瀨戶內海" englishTitle="02 / SHIKOKU & SETOUCHI" meta="2025.01.04 — 01.11 · 8 DAYS" subtitle="沒有驚喜萬分，卻讓人難以忘懷。" imageUrl="./images/home-banner.webp" mapTarget="shikoku-map"/>
 <section className="region-summary"><div><p className="eyebrow">THE JOURNEY</p><h2>搭電車、坐渡輪，<br/>慢慢走過四國。</h2></div><div><p>從高松出發，搭船到小豆島，走過丸龜城與金刀比羅宮，再往德島、松山。把八天七夜的海邊、城下町、烏龍麵與溫泉街，留在這趟旅行裡。</p><div className="summary-links"><Link className="text-link" to="/itinerary">八天的旅行 <ArrowRight size={16}/></Link><Link className="text-link" to="/food">沿途吃了什麼 <ArrowRight size={16}/></Link></div></div></section>
 <section id="shikoku-map" className="region-map-section"><div className="section-heading"><div><p className="eyebrow">EXPLORE SHIKOKU</p><h2>從海邊，走進城市</h2></div><p>高松・德島・松山，三座城市的旅行紀錄。</p></div><div className="map-surface"><ShikokuMap/></div><nav className="place-index" aria-label="四國城市"><Link to="/takamatsu">高松與小豆島 ↗</Link><Link to="/tokushima">德島與鳴門 ↗</Link><Link to="/matsuyama">松山與道後 ↗</Link></nav></section>
 </>; }
