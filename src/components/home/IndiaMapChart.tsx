"use client";

import { useState } from "react";
import indiaMap from "@svg-maps/india";
import { motion, AnimatePresence } from "framer-motion";

/* ── State data ─────────────────────────────────────────────────────── */
const HIGHLIGHT = new Set(["gj", "rj", "mh", "mp"]);

interface StateInfo {
  name: string;
  city: string;
  role: string;
  icon: string;
  color: string;
}

const STATE_INFO: Record<string, StateInfo> = {
  gj: {
    name: "Gujarat",
    city: "Rajkot (HQ)",
    role: "Primary Supply Hub",
    icon: "🏭",
    color: "#FFBE00",
  },
  rj: {
    name: "Rajasthan",
    city: "Jaipur & Jodhpur",
    role: "Key Distribution Partner",
    icon: "🔧",
    color: "#FF9D3D",
  },
  mh: {
    name: "Maharashtra",
    city: "Pune & Mumbai",
    role: "Distribution Hub",
    icon: "🚚",
    color: "#FF6B35",
  },
  mp: {
    name: "Madhya Pradesh",
    city: "Indore & Bhopal",
    role: "Central Network Node",
    icon: "⚙️",
    color: "#E84393",
  },
};

/* ── Component ──────────────────────────────────────────────────────── */
export default function IndiaMapChart() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>("gj"); // default

  const activeId = selected ?? hovered;
  const activeInfo = activeId ? STATE_INFO[activeId] : null;

  return (
    <div className="relative w-full select-none">
      {/* SVG Map */}
      <div className="relative">
        <svg
          viewBox={indiaMap.viewBox}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="States in India served by Teckon"
          className="w-full h-auto"
        >
          {indiaMap.locations.map(
            (loc: { id: string; name: string; path: string }) => {
              const isOn = HIGHLIGHT.has(loc.id);
              const isHovered = hovered === loc.id;
              const isSelected = selected === loc.id;
              const info = STATE_INFO[loc.id];

              let fill = "rgba(255,255,255,0.06)";
              let stroke = "rgba(255,255,255,0.25)";
              let strokeW = 0.6;
              let opacity = 1;

              if (isOn) {
                fill = isSelected
                  ? info.color
                  : isHovered
                  ? `${info.color}cc`
                  : `${info.color}80`;
                stroke = info.color;
                strokeW = isSelected ? 2 : 1.5;
                opacity = 1;
              } else {
                // dim non-active states when something is selected
                if (selected) opacity = 0.5;
              }

              return (
                <path
                  key={loc.id}
                  id={`state-${loc.id}`}
                  d={loc.path}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeW}
                  opacity={opacity}
                  style={{
                    transition:
                      "fill 0.25s ease, stroke 0.25s ease, opacity 0.25s ease",
                    cursor: isOn ? "pointer" : "default",
                    filter:
                      isOn && (isHovered || isSelected)
                        ? `drop-shadow(0 0 8px ${info.color}88)`
                        : "none",
                  }}
                  onMouseEnter={() => isOn && setHovered(loc.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() =>
                    isOn &&
                    setSelected((prev) =>
                      prev === loc.id ? null : loc.id
                    )
                  }
                >
                  <title>{loc.name}</title>
                </path>
              );
            }
          )}
        </svg>

        {/* Pulse rings on active highlighted states */}
        <svg
          viewBox={indiaMap.viewBox}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-auto pointer-events-none"
        >
          {Object.entries(STATE_INFO).map(([id, info]) => {
            const loc = indiaMap.locations.find(
              (l: { id: string }) => l.id === id
            );
            if (!loc || selected !== id) return null;
            // Parse a rough center from the path bbox — simple approach
            return null; // pulse handled via glow filter above
          })}
        </svg>
      </div>

      {/* Info Panel */}
      <AnimatePresence mode="wait">
        {activeInfo ? (
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mt-4 rounded-2xl border px-5 py-4 flex items-center gap-4"
            style={{
              background: `linear-gradient(135deg, ${activeInfo.color}18, ${activeInfo.color}08)`,
              borderColor: `${activeInfo.color}55`,
            }}
          >
            {/* Icon badge */}
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${activeInfo.color}22` }}
            >
              {activeInfo.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span
                  className="text-base font-bold"
                  style={{ color: activeInfo.color }}
                >
                  {activeInfo.name}
                </span>
                <span className="text-white/40 text-xs">•</span>
                <span className="text-white/60 text-xs">{activeInfo.city}</span>
              </div>
              <p className="text-white/70 text-sm">{activeInfo.role}</p>
            </div>

            {/* Selected indicator */}
            {selected === activeId && (
              <span
                className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: activeInfo.color,
                  color: "#0B0F19",
                }}
              >
                ACTIVE
              </span>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-center text-white/30 text-xs"
          >
            Click a highlighted state to explore
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white">
        {Object.entries(STATE_INFO).map(([id, info]) => {
          const isActive = selected === id;
          return (
            <li
              key={id}
              onClick={() =>
                setSelected((prev) => (prev === id ? null : id))
              }
              className="flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer transition-all duration-200"
              style={{
                background: isActive ? `${info.color}20` : "rgba(255,255,255,0.04)",
                borderColor: isActive ? `${info.color}66` : "rgba(255,255,255,0.1)",
                boxShadow: isActive ? `0 0 12px ${info.color}33` : "none",
              }}
            >
              <span
                className="size-2.5 rounded-full shrink-0"
                style={{
                  background: info.color,
                  boxShadow: `0 0 8px ${info.color}88`,
                }}
              />
              <span className="font-semibold text-xs truncate">{info.name}</span>
            </li>
          );
        })}
      </ul>

      {/* Hint text */}
      <p className="text-center text-white/25 text-[10px] mt-3 tracking-wide">
        TAP A STATE OR LEGEND TO EXPLORE
      </p>
    </div>
  );
}
