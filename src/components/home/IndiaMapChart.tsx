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
    <div className="w-full select-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
        {/* Left Column: Text & explorer tags inside a matching card container */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-sm lg:max-w-md relative bg-white/5 rounded-3xl p-6 border border-white/10 shadow-2xl space-y-4 text-left">
            {/* Top: Pan-India Supply Network */}
            <div className="space-y-3">
              <h3 className="text-xl lg:text-2xl font-black text-white">Pan-India Supply Network</h3>
              <p className="text-white/70 leading-relaxed text-xs lg:text-sm">
                Teckon&apos;s distribution network spans across India&apos;s major construction equipment markets. We maintain strong dealer relationships across Gujarat, Rajasthan, Maharashtra, and Madhya Pradesh — ensuring fast delivery of critical hydraulic spares.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: "gj", state: "Gujarat", note: "Headquartered in Rajkot — primary supply hub" },
                { id: "rj", state: "Rajasthan", note: "Strong presence in Jaipur & Jodhpur" },
                { id: "mh", state: "Maharashtra", note: "Distribution hub in Pune & Mumbai" },
                { id: "mp", state: "Madhya Pradesh", note: "Network in Indore & Bhopal" },
              ].map((item) => {
                const isActive = selected === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelected((prev) => (prev === item.id ? null : item.id))}
                    className={`flex items-start gap-3 rounded-xl p-2.5 border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#FFBE00]/15 border-[#FFBE00]/40 shadow-[0_0_12px_rgba(255,190,0,0.15)]"
                        : "bg-white/10 border-white/5 hover:bg-white/15"
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${isActive ? "bg-[#FFBE00] animate-pulse" : "bg-white/40"}`} />
                    <div>
                      <span className="text-white font-semibold text-sm">{item.state}</span>
                      <span className="text-white/60 text-xs ml-2">— {item.note}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "Strong Reach Across 4 States",
                "Trusted Hydraulic Spares Network",
                "Fast Nationwide Delivery",
              ].map((chip) => (
                <span key={chip} className="bg-[#FFBE00] text-[#0B0F19] text-[9px] sm:text-[10px] md:text-[11px] whitespace-nowrap font-black px-2.5 py-1 rounded-full shadow-md">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: SVG Map & Active Info Panel (Reduced size and centered) */}
        <div className="flex flex-col items-center justify-center w-full lg:pl-4">
          <div className="w-full max-w-sm lg:max-w-md relative bg-white/5 rounded-3xl p-6 border border-white/10 shadow-2xl space-y-4">
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

            {/* Dynamic Active State Info Panel (under the map) */}
            <div className="min-h-[76px] w-full mt-4">
              <AnimatePresence mode="wait">
                {activeInfo && activeId ? (
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className={`rounded-xl border px-4 py-2.5 flex items-center gap-3 ${PANEL_STYLE_CLASSES[activeId]}`}
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-lg ${ICON_BG_CLASSES[activeId]}`}>
                      {activeInfo.icon}
                    </div>

                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-xs font-bold ${TEXT_COLOR_CLASSES[activeId]}`}>
                          {activeInfo.name}
                        </span>
                        <span className="text-white/45 text-[9px]">•</span>
                        <span className="text-white/60 text-[11px]">{activeInfo.city}</span>
                      </div>
                      <p className="text-white/80 text-[11px]">{activeInfo.role}</p>
                    </div>

                    {selected === activeId && (
                      <span className={`shrink-0 text-[8px] font-bold px-1.5 py-0.5 rounded-full ${BADGE_BG_CLASSES[activeId]}`}>
                        ACTIVE
                      </span>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="hint-panel"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-xl border border-dashed border-white/10 p-4 text-center text-white/30 text-xs flex flex-col items-center justify-center h-[64px]"
                  >
                    <span>Select a state to explore details</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Visual Legend Guide & Hint */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#FFBE00]" />
                  <span className="text-white/70 text-xs">Strong Reach</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-white/20" />
                  <span className="text-white/70 text-xs">Other States</span>
                </div>
              </div>
              <p className="text-white/25 text-[10px] tracking-wide">
                TAP A STATE TO EXPLORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
