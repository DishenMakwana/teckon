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

const GLOW_CLASSES: Record<string, string> = {
  gj: "hover:drop-shadow-[0_0_8px_rgba(255,190,0,0.53)] drop-shadow-[0_0_8px_rgba(255,190,0,0.53)]",
  rj: "hover:drop-shadow-[0_0_8px_rgba(255,157,61,0.53)] drop-shadow-[0_0_8px_rgba(255,157,61,0.53)]",
  mh: "hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.53)] drop-shadow-[0_0_8px_rgba(255,107,53,0.53)]",
  mp: "hover:drop-shadow-[0_0_8px_rgba(232,67,147,0.53)] drop-shadow-[0_0_8px_rgba(232,67,147,0.53)]",
};

const PANEL_STYLE_CLASSES: Record<string, string> = {
  gj: "bg-gradient-to-br from-[#FFBE00]/10 to-[#FFBE00]/05 border-[#FFBE00]/30",
  rj: "bg-gradient-to-br from-[#FF9D3D]/10 to-[#FF9D3D]/05 border-[#FF9D3D]/30",
  mh: "bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/05 border-[#FF6B35]/30",
  mp: "bg-gradient-to-br from-[#E84393]/10 to-[#E84393]/05 border-[#E84393]/30",
};

const ICON_BG_CLASSES: Record<string, string> = {
  gj: "bg-[#FFBE00]/15",
  rj: "bg-[#FF9D3D]/15",
  mh: "bg-[#FF6B35]/15",
  mp: "bg-[#E84393]/15",
};

const TEXT_COLOR_CLASSES: Record<string, string> = {
  gj: "text-[#FFBE00]",
  rj: "text-[#FF9D3D]",
  mh: "text-[#FF6B35]",
  mp: "text-[#E84393]",
};

const BADGE_BG_CLASSES: Record<string, string> = {
  gj: "bg-[#FFBE00] text-[#0B0F19]",
  rj: "bg-[#FF9D3D] text-[#0B0F19]",
  mh: "bg-[#FF6B35] text-[#0B0F19]",
  mp: "bg-[#E84393] text-[#0B0F19]",
};

const LEGEND_ITEM_CLASSES: Record<string, string> = {
  gj: "bg-[#FFBE00]/10 border-[#FFBE00]/40 shadow-[0_0_12px_rgba(255,190,0,0.2)]",
  rj: "bg-[#FF9D3D]/10 border-[#FF9D3D]/40 shadow-[0_0_12px_rgba(255,157,61,0.2)]",
  mh: "bg-[#FF6B35]/10 border-[#FF6B35]/40 shadow-[0_0_12px_rgba(255,107,53,0.2)]",
  mp: "bg-[#E84393]/10 border-[#E84393]/40 shadow-[0_0_12px_rgba(232,67,147,0.2)]",
};

const DOT_BG_CLASSES: Record<string, string> = {
  gj: "bg-[#FFBE00] shadow-[0_0_8px_rgba(255,190,0,0.53)]",
  rj: "bg-[#FF9D3D] shadow-[0_0_8px_rgba(255,157,61,0.53)]",
  mh: "bg-[#FF6B35] shadow-[0_0_8px_rgba(255,107,53,0.53)]",
  mp: "bg-[#E84393] shadow-[0_0_8px_rgba(232,67,147,0.53)]",
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

              const glowClass = isOn && (isHovered || isSelected) ? GLOW_CLASSES[loc.id] : "";

              return (
                <path
                  key={loc.id}
                  id={`state-${loc.id}`}
                  d={loc.path}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeW}
                  opacity={opacity}
                  className={`transition-all duration-250 ease-in-out ${isOn ? "cursor-pointer" : "cursor-default"} ${glowClass}`}
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
          {Object.keys(STATE_INFO).map((id) => {
            const loc = indiaMap.locations.find(
              (l: { id: string }) => l.id === id
            );
            if (!loc || selected !== id) return null;
            return null;
          })}
        </svg>
      </div>

      {/* Info Panel */}
      <AnimatePresence mode="wait">
        {activeInfo && activeId ? (
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`mt-4 rounded-2xl border px-5 py-4 flex items-center gap-4 ${PANEL_STYLE_CLASSES[activeId]}`}
          >
            {/* Icon badge */}
            <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${ICON_BG_CLASSES[activeId]}`}>
              {activeInfo.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`text-base font-bold ${TEXT_COLOR_CLASSES[activeId]}`}>
                  {activeInfo.name}
                </span>
                <span className="text-white/40 text-xs">•</span>
                <span className="text-white/60 text-xs">{activeInfo.city}</span>
              </div>
              <p className="text-white/70 text-sm">{activeInfo.role}</p>
            </div>

            {/* Selected indicator */}
            {selected === activeId && (
              <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${BADGE_BG_CLASSES[activeId]}`}>
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
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer transition-all duration-200 ${
                isActive ? LEGEND_ITEM_CLASSES[id] : "bg-white/5 border-white/10"
              }`}
            >
              <span className={`size-2.5 rounded-full shrink-0 ${DOT_BG_CLASSES[id]}`} />
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
