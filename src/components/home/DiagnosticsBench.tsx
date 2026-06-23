"use client";

import { useState, useMemo } from "react";
import { Activity, ShieldAlert, Cpu, Wrench } from "lucide-react";
import { motion } from "framer-motion";

interface Preset {
  id: string;
  name: string;
  machine: string;
  bore: number; // mm
  rod: number; // mm
  stroke: number; // mm
  pressure: number; // bar
  flow: number; // LPM
  partName: string;
  partRef: string;
  partSlug: string;
}

const PRESETS: Preset[] = [
  {
    id: "jcb-3dx-lift",
    name: "JCB 3DX Boom Lift Cylinder",
    machine: "JCB 3DX / 3CX",
    bore: 110,
    rod: 70,
    stroke: 1025,
    pressure: 250,
    flow: 80,
    partName: "JCB 3DX Boom Lift Cylinder",
    partRef: "REF-811/50201",
    partSlug: "jcb-hydraulic-pump" // links to general JCB parts or specific detail page
  },
  {
    id: "hitachi-ex200-bucket",
    name: "Hitachi EX200 Bucket Cylinder",
    machine: "Hitachi EX200 / Zaxis 200",
    bore: 120,
    rod: 85,
    stroke: 1060,
    pressure: 343,
    flow: 120,
    partName: "Hitachi EX200 Cylinder Spares",
    partRef: "REF-HIT-CYL-EX200",
    partSlug: "jcb-hydraulic-pump" // fallback to catalog
  },
  {
    id: "cat-424-loader",
    name: "CAT 424B Loader Lift Cylinder",
    machine: "CAT 424B / 428E",
    bore: 90,
    rod: 50,
    stroke: 840,
    pressure: 200,
    flow: 70,
    partName: "CAT Loader Cylinder Assembly",
    partRef: "REF-CAT-424B-LA",
    partSlug: "jcb-hydraulic-pump"
  }
];

