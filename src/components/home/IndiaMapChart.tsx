"use client";

import indiaMap from "@svg-maps/india";

const HIGHLIGHT = new Set(["gj", "rj", "mh", "mp"]);
const LABELS: Record<string, string> = {
  gj: "Gujarat",
  rj: "Rajasthan",
  mh: "Maharashtra",
  mp: "Madhya Pradesh",
};

export default function IndiaMapChart() {
  return (
    <div className="relative w-full">
      <svg
        viewBox={indiaMap.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="States in India served by Teckon"
        className="w-full h-auto"
      >
        {indiaMap.locations.map((loc: { id: string; name: string; path: string }) => {
          const isOn = HIGHLIGHT.has(loc.id);
          return (
            <path
              key={loc.id}
              d={loc.path}
              fill={isOn ? "var(--color-jcb, #FFBE00)" : "rgba(255,255,255,0.08)"}
              stroke={isOn ? "#FF6B35" : "rgba(255,255,255,0.35)"}
              strokeWidth={isOn ? 1.5 : 0.6}
              className={isOn ? "drop-shadow-[0_0_10px_rgba(255,190,0,0.45)]" : ""}
            >
              <title>{loc.name}</title>
            </path>
          );
        })}
      </svg>
      <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-white">
        {Object.entries(LABELS).map(([id, name]) => (
          <li key={id} className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-2">
            <span className="size-2.5 rounded-full bg-jcb shadow-[0_0_8px_rgba(255,190,0,0.7)]" />
            <span className="font-semibold">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
