// Cross-vertical pollination — the differentiator visual.
// Six vertical columns (research domains), techniques as nodes within,
// and animated arcs showing techniques travelling cross-domain.

type Props = {
  height?: number;
  showLabels?: boolean;
};

const VERTICALS = [
  { id: "nuclear", label: "Nuclear / fusion", x: 90 },
  { id: "biomed", label: "Biomedical / organ-on-chip", x: 230 },
  { id: "drug", label: "Drug discovery", x: 370 },
  { id: "materials", label: "Novel materials", x: 510 },
  { id: "photonics", label: "Photonics / quantum", x: 650 },
  { id: "ai-talent", label: "AI for Science talent", x: 790 },
];

const NODES = [
  { v: "nuclear", y: 110, label: "Radiation modelling" },
  { v: "nuclear", y: 180, label: "Component QA" },
  { v: "biomed", y: 130, label: "Protocol harmonisation" },
  { v: "biomed", y: 220, label: "Image QC" },
  { v: "drug", y: 100, label: "Literature triage" },
  { v: "drug", y: 200, label: "Compound screening" },
  { v: "materials", y: 140, label: "Synthesis routes" },
  { v: "materials", y: 230, label: "Material discovery" },
  { v: "photonics", y: 120, label: "Sensor calibration" },
  { v: "photonics", y: 210, label: "Spectral analysis" },
  { v: "ai-talent", y: 150, label: "Fellow placement" },
];

// Cross-vertical arcs: technique discovered in vertical A, travels to vertical B.
const ARCS = [
  { from: { v: "drug", y: 100 }, to: { v: "materials", y: 140 }, delay: 0 },
  { from: { v: "biomed", y: 130 }, to: { v: "nuclear", y: 180 }, delay: 1.2 },
  { from: { v: "photonics", y: 120 }, to: { v: "biomed", y: 220 }, delay: 2.4 },
  { from: { v: "ai-talent", y: 150 }, to: { v: "drug", y: 200 }, delay: 3.6 },
];

function vx(id: string) {
  return VERTICALS.find((v) => v.id === id)!.x;
}

export default function CrossVerticalDiagram({
  height = 320,
  showLabels = true,
}: Props) {
  return (
    <svg
      viewBox="0 0 880 320"
      style={{ width: "100%", height: "auto", maxHeight: height }}
      role="img"
      aria-label="Cross-vertical pollination — techniques discovered in one research vertical travel to another. The platform makes those jumps deliberate."
    >
      <defs>
        <marker
          id="cv-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 z" fill="#00FFBC" />
        </marker>
        <linearGradient id="cv-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00B1FF" stopOpacity="0.0" />
          <stop offset="50%" stopColor="#00FFBC" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00FFBC" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Background vertical lanes */}
      {VERTICALS.map((v, i) => (
        <g key={v.id}>
          <line
            x1={v.x}
            y1={60}
            x2={v.x}
            y2={280}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          {showLabels && (
            <text
              x={v.x}
              y={50}
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="600"
              fill={i % 2 === 0 ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.4)"}
              style={{ textTransform: "uppercase", letterSpacing: 1 }}
            >
              {v.label}
            </text>
          )}
        </g>
      ))}

      {/* Static technique nodes */}
      {NODES.map((n, i) => (
        <g key={i}>
          <circle
            cx={vx(n.v)}
            cy={n.y}
            r="6"
            fill="#0E1A23"
            stroke="rgba(0,177,255,0.5)"
            strokeWidth="1.5"
          />
          <text
            x={vx(n.v) + 10}
            y={n.y + 3}
            fontSize="8.5"
            fill="rgba(255,255,255,0.35)"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* Animated cross-vertical arcs */}
      {ARCS.map((arc, i) => {
        const x1 = vx(arc.from.v);
        const x2 = vx(arc.to.v);
        const y1 = arc.from.y;
        const y2 = arc.to.y;
        const midX = (x1 + x2) / 2;
        const midY = Math.min(y1, y2) - 35 - Math.abs(x2 - x1) * 0.05;
        const path = `M${x1},${y1} Q${midX},${midY} ${x2},${y2}`;
        return (
          <g key={i}>
            {/* Static faded arc behind */}
            <path
              d={path}
              fill="none"
              stroke="rgba(0,255,188,0.12)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Animated highlight pulse */}
            <path
              d={path}
              fill="none"
              stroke="#00FFBC"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="20 200"
              markerEnd="url(#cv-arrow)"
              style={{
                animation: `cv-flow 5s linear infinite`,
                animationDelay: `${arc.delay}s`,
              }}
            />
            {/* Endpoint pulse */}
            <circle
              cx={x2}
              cy={y2}
              r="6"
              fill="none"
              stroke="#00FFBC"
              strokeWidth="2"
              opacity="0"
              style={{
                animation: `cv-pulse 5s ease-out infinite`,
                animationDelay: `${arc.delay + 1.3}s`,
              }}
            />
          </g>
        );
      })}

      {/* Origin and destination labels */}
      <text
        x={20}
        y={295}
        fontSize="10"
        fontWeight="600"
        fill="#00FFBC"
        style={{ letterSpacing: 0.5 }}
      >
        ↳ Technique from drug-discovery → adopted in materials lab
      </text>

      <style>
        {`
          @keyframes cv-flow {
            0% { stroke-dashoffset: 220; opacity: 0; }
            8% { opacity: 1; }
            45% { opacity: 1; }
            55% { stroke-dashoffset: 0; opacity: 0.9; }
            65% { opacity: 0; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          @keyframes cv-pulse {
            0% { r: 6; opacity: 0; }
            30% { r: 8; opacity: 0.6; }
            60% { r: 18; opacity: 0; }
            100% { r: 18; opacity: 0; }
          }
        `}
      </style>
    </svg>
  );
}