export default function DiagnosticsBench() {
  const [activePreset, setActivePreset] = useState<string>("jcb-3dx-lift");

  // Custom state if Custom mode is selected
  const [customBore, setCustomBore] = useState<number>(100);
  const [customRod, setCustomRod] = useState<number>(60);
  const [customStroke, setCustomStroke] = useState<number>(1000);
  const [customPressure, setCustomPressure] = useState<number>(200);
  const [customFlow, setCustomFlow] = useState<number>(80);

  const isCustom = activePreset === "custom";

  // Active values based on selection
  const values = useMemo(() => {
    if (!isCustom) {
      const preset = PRESETS.find((p) => p.id === activePreset);
      if (preset) return preset;
    }
    return {
      id: "custom",
      name: "Custom Diagnostics Configuration",
      machine: "Custom Machinery Spec",
      bore: customBore,
      rod: customRod,
      stroke: customStroke,
      pressure: customPressure,
      flow: customFlow,
      partName: "Teckon Custom Cylinder & Seal Kit Spares",
      partRef: "CUSTOM-SPECIFICATION",
      partSlug: ""
    };
  }, [
    isCustom,
    activePreset,
    customBore,
    customRod,
    customStroke,
    customPressure,
    customFlow
  ]);

  // Derived calculations
  const stats = useMemo(() => {
    const boreCm = values.bore / 10;
    const rodCm = values.rod / 10;
    const strokeCm = values.stroke / 10;

    // Cylinder Area (Push) = pi * r^2
    const areaPush = Math.PI * Math.pow(boreCm / 2, 2); // cm^2
    // Rod Area = pi * r^2
    const areaRod = Math.PI * Math.pow(rodCm / 2, 2); // cm^2
    // Cylinder Area (Pull) = Area (Push) - Area (Rod)
    const areaPull = areaPush - areaRod; // cm^2

    // Push/Pull Force (kg) = Pressure (bar) * Area (cm^2)
    // 1 bar = 1.0197 kg/cm^2, but practically force = pressure * area (in kg)
    const pushForceKg = values.pressure * areaPush;
    const pullForceKg = values.pressure * areaPull;

    const pushForceTons = pushForceKg / 1000;
    const pullForceTons = pullForceKg / 1000;

    // Stroke Volume (Liters) = Area * Stroke / 1000
    const volumeLiters = (areaPush * strokeCm) / 1000;

    // Stroke time (sec) = Volume (Liters) / (Flow Rate (LPM) / 60)
    // = 60 * Volume / Flow
    const extendTimeSec = (60 * volumeLiters) / values.flow;

    return {
      pushForceTons: parseFloat(pushForceTons.toFixed(2)),
      pullForceTons: parseFloat(pullForceTons.toFixed(2)),
      volumeLiters: parseFloat(volumeLiters.toFixed(2)),
      extendTimeSec: parseFloat(extendTimeSec.toFixed(2))
    };
  }, [values]);

  // Handle Preset changes
  const handlePresetSelect = (id: string) => {
    setActivePreset(id);
    if (id !== "custom") {
      const preset = PRESETS.find((p) => p.id === id);
      if (preset) {
        setCustomBore(preset.bore);
        // ensure rod is smaller than bore
        setCustomRod(Math.min(preset.rod, preset.bore - 10));
        setCustomStroke(preset.stroke);
        setCustomPressure(preset.pressure);
        setCustomFlow(preset.flow);
      }
    }
  };

  // Safe rod input handler (must be smaller than bore)
  const handleBoreChange = (val: number) => {
    setCustomBore(val);
    if (customRod >= val) {
      setCustomRod(Math.max(20, val - 10));
    }
  };

  const handleRodChange = (val: number) => {
    setCustomRod(Math.min(val, customBore - 10));
  };

  // WhatsApp link generator
  const whatsappUrl = useMemo(() => {
    const text = `Hello Shreeji Hydraulics,\n\nI used the Teckon Telemetry Calculator and would like to inquire about spares matching these specifications:\n\n- Configuration: ${values.name}\n- Bore Diameter: ${values.bore} mm\n- Rod Diameter: ${values.rod} mm\n- Stroke Length: ${values.stroke} mm\n- Operating Pressure: ${values.pressure} bar\n- Target Machine: ${values.machine}\n- Part Inquiry: ${values.partName} (${values.partRef})\n\nPlease share price and lead time.`;
    return `https://wa.me/919426915578?text=${encodeURIComponent(text)}`;
  }, [values]);

  // SVG Gauge calculations
  // Angle goes from -97.125 to +97.125 deg. Total range: 194.25 deg.
  const gaugeRotation = useMemo(() => {
    const ratio = Math.min(Math.max(values.pressure / 400, 0), 1);
    return -97 + ratio * 194;
  }, [values.pressure]);



  return (
    <section className="py-20 bg-[#0B0F19] relative overflow-hidden">
      {/* Dark Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Industrial Accents */}
      <div className="absolute top-10 left-10 text-white/5 font-mono text-xs hidden lg:block select-none">
        BENCH_ID: SH-PR-992
        <br />
        SYS_STATUS: ACTIVE
      </div>
      <div className="absolute bottom-10 right-10 text-white/5 font-mono text-xs hidden lg:block select-none">
        LOC: RAJKOT_FACTORY
        <br />
        TECKON_TELEMETRY_V1
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <span className="text-[#FFBE00] font-mono text-sm uppercase tracking-widest mb-3 block flex items-center justify-center gap-2">
            <Activity className="h-4 w-4 text-[#FFBE00] animate-pulse" />
            LIVE TELEMETRY LAB
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Hydraulic Diagnostics Bench
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Select a common heavy machine preset or manually adjust parameters to test push force, fluid displacement, and cycle times in real time.
          </p>
          <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Box (Left) */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Corner ticks */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FFBE00]/30" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FFBE00]/30" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#FFBE00]/30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FFBE00]/30" />

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="h-5 w-5 text-[#FFBE00]" />
                <h3 className="text-white font-black text-lg tracking-wider uppercase font-mono">
                  Diagnostics Input Console
                </h3>
              </div>

              {/* Preset selector grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                {PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePresetSelect(p.id)}
                    className={`px-3 py-3 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                      activePreset === p.id
                        ? "bg-[#FFBE00] text-[#0B0F19] border-[#FFBE00] font-black"
                        : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="text-[10px] font-mono opacity-80 leading-none mb-1">
                      {p.machine}
                    </div>
                    <div className="text-xs truncate font-bold">
                      {p.name.replace(" Cylinder", "")}
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => handlePresetSelect("custom")}
                  className={`px-3 py-3 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                    activePreset === "custom"
                      ? "bg-[#FF6B35] text-white border-[#FF6B35] font-black"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="text-[10px] font-mono opacity-80 leading-none mb-1">
                    MANUAL CONFIG
                  </div>
                  <div className="text-xs font-bold">Custom Diagnostics</div>
                </button>
              </div>

              {/* Sliders Container */}
              <div className="space-y-6">
                {/* Bore Diameter */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-wide">
                      Cylinder Bore Diameter (D)
                    </span>
                    <span className="text-[#FFBE00] font-bold">
                      {isCustom ? `${customBore} mm` : `${values.bore} mm`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="200"
                    value={isCustom ? customBore : values.bore}
                    disabled={!isCustom}
                    onChange={(e) => handleBoreChange(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFBE00] disabled:opacity-40"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>40 mm</span>
                    <span>200 mm</span>
                  </div>
                </div>

                {/* Rod Diameter */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-wide">
                      Piston Rod Diameter (d)
                    </span>
                    <span className="text-[#FFBE00] font-bold">
                      {isCustom ? `${customRod} mm` : `${values.rod} mm`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max={isCustom ? customBore - 10 : values.bore - 10}
                    value={isCustom ? customRod : values.rod}
                    disabled={!isCustom}
                    onChange={(e) => handleRodChange(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFBE00] disabled:opacity-40"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>20 mm</span>
                    <span>Max (Bore - 10mm)</span>
                  </div>
                </div>

                {/* Stroke Length */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-wide">
                      Cylinder Stroke (S)
                    </span>
                    <span className="text-[#FFBE00] font-bold">
                      {isCustom ? `${customStroke} mm` : `${values.stroke} mm`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    value={isCustom ? customStroke : values.stroke}
                    disabled={!isCustom}
                    onChange={(e) => setCustomStroke(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFBE00] disabled:opacity-40"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>100 mm</span>
                    <span>2000 mm</span>
                  </div>
                </div>

                {/* Operating Pressure */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-wide">
                      Target Pressure (P)
                    </span>
                    <span className="text-[#FFBE00] font-bold text-sm">
                      {isCustom ? `${customPressure} bar` : `${values.pressure} bar`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="400"
                    value={isCustom ? customPressure : values.pressure}
                    disabled={!isCustom}
                    onChange={(e) => setCustomPressure(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFBE00] disabled:opacity-40"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>50 bar</span>
                    <span>400 bar</span>
                  </div>
                </div>

                {/* Pump Flow Rate */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-wide">
                      Supply Pump Flow Rate (Q)
                    </span>
                    <span className="text-[#FFBE00] font-bold">
                      {isCustom ? `${customFlow} L/min` : `${values.flow} L/min`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    value={isCustom ? customFlow : values.flow}
                    disabled={!isCustom}
                    onChange={(e) => setCustomFlow(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFBE00] disabled:opacity-40"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>20 LPM</span>
                    <span>200 LPM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Wrench className="h-4 w-4 text-[#FFBE00]" />
                <span>Specs synced to premium Teckon parts.</span>
              </div>
              {isCustom && (
                <button
                  onClick={() => handlePresetSelect("jcb-3dx-lift")}
                  className="text-[#FFBE00] hover:underline font-bold transition-all cursor-pointer"
                >
                  Reset to Factory Preset
                </button>
              )}
            </div>
          </div>

          {/* Telemetry Display (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Live Readouts Panel */}
            <div className="bg-slate-900/90 rounded-3xl border border-white/10 p-6 flex-1 flex flex-col justify-between relative shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white font-black text-sm tracking-wider uppercase font-mono flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  READOUT TELEMETRY
                </span>
                <span className="text-white/30 font-mono text-xs">SYS_CALC_OK</span>
              </div>

              {/* Visual SVG Gauge */}
              <div className="flex flex-col items-center pt-2 pb-8 relative">
                <svg width="220" height="150" viewBox="0 0 220 150" className="drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  {/* Outer circle track */}
                  <path
                    d="M 30.6,119.8 A 80,80 0 1,1 189.4,119.8"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  {/* Normal pressure zone arc (0 - 200 bar) */}
                  <path
                    d="M 30.6,119.8 A 80,80 0 0,1 110,30"
                    fill="none"
                    stroke="url(#normal-grad)"
                    strokeWidth="12"
                    strokeLinecap="butt"
                  />
                  {/* Heavy zone arc (200 - 300 bar) */}
                  <path
                    d="M 110,30 A 80,80 0 0,1 170,57"
                    fill="none"
                    stroke="#FFBE00"
                    strokeWidth="12"
                    strokeLinecap="butt"
                  />
                  {/* Warning zone arc (300 - 400 bar) */}
                  <path
                    d="M 170,57 A 80,80 0 0,1 189.4,119.8"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="12"
                    strokeLinecap="butt"
                  />

                  {/* Ticks & Text */}
                  <text x="20" y="115" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" textAnchor="middle">0</text>
                  <text x="110" y="20" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" textAnchor="middle">200</text>
                  <text x="200" y="115" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" textAnchor="middle">400</text>
                  <text x="110" y="78" fill="white" fontSize="28" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                    {values.pressure}
                  </text>
                  <text x="110" y="92" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="2">
                    BAR PRESSURE
                  </text>

                  {/* Needle */}
                  <g transform={`translate(110, 110)`}>
                    <motion.g
                      animate={{ rotate: gaugeRotation }}
                      style={{ transformOrigin: "0px 0px" }}
                      transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8 }}
                    >
                      {/* Invisible circle to force bounding box center to (0, 0) */}
                      <circle cx="0" cy="0" r="80" fill="none" opacity="0" pointerEvents="none" />
                      {/* Actual needle line */}
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-78"
                        stroke="#FFBE00"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </motion.g>
                    {/* Pivot center cap */}
                    <circle cx="0" cy="0" r="10" fill="#0B0F19" stroke="#FFBE00" strokeWidth="3" />
                  </g>

                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="normal-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#FF9D3D" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Digital LCD Sub-Display */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/60 border border-white/5 rounded px-3 py-1 font-mono text-[10px] text-emerald-400 font-bold shadow-inner">
                  FORCE: {stats.pushForceTons} TON (PUSH)
                </div>
              </div>

              {/* Monospace Statistics Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                
                {/* Push Force Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Cylinder Push Force
                  </div>
                  <div className="text-2xl font-black text-white font-mono leading-none">
                    {stats.pushForceTons}
                    <span className="text-xs text-[#FFBE00] font-bold ml-1">TONS</span>
                  </div>
                  <div className="text-[9px] font-mono text-slate-500 mt-2">
                    F = P × A1 (Extend)
                  </div>
                </div>

                {/* Pull Force Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Cylinder Pull Force
                  </div>
                  <div className="text-2xl font-black text-white font-mono leading-none">
                    {stats.pullForceTons}
                    <span className="text-xs text-[#FFBE00] font-bold ml-1">TONS</span>
                  </div>
                  <div className="text-[9px] font-mono text-slate-500 mt-2">
                    F = P × A2 (Retract)
                  </div>
                </div>

                {/* Stroke Volume */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Oil Vol. Capacity
                  </div>
                  <div className="text-2xl font-black text-white font-mono leading-none">
                    {stats.volumeLiters}
                    <span className="text-xs text-[#FFBE00] font-bold ml-1">LTR</span>
                  </div>
                  <div className="text-[9px] font-mono text-slate-500 mt-2">
                    V = A1 × S (Displacement)
                  </div>
                </div>

                {/* Extension Time */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Extend Cycle Time
                  </div>
                  <div className="text-2xl font-black text-white font-mono leading-none">
                    {stats.extendTimeSec}
                    <span className="text-xs text-[#FFBE00] font-bold ml-1">SEC</span>
                  </div>
                  <div className="text-[9px] font-mono text-slate-500 mt-2">
                    t = V / Q (Extend speed)
                  </div>
                </div>

              </div>

            </div>

            {/* Recommendations Card */}
            <div className="bg-[#FFBE00] rounded-3xl p-6 text-[#0B0F19] relative overflow-hidden shadow-2xl flex flex-col justify-between">
              
              {/* Decorative stripes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rotate-12 -translate-y-8 translate-x-8 pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ShieldAlert className="h-5 w-5 text-[#0B0F19]" />
                  <span className="font-extrabold text-sm uppercase tracking-wider font-mono">
                    RECOMMENDED SPARES
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="font-black text-lg leading-snug">
                    {values.partName}
                  </h4>
                  <div className="inline-block bg-[#0b0f19]/10 rounded px-2 py-0.5 mt-1 font-mono text-xs font-bold">
                    Ref No: {values.partRef}
                  </div>
                </div>

                <p className="text-[#0B0F19]/80 text-xs leading-relaxed mb-6 font-medium">
                  We supply custom hardened pins, piston rods, cylinder tubes, and heavy-duty NBR/Polyurethane seal kits specifically engineered to withstand up to 400 bar pressure for this configuration.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#0B0F19] text-white hover:bg-[#1E293B] font-black py-3.5 rounded-2xl text-sm transition-all duration-200 shadow-xl cursor-pointer"
              >
                Inquire about this Configuration
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
