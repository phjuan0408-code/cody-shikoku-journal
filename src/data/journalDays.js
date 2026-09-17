import itineraryData from "./itineraryData";
const days = [
 ["桃園機場・高松機場", "2025-01-04", ["takamatsu"]],
 ["小豆島", "2025-01-05", ["takamatsu"]],
 ["丸龜城・金刀比羅宮", "2025-01-06", ["takamatsu"]],
 ["栗林公園・阿波舞會館", "2025-01-07", ["takamatsu", "tokushima"]],
 ["鳴門大橋・渦之道", "2025-01-08", ["tokushima"]],
 ["梅津寺・高島屋摩天輪", "2025-01-09", ["tokushima", "matsuyama"]],
 ["松山城・道後溫泉", "2025-01-10", ["matsuyama"]],
 ["高松機場", "2025-01-11", ["matsuyama", "takamatsu"]],
];
export const journalPlaces = {takamatsu:"高松",tokushima:"德島",matsuyama:"松山"};
export const journalDays = days.map(([title,date,placeIds],index) => {
 const stories = itineraryData.filter(item=>item.days?.some(day=>day.startsWith(date)));
 const media = stories.flatMap(item=>item.images || []).find(image=> typeof image === "string" ? /\.(webp|jpg|png)$/.test(image) : image.type !== "video");
 return {day:`Day ${index}`,title,date,placeIds,path:`/day${index}`,image:typeof media === "string" ? media : media?.src,note:stories.slice(0,3).map(item=>item.title).join(" · ")};
});
