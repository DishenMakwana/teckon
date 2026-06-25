"use client";
import { useState, useMemo, useEffect } from "react";
import { Activity, Cpu, Wrench, Play, Square } from "lucide-react";
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
    partSlug: "jcb-hydraulic-pump",
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
    partSlug: "jcb-hydraulic-pump",
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
    partSlug: "jcb-hydraulic-pump",
  },
];

export default function DiagnosticsBench() {
  const [activePreset, setActivePreset] = useState<string>("jcb-3dx-lift");

  // Custom state if Custom mode is selected
  const [customBore, setCustomBore] = useState<number>(100);
  const [customRod, setCustomRod] = useState<number>(60);
  const [customStroke, setCustomStroke] = useState<number>(1000);
  const [customPressure, setCustomPressure] = useState<number>(200);
  const [customFlow, setCustomFlow] = useState<number>(80);

  // Simulation states
  const [extension, setExtension] = useState<number>(0.3); // 0 to 1 representing piston position
  const [direction, setDirection] = useState<number>(1); // 1 = extending, -1 = retracting
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

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
      partSlug: "",
    };
  }, [
    isCustom,
    activePreset,
    customBore,
    customRod,
    customStroke,
    customPressure,
    customFlow,
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
    const pushForceKg = values.pressure * areaPush;
    const pullForceKg = values.pressure * areaPull;

    const pushForceTons = pushForceKg / 1000;
    const pullForceTons = pullForceKg / 1000;

    // Stroke Volume (Liters) = Area * Stroke / 1000
    const volumeLiters = (areaPush * strokeCm) / 1000;

    // Stroke time (sec) = Volume (Liters) / (Flow Rate (LPM) / 60)
    const extendTimeSec = (60 * volumeLiters) / values.flow;

    return {
      pushForceTons: parseFloat(pushForceTons.toFixed(2)),
      pullForceTons: parseFloat(pullForceTons.toFixed(2)),
      volumeLiters: parseFloat(volumeLiters.toFixed(2)),
      extendTimeSec: parseFloat(extendTimeSec.toFixed(2)),
    };
  }, [values]);

  // High-precision delta-time animation loop
  useEffect(() => {
    if (!isSimulating) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const cycleTime = Math.max(0.3, stats.extendTimeSec); // protect against division by zero/extreme values

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000; // delta in seconds
      lastTime = time;

      // Increase/decrease extension based on delta time divided by cycle duration
      setExtension((prev) => {
        let nextExtension = prev + (delta / cycleTime) * direction;

        if (nextExtension >= 1) {
          nextExtension = 1;
          setDirection(-1);
        } else if (nextExtension <= 0) {
          nextExtension = 0;
          setDirection(1);
        }
        return nextExtension;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isSimulating, direction, stats.extendTimeSec]);

  // Handle Preset changes
  const handlePresetSelect = (id: string) => {
    setActivePreset(id);
    if (id !== "custom") {
      const preset = PRESETS.find((p) => p.id === id);
      if (preset) {
        setCustomBore(preset.bore);
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

  // SVG Gauge calculations
  const gaugeRotation = useMemo(() => {
    const ratio = Math.min(Math.max(values.pressure / 400, 0), 1);
    return -97 + ratio * 194;
  }, [values.pressure]);

  // SVG Cylinder Dimensions calculations
  const cylinderDims = useMemo(() => {
    // 1. Barrel Length (based on stroke 100 - 2000) mapped to 85px - 165px
    const barrelWidth = 85 + (values.stroke - 100) * (80 / 1900);
    // 2. Bore (based on bore 40 - 200) mapped to 20px - 56px
    const barrelHeight = 20 + (values.bore - 40) * (36 / 160);
    // 3. Rod (based on rod 20 - 190) mapped to 8px - 40px
    const rawRodHeight = 8 + (values.rod - 20) * (32 / 170);
    // Cap rod height to fit inside barrel height with margin
    const rodHeight = Math.min(rawRodHeight, barrelHeight - 6);

    const barrelX = 35;
    const centerY = 65;
    const pistonWidth = 10;
    const endCapWidth = 6;

    // Piston sliding bounds
    const pistonMinX = barrelX + 2;
    const pistonMaxX = barrelX + barrelWidth - pistonWidth - 2;
    const pistonRange = pistonMaxX - pistonMinX;
    const pistonX = pistonMinX + extension * pistonRange;

    // Rod Tip X
    const rodTipX =
      barrelX + barrelWidth + endCapWidth + extension * pistonRange;

    return {
      barrelWidth,
      barrelHeight,
      rodHeight,
      barrelX,
      centerY,
      pistonWidth,
      endCapWidth,
      pistonX,
      rodTipX,
      pistonRange,
    };
  }, [values.stroke, values.bore, values.rod, extension]);

  // Calculate percentage helper for custom slider fills
  const getPercent = (val: number, min: number, max: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  return (
    <section
      id="diagnostics"
      className="py-10 md:py-14 bg-[#0B0F19] relative overflow-hidden"
    >
      {/* Dark Blueprint-style Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0B0F19_95%)] pointer-events-none" />

      {/* Industrial Console Accents */}
      <div className="absolute top-8 left-10 text-white/10 font-mono text-[10px] tracking-wider hidden lg:block select-none border-l-2 border-[#FFBE00]/30 pl-3">
        TECKON LAB CONSOLE v1.82
        <br />
        SYSTEM_CLOCK: LOCKED
        <br />
        TELEMETRY: ONLINE
      </div>
      {/* <div className="absolute bottom-8 right-10 text-white/10 font-mono text-[10px] tracking-wider hidden 2xl:block select-none border-r-2 border-[#FFBE00]/30 pr-3 text-right">
        MANUFACTURING ROOT: RAJKOT
        <br />
        MOCK_LOAD_SIMULATOR: ACTIVE
        <br />
        DEV_REF: SP-CYL-992
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 relative">
          <span className="text-[#FFBE00] font-mono text-sm uppercase tracking-widest mb-2.5 block flex items-center justify-center gap-2">
            <Activity className="h-4 w-4 text-[#FFBE00] animate-pulse" />
            LIVE TELEMETRY LAB
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Hydraulic Diagnostics Bench
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Select a common heavy machine preset or manually adjust parameters
            to test cylinder forces, oil capacities, and stroke speeds in real
            time.
          </p>
          <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Controls Box (Left Column) */}
          <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Cyber Corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FFBE00]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FFBE00]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#FFBE00]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#FFBE00]" />

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="h-5 w-5 text-[#FFBE00] animate-pulse" />
                <h3 className="text-white font-black text-lg tracking-wider uppercase font-mono">
                  Input Parameter Console
                </h3>
              </div>

              {/* Preset Selector Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                {PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePresetSelect(p.id)}
                    className={`px-3 py-2.5 rounded-xl text-left transition-all duration-300 border cursor-pointer ${
                      activePreset === p.id
                        ? "bg-[#FFBE00] text-[#0B0F19] border-[#FFBE00] font-black shadow-[0_0_15px_rgba(255,190,0,0.4)]"
                        : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="text-[9px] font-mono opacity-80 leading-none mb-1">
                      {p.machine}
                    </div>
                    <div className="text-xs truncate font-bold">
                      {p.name.replace(" Cylinder", "")}
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => handlePresetSelect("custom")}
                  className={`px-3 py-2.5 rounded-xl text-left transition-all duration-300 border cursor-pointer ${
                    activePreset === "custom"
                      ? "bg-[#FF6B35] text-white border-[#FF6B35] font-black shadow-[0_0_15px_rgba(255,107,53,0.4)]"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="text-[9px] font-mono opacity-80 leading-none mb-1">
                    MANUAL SPEC
                  </div>
                  <div className="text-xs font-bold">Custom Diagnostics</div>
                </button>
              </div>

              {/* Sliders Container */}
              <div className="space-y-4">
                {/* Bore Diameter */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFBE00]" />
                      Bore Diameter (D)
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
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-150 focus:ring-1 focus:ring-[#FFBE00] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FFBE00] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0B0F19] [&::-webkit-slider-thumb]:shadow-[0_0_8px_#FFBE00] [&::-webkit-slider-thumb]:transition-all [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#FFBE00] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0B0F19] [&::-moz-range-thumb]:shadow-[0_0_8px_#FFBE00] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:transition-all disabled:opacity-40"
                    style={{
                      background: `linear-gradient(to right, #FFBE00 0%, #FFBE00 ${getPercent(isCustom ? customBore : values.bore, 40, 200)}%, rgba(255, 255, 255, 0.1) ${getPercent(isCustom ? customBore : values.bore, 40, 200)}%, rgba(255, 255, 255, 0.1) 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>40 mm</span>
                    <span>200 mm</span>
                  </div>
                </div>

                {/* Rod Diameter */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFBE00]" />
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
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-150 focus:ring-1 focus:ring-[#FFBE00] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FFBE00] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0B0F19] [&::-webkit-slider-thumb]:shadow-[0_0_8px_#FFBE00] [&::-webkit-slider-thumb]:transition-all [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#FFBE00] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0B0F19] [&::-moz-range-thumb]:shadow-[0_0_8px_#FFBE00] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:transition-all disabled:opacity-40"
                    style={{
                      background: `linear-gradient(to right, #FFBE00 0%, #FFBE00 ${getPercent(isCustom ? customRod : values.rod, 20, isCustom ? customBore - 10 : values.bore - 10)}%, rgba(255, 255, 255, 0.1) ${getPercent(isCustom ? customRod : values.rod, 20, isCustom ? customBore - 10 : values.bore - 10)}%, rgba(255, 255, 255, 0.1) 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>20 mm</span>
                    <span>Max (Bore - 10mm)</span>
                  </div>
                </div>

                {/* Stroke Length */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFBE00]" />
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
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-150 focus:ring-1 focus:ring-[#FFBE00] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FFBE00] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0B0F19] [&::-webkit-slider-thumb]:shadow-[0_0_8px_#FFBE00] [&::-webkit-slider-thumb]:transition-all [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#FFBE00] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0B0F19] [&::-moz-range-thumb]:shadow-[0_0_8px_#FFBE00] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:transition-all disabled:opacity-40"
                    style={{
                      background: `linear-gradient(to right, #FFBE00 0%, #FFBE00 ${getPercent(isCustom ? customStroke : values.stroke, 100, 2000)}%, rgba(255, 255, 255, 0.1) ${getPercent(isCustom ? customStroke : values.stroke, 100, 2000)}%, rgba(255, 255, 255, 0.1) 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>100 mm</span>
                    <span>2000 mm</span>
                  </div>
                </div>

                {/* Operating Pressure */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFBE00]" />
                      Target Pressure (P)
                    </span>
                    <span className="text-[#FFBE00] font-bold text-sm">
                      {isCustom
                        ? `${customPressure} bar`
                        : `${values.pressure} bar`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="400"
                    value={isCustom ? customPressure : values.pressure}
                    disabled={!isCustom}
                    onChange={(e) =>
                      setCustomPressure(parseInt(e.target.value))
                    }
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-150 focus:ring-1 focus:ring-[#FFBE00] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FFBE00] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0B0F19] [&::-webkit-slider-thumb]:shadow-[0_0_8px_#FFBE00] [&::-webkit-slider-thumb]:transition-all [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#FFBE00] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0B0F19] [&::-moz-range-thumb]:shadow-[0_0_8px_#FFBE00] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:transition-all disabled:opacity-40"
                    style={{
                      background: `linear-gradient(to right, #FFBE00 0%, #FFBE00 ${getPercent(isCustom ? customPressure : values.pressure, 50, 400)}%, rgba(255, 255, 255, 0.1) ${getPercent(isCustom ? customPressure : values.pressure, 50, 400)}%, rgba(255, 255, 255, 0.1) 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>50 bar</span>
                    <span>400 bar</span>
                  </div>
                </div>

                {/* Pump Flow Rate */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFBE00]" />
                      Supply Pump Flow Rate (Q)
                    </span>
                    <span className="text-[#FFBE00] font-bold">
                      {isCustom
                        ? `${customFlow} L/min`
                        : `${values.flow} L/min`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    value={isCustom ? customFlow : values.flow}
                    disabled={!isCustom}
                    onChange={(e) => setCustomFlow(parseInt(e.target.value))}
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-150 focus:ring-1 focus:ring-[#FFBE00] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FFBE00] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0B0F19] [&::-webkit-slider-thumb]:shadow-[0_0_8px_#FFBE00] [&::-webkit-slider-thumb]:transition-all [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#FFBE00] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0B0F19] [&::-moz-range-thumb]:shadow-[0_0_8px_#FFBE00] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:transition-all disabled:opacity-40"
                    style={{
                      background: `linear-gradient(to right, #FFBE00 0%, #FFBE00 ${getPercent(isCustom ? customFlow : values.flow, 20, 200)}%, rgba(255, 255, 255, 0.1) ${getPercent(isCustom ? customFlow : values.flow, 20, 200)}%, rgba(255, 255, 255, 0.1) 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
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

          {/* Control & Live Readouts Panel */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-3xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative shadow-2xl overflow-hidden">
            {/* Scanline overlay for cyber effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-40" />

            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className="text-white font-black text-sm tracking-wider uppercase font-mono flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${isSimulating ? "bg-[#FF6B35] animate-ping" : "bg-emerald-500"} inline-block`}
                />
                READOUT TELEMETRY
              </span>
              <span className="text-[#FFBE00] font-mono text-[10px] bg-[#FFBE00]/10 border border-[#FFBE00]/20 rounded-md px-2 py-0.5 font-bold tracking-widest">
                {isSimulating
                  ? `RUNNING (x${(1 / Math.max(0.3, stats.extendTimeSec)).toFixed(1)}Hz)`
                  : "CONSOLE READY"}
              </span>
            </div>

            {/* Dual Visualizer Grid (Gauge + Cylinder Blueprint side-by-side on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2 pb-4 relative z-10">
              {/* 1. Pressure Dial Gauge (md:col-span-5) */}
              <div className="md:col-span-5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-4">
                <svg
                  width="170"
                  height="135"
                  viewBox="0 0 220 150"
                  className="drop-shadow-[0_0_12px_rgba(255,190,0,0.15)] overflow-visible"
                >
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
                  <text
                    x="20"
                    y="115"
                    fill="rgba(255,255,255,0.3)"
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    0
                  </text>
                  <text
                    x="110"
                    y="20"
                    fill="rgba(255,255,255,0.3)"
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    200
                  </text>
                  <text
                    x="200"
                    y="115"
                    fill="rgba(255,255,255,0.3)"
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    400
                  </text>

                  <text
                    x="110"
                    y="78"
                    fill="white"
                    fontSize="30"
                    fontWeight="900"
                    fontFamily="monospace"
                    textAnchor="middle"
                    className="tracking-tight select-none"
                  >
                    {values.pressure}
                  </text>
                  <text
                    x="110"
                    y="93"
                    fill="rgba(255,255,255,0.4)"
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                    letterSpacing="1"
                  >
                    BAR PRESSURE
                  </text>

                  {/* Gauge Needle */}
                  <g transform={`translate(110, 110)`}>
                    <motion.g
                      animate={{ rotate: gaugeRotation }}
                      style={{ transformOrigin: "0px 0px" }}
                      transition={{
                        type: "spring",
                        stiffness: 85,
                        damping: 14,
                        mass: 0.7,
                      }}
                    >
                      <circle
                        cx="0"
                        cy="0"
                        r="80"
                        fill="none"
                        opacity="0"
                        pointerEvents="none"
                      />
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
                    <circle
                      cx="0"
                      cy="0"
                      r="9"
                      fill="#0B0F19"
                      stroke="#FFBE00"
                      strokeWidth="2.5"
                    />
                  </g>

                  <defs>
                    <linearGradient
                      id="normal-grad"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* 2. Interactive SVG Cylinder Blueprint Simulator (md:col-span-7) */}
              <div className="md:col-span-7 flex flex-col items-center justify-center">
                <div className="w-full max-w-[270px] aspect-[320/140] relative bg-black/40 border border-white/5 rounded-2xl p-1.5 overflow-hidden">
                  {/* Engineering gridlines */}
                  <svg
                    viewBox="0 0 320 140"
                    className="w-full h-full select-none overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id="high-press-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#FF6B35"
                          stopOpacity="0.5"
                        />
                        <stop
                          offset="100%"
                          stopColor="#FFBE00"
                          stopOpacity="0.2"
                        />
                      </linearGradient>
                      <linearGradient
                        id="low-press-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#3B82F6"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="#10B981"
                          stopOpacity="0.15"
                        />
                      </linearGradient>
                      <linearGradient
                        id="idle-press-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#1E293B"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="#0B0F19"
                          stopOpacity="0.05"
                        />
                      </linearGradient>
                      <linearGradient
                        id="piston-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#64748B" />
                        <stop offset="50%" stopColor="#94A3B8" />
                        <stop offset="100%" stopColor="#475569" />
                      </linearGradient>
                      <linearGradient
                        id="rod-grad"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#CBD5E1" />
                        <stop offset="30%" stopColor="#F8FAFC" />
                        <stop offset="70%" stopColor="#94A3B8" />
                        <stop offset="100%" stopColor="#475569" />
                      </linearGradient>
                      <linearGradient
                        id="metal-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#475569" />
                        <stop offset="50%" stopColor="#64748B" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                    </defs>

                    {/* Blueprint Grid Lines */}
                    <line
                      x1="0"
                      y1="35"
                      x2="320"
                      y2="35"
                      stroke="rgba(255,255,255,0.02)"
                      strokeDasharray="2 2"
                    />
                    <line
                      x1="0"
                      y1="65"
                      x2="320"
                      y2="65"
                      stroke="rgba(255,255,255,0.04)"
                      strokeDasharray="3 3"
                    />
                    <line
                      x1="0"
                      y1="95"
                      x2="320"
                      y2="95"
                      stroke="rgba(255,255,255,0.02)"
                      strokeDasharray="2 2"
                    />
                    <line
                      x1="35"
                      y1="0"
                      x2="35"
                      y2="140"
                      stroke="rgba(255,255,255,0.02)"
                      strokeDasharray="2 2"
                    />
                    <line
                      x1="120"
                      y1="0"
                      x2="120"
                      y2="140"
                      stroke="rgba(255,255,255,0.02)"
                      strokeDasharray="2 2"
                    />
                    <line
                      x1="200"
                      y1="0"
                      x2="200"
                      y2="140"
                      stroke="rgba(255,255,255,0.02)"
                      strokeDasharray="2 2"
                    />

                    {/* 1. Cap End Clevis Mount */}
                    <circle
                      cx="20"
                      cy={cylinderDims.centerY}
                      r="9"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="20"
                      cy={cylinderDims.centerY}
                      r="4.5"
                      fill="#0B0F19"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="29"
                      y={cylinderDims.centerY - 5}
                      width="6"
                      height="10"
                      fill="url(#metal-grad)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="0.5"
                    />

                    {/* 2. Cap End Cylinder Cap (Rear cap) */}
                    <rect
                      x={cylinderDims.barrelX}
                      y={
                        cylinderDims.centerY - cylinderDims.barrelHeight / 2 - 2
                      }
                      width={cylinderDims.endCapWidth}
                      height={cylinderDims.barrelHeight + 4}
                      rx="1"
                      fill="url(#metal-grad)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="0.5"
                    />

                    {/* 3. High/Low Pressure Oil Chamber (Cap end - Left of piston) */}
                    <rect
                      x={cylinderDims.barrelX + cylinderDims.endCapWidth}
                      y={
                        cylinderDims.centerY - cylinderDims.barrelHeight / 2 + 1
                      }
                      width={Math.max(
                        0,
                        cylinderDims.pistonX -
                          (cylinderDims.barrelX + cylinderDims.endCapWidth)
                      )}
                      height={cylinderDims.barrelHeight - 2}
                      fill={
                        isSimulating
                          ? direction > 0
                            ? "url(#high-press-grad)"
                            : "url(#low-press-grad)"
                          : "url(#idle-press-grad)"
                      }
                    />

                    {/* 4. High/Low Pressure Oil Chamber (Rod end - Right of piston) */}
                    <rect
                      x={cylinderDims.pistonX + cylinderDims.pistonWidth}
                      y={
                        cylinderDims.centerY - cylinderDims.barrelHeight / 2 + 1
                      }
                      width={Math.max(
                        0,
                        cylinderDims.barrelX +
                          cylinderDims.barrelWidth -
                          (cylinderDims.pistonX + cylinderDims.pistonWidth)
                      )}
                      height={cylinderDims.barrelHeight - 2}
                      fill={
                        isSimulating
                          ? direction < 0
                            ? "url(#high-press-grad)"
                            : "url(#low-press-grad)"
                          : "url(#idle-press-grad)"
                      }
                    />

                    {/* 5. Cylinder Barrel Tube Border */}
                    <rect
                      x={cylinderDims.barrelX + cylinderDims.endCapWidth}
                      y={cylinderDims.centerY - cylinderDims.barrelHeight / 2}
                      width={
                        cylinderDims.barrelWidth - cylinderDims.endCapWidth
                      }
                      height={cylinderDims.barrelHeight}
                      fill="none"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1.5"
                    />

                    {/* 6. Piston Rod Assembly (Slides) */}
                    <rect
                      x={cylinderDims.pistonX + cylinderDims.pistonWidth}
                      y={cylinderDims.centerY - cylinderDims.rodHeight / 2}
                      width={Math.max(
                        0,
                        cylinderDims.rodTipX -
                          (cylinderDims.pistonX + cylinderDims.pistonWidth)
                      )}
                      height={cylinderDims.rodHeight}
                      fill="url(#rod-grad)"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.5"
                    />

                    {/* 7. Piston head (Inside barrel) */}
                    <rect
                      x={cylinderDims.pistonX}
                      y={
                        cylinderDims.centerY - cylinderDims.barrelHeight / 2 + 1
                      }
                      width={cylinderDims.pistonWidth}
                      height={cylinderDims.barrelHeight - 2}
                      fill="url(#piston-grad)"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="0.75"
                      rx="0.5"
                    />
                    {/* Piston Wear rings */}
                    <rect
                      x={cylinderDims.pistonX + 3}
                      y={
                        cylinderDims.centerY - cylinderDims.barrelHeight / 2 + 1
                      }
                      width="4"
                      height="2"
                      fill="#1e293b"
                    />
                    <rect
                      x={cylinderDims.pistonX + 3}
                      y={
                        cylinderDims.centerY + cylinderDims.barrelHeight / 2 - 3
                      }
                      width="4"
                      height="2"
                      fill="#1e293b"
                    />

                    {/* 8. Gland/Rod End Cap (Front guide) */}
                    <rect
                      x={cylinderDims.barrelX + cylinderDims.barrelWidth}
                      y={
                        cylinderDims.centerY - cylinderDims.barrelHeight / 2 - 2
                      }
                      width={cylinderDims.endCapWidth + 2}
                      height={cylinderDims.barrelHeight + 4}
                      rx="1"
                      fill="url(#metal-grad)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="0.5"
                    />

                    {/* 9. Rod End Eye Clevis Mount */}
                    <circle
                      cx={cylinderDims.rodTipX + 8}
                      cy={cylinderDims.centerY}
                      r="8"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx={cylinderDims.rodTipX + 8}
                      cy={cylinderDims.centerY}
                      r="3.5"
                      fill="#0B0F19"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.5"
                    />
                    <rect
                      x={cylinderDims.rodTipX}
                      y={cylinderDims.centerY - 4}
                      width="5"
                      height="8"
                      fill="url(#rod-grad)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="0.5"
                    />

                    {/* 10. Oil Ports */}
                    {/* Port A (Cap End) */}
                    <rect
                      x={cylinderDims.barrelX + cylinderDims.endCapWidth + 8}
                      y={
                        cylinderDims.centerY - cylinderDims.barrelHeight / 2 - 5
                      }
                      width="6"
                      height="5"
                      fill="url(#metal-grad)"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.5"
                    />
                    {/* Port B (Rod End) */}
                    <rect
                      x={cylinderDims.barrelX + cylinderDims.barrelWidth - 14}
                      y={
                        cylinderDims.centerY - cylinderDims.barrelHeight / 2 - 5
                      }
                      width="6"
                      height="5"
                      fill="url(#metal-grad)"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.5"
                    />

                    {/* Flow Arrows in Ports */}
                    {isSimulating && (
                      <>
                        {direction > 0 ? (
                          /* Extending: Oil in Port A, Oil out Port B */
                          <>
                            <path
                              d="M 52 35 L 52 40 M 50 38 L 52 40 L 54 38"
                              stroke="#FF6B35"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M 124 40 L 124 35 M 122 37 L 124 35 L 126 37"
                              stroke="#3B82F6"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </>
                        ) : (
                          /* Retracting: Oil out Port A, Oil in Port B */
                          <>
                            <path
                              d="M 52 40 L 52 35 M 50 37 L 52 35 L 54 37"
                              stroke="#3B82F6"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M 124 35 L 124 40 M 122 38 L 124 40 L 126 38"
                              stroke="#FF6B35"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </>
                        )}
                      </>
                    )}

                    {/* 11. Dimension Annotation Lines */}
                    {/* Bore Dimension (Left) */}
                    <line
                      x1="14"
                      y1={cylinderDims.centerY - cylinderDims.barrelHeight / 2}
                      x2="14"
                      y2={cylinderDims.centerY + cylinderDims.barrelHeight / 2}
                      stroke="rgba(255,190,0,0.4)"
                      strokeWidth="0.75"
                      strokeDasharray="1.5 1.5"
                    />
                    <line
                      x1="11"
                      y1={cylinderDims.centerY - cylinderDims.barrelHeight / 2}
                      x2="17"
                      y2={cylinderDims.centerY - cylinderDims.barrelHeight / 2}
                      stroke="rgba(255,190,0,0.4)"
                      strokeWidth="0.75"
                    />
                    <line
                      x1="11"
                      y1={cylinderDims.centerY + cylinderDims.barrelHeight / 2}
                      x2="17"
                      y2={cylinderDims.centerY + cylinderDims.barrelHeight / 2}
                      stroke="rgba(255,190,0,0.4)"
                      strokeWidth="0.75"
                    />
                    <text
                      x="8"
                      y={cylinderDims.centerY + 3}
                      fill="#FFBE00"
                      fontSize="7.5"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="end"
                      opacity="0.8"
                    >
                      D:{values.bore}
                    </text>

                    {/* Rod Dimension (Right) */}
                    <line
                      x1={cylinderDims.rodTipX + 22}
                      y1={cylinderDims.centerY - cylinderDims.rodHeight / 2}
                      x2={cylinderDims.rodTipX + 22}
                      y2={cylinderDims.centerY + cylinderDims.rodHeight / 2}
                      stroke="rgba(255,190,0,0.4)"
                      strokeWidth="0.75"
                      strokeDasharray="1.5 1.5"
                    />
                    <line
                      x1={cylinderDims.rodTipX + 19}
                      y1={cylinderDims.centerY - cylinderDims.rodHeight / 2}
                      x2={cylinderDims.rodTipX + 25}
                      y2={cylinderDims.centerY - cylinderDims.rodHeight / 2}
                      stroke="rgba(255,190,0,0.4)"
                      strokeWidth="0.75"
                    />
                    <line
                      x1={cylinderDims.rodTipX + 19}
                      y1={cylinderDims.centerY + cylinderDims.rodHeight / 2}
                      x2={cylinderDims.rodTipX + 25}
                      y2={cylinderDims.centerY + cylinderDims.rodHeight / 2}
                      stroke="rgba(255,190,0,0.4)"
                      strokeWidth="0.75"
                    />
                    <text
                      x={cylinderDims.rodTipX + 27}
                      y={cylinderDims.centerY + 3}
                      fill="#FFBE00"
                      fontSize="7.5"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="start"
                      opacity="0.8"
                    >
                      d:{values.rod}
                    </text>

                    {/* Stroke Dimension (Bottom) */}
                    <line
                      x1={cylinderDims.barrelX + cylinderDims.endCapWidth}
                      y1="120"
                      x2={cylinderDims.barrelX + cylinderDims.barrelWidth}
                      y2="120"
                      stroke="rgba(255,190,0,0.4)"
                      strokeWidth="0.75"
                      strokeDasharray="1.5 1.5"
                    />
                    <line
                      x1={cylinderDims.barrelX + cylinderDims.endCapWidth}
                      y1="117"
                      x2={cylinderDims.barrelX + cylinderDims.endCapWidth}
                      y2="123"
                      stroke="rgba(255,190,0,0.4)"
                      strokeWidth="0.75"
                    />
                    <line
                      x1={cylinderDims.barrelX + cylinderDims.barrelWidth}
                      y1="117"
                      x2={cylinderDims.barrelX + cylinderDims.barrelWidth}
                      y2="123"
                      stroke="rgba(255,190,0,0.4)"
                      strokeWidth="0.75"
                    />
                    <text
                      x={cylinderDims.barrelX + cylinderDims.barrelWidth / 2}
                      y="131"
                      fill="#FFBE00"
                      fontSize="7.5"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                      opacity="0.8"
                    >
                      S:{values.stroke}mm
                    </text>
                  </svg>

                  {/* HUD Overlays */}
                  <div className="absolute top-2 left-2 bg-[#0B0F19]/90 border border-white/5 rounded px-1.5 py-0.5 font-mono text-[8px] text-slate-400 select-none">
                    EXT: {(extension * 100).toFixed(0)}%
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#0B0F19]/90 border border-white/5 rounded px-1.5 py-0.5 font-mono text-[8px] text-slate-400 select-none">
                    {isSimulating
                      ? direction > 0
                        ? "STATE: EXPAND"
                        : "STATE: RETRACT"
                      : "STATE: HOLD"}
                  </div>
                </div>
              </div>
            </div>

            {/* Simulation Controls (Play/Pause Auto-cycle and Manual Slider fader) */}
            <div className="mt-2 pt-4 border-t border-white/10 flex flex-col gap-4 relative z-10">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                {/* Auto-Cycle system toggle */}
                <button
                  onClick={() => {
                    setIsSimulating(!isSimulating);
                    if (!isSimulating) setDirection(1); // start in extending direction
                  }}
                  className={`flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-mono font-black tracking-wide transition-all border cursor-pointer ${
                    isSimulating
                      ? "bg-[#FF6B35] border-[#FF6B35] text-white shadow-[0_0_15px_rgba(255,107,53,0.35)]"
                      : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  {isSimulating ? (
                    <>
                      <Square className="h-4.5 w-4.5 fill-white text-white" />
                      <span>STOP AUTO-CYCLE</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4.5 w-4.5 fill-white text-white" />
                      <span>RUN AUTO-CYCLE</span>
                    </>
                  )}
                </button>

                {/* Manual Position inspection slider */}
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide whitespace-nowrap">
                    Manual Pos
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={(extension * 100).toFixed(0)}
                    disabled={isSimulating}
                    onChange={(e) =>
                      setExtension(parseFloat(e.target.value) / 100)
                    }
                    className="flex-1 h-1 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                      background: `linear-gradient(to right, #10B981 0%, #10B981 ${(extension * 100).toFixed(0)}%, rgba(255, 255, 255, 0.1) ${(extension * 100).toFixed(0)}%, rgba(255, 255, 255, 0.1) 100%)`,
                    }}
                  />
                  <span
                    className={`text-[10px] font-mono font-bold w-10 text-right ${isSimulating ? "text-slate-500" : "text-[#10B981]"}`}
                  >
                    {(extension * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Monospace Statistics Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4 relative z-10">
              {/* Push Force Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between hover:bg-white/10 transition-colors duration-200">
                <div className="text-[8px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Cylinder Push Force
                </div>
                <div className="text-xl font-black text-white font-mono leading-none flex items-baseline">
                  {stats.pushForceTons}
                  <span className="text-[10px] text-[#FFBE00] font-bold ml-1">
                    TONS
                  </span>
                </div>
                <div className="text-[7px] font-mono text-slate-500 mt-1.5">
                  F = P × A1 (Extend)
                </div>
              </div>

              {/* Pull Force Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between hover:bg-white/10 transition-colors duration-200">
                <div className="text-[8px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Cylinder Pull Force
                </div>
                <div className="text-xl font-black text-white font-mono leading-none flex items-baseline">
                  {stats.pullForceTons}
                  <span className="text-[10px] text-[#FFBE00] font-bold ml-1">
                    TONS
                  </span>
                </div>
                <div className="text-[7px] font-mono text-slate-500 mt-1.5">
                  F = P × A2 (Retract)
                </div>
              </div>

              {/* Stroke Volume */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between hover:bg-white/10 transition-colors duration-200">
                <div className="text-[8px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Oil Vol. Capacity
                </div>
                <div className="text-xl font-black text-white font-mono leading-none flex items-baseline">
                  {stats.volumeLiters}
                  <span className="text-[10px] text-[#FFBE00] font-bold ml-1">
                    LTR
                  </span>
                </div>
                <div className="text-[7px] font-mono text-slate-500 mt-1.5">
                  V = A1 × S (Displacement)
                </div>
              </div>

              {/* Extension Time */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between hover:bg-white/10 transition-colors duration-200">
                <div className="text-[8px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Extend Cycle Time
                </div>
                <div className="text-xl font-black text-white font-mono leading-none flex items-baseline">
                  {stats.extendTimeSec}
                  <span className="text-[10px] text-[#FFBE00] font-bold ml-1">
                    SEC
                  </span>
                </div>
                <div className="text-[7px] font-mono text-slate-500 mt-1.5">
                  t = V / Q (Extend speed)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
