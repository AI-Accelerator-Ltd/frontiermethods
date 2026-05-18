// Highest Tide governance — five lenses arranged around a central use case.
// Each lens shows a colour-coded RAG status (G / A / R).

type LensState = "G" | "A" | "R";

const LENSES: Array<{ name: string; state: LensState; sub: string }> = [
  { name: "Data confidentiality", state: "G", sub: "GDPR · UK DPA" },
  { name: "Ethical risk", state: "G", sub: "EU AI Act · ISO 42001" },
  { name: "Sustainability", state: "A", sub: "BSI PAS 440" },
  { name: "IP", state: "G", sub: "No foreground claim" },
  { name: "Trusted Research", state: "G", sub: "UKRI framework" },
];

const STATE_COLOUR: Record<LensState, string> = {
  G: "#007A5E",
  A: "#A06B00",
  R: "#A93232",
};

const STATE_BG: Record<LensState, string> = {
  G: "rgba(0, 122, 94, 0.10)",
  A: "rgba(245, 158, 11, 0.10)",
  R: "rgba(217, 75, 75, 0.10)",
};

export default function HighestTideWheel({ size = 480 }: { size?: number }) {
  const cx = 250;
  const cy = 250;
  const r = 165; // distance from centre to lens label
  const lensR = 55; // radius of each lens circle

  return (
    <svg
      viewBox="0 0 500 500"
      style={{ width: "100%", height: "auto", maxWidth: size }}
      role="img"
      aria-label="Highest Tide governance — five lenses arranged radially around a central use case. Each lens scores RAG; the lens with the highest tide sets the route."
    >
      <defs>
        <radialGradient id="ht-centre">
          <stop offset="0%" stopColor="#1B2F3C" />
          <stop offset="100%" stopColor="#0E1A23" />
        </radialGradient>
      </defs>

      {/* Centre — use case */}
      <circle
        cx={cx}
        cy={cy}
        r="60"
        fill="url(#ht-centre)"
        stroke="rgba(0,255,188,0.4)"
        strokeWidth="2"
      />
      <text
        x={cx}
        y={cy - 12}
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill="rgba(255,255,255,0.4)"
        style={{ letterSpacing: 1.5, textTransform: "uppercase" }}
      >
        Use case
      </text>
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="white"
      >
        Lab-notebook
      </text>
      <text
        x={cx}
        y={cy + 22}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="white"
      >
        AI assistant
      </text>

      {/* Five lenses positioned around the centre */}
      {LENSES.map((lens, i) => {
        const angle = (i / LENSES.length) * 2 * Math.PI - Math.PI / 2;
        const lx = cx + r * Math.cos(angle);
        const ly = cy + r * Math.sin(angle);
        const connectorX = cx + (r - lensR) * Math.cos(angle);
        const connectorY = cy + (r - lensR) * Math.sin(angle);
        const connectorStartX = cx + 60 * Math.cos(angle);
        const connectorStartY = cy + 60 * Math.sin(angle);

        return (
          <g key={lens.name}>
            {/* Connector */}
            <line
              x1={connectorStartX}
              y1={connectorStartY}
              x2={connectorX}
              y2={connectorY}
              stroke={STATE_COLOUR[lens.state]}
              strokeWidth="1.5"
              opacity="0.4"
              strokeDasharray="3 3"
            />
            {/* Lens circle */}
            <circle
              cx={lx}
              cy={ly}
              r={lensR}
              fill={STATE_BG[lens.state]}
              stroke={STATE_COLOUR[lens.state]}
              strokeWidth="2"
            />
            {/* RAG indicator dot */}
            <circle
              cx={lx}
              cy={ly - 28}
              r="5"
              fill={STATE_COLOUR[lens.state]}
            />
            {/* Lens name */}
            <text
              x={lx}
              y={ly - 6}
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={STATE_COLOUR[lens.state]}
            >
              {lens.name.split(" ").slice(0, 2).join(" ")}
            </text>
            {lens.name.split(" ").length > 2 && (
              <text
                x={lx}
                y={ly + 8}
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill={STATE_COLOUR[lens.state]}
              >
                {lens.name.split(" ").slice(2).join(" ")}
              </text>
            )}
            {/* Sub label */}
            <text
              x={lx}
              y={ly + 26}
              textAnchor="middle"
              fontSize="8.5"
              fill={STATE_COLOUR[lens.state]}
              opacity="0.7"
            >
              {lens.sub}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <g transform="translate(20, 460)">
        <circle cx="6" cy="6" r="5" fill="#007A5E" />
        <text x="16" y="10" fontSize="10" fill="#5A6E7A">
          Auto-approve
        </text>
        <circle cx="100" cy="6" r="5" fill="#A06B00" />
        <text x="110" y="10" fontSize="10" fill="#5A6E7A">
          Review needed
        </text>
        <circle cx="208" cy="6" r="5" fill="#A93232" />
        <text x="218" y="10" fontSize="10" fill="#5A6E7A">
          Escalate
        </text>
      </g>

      <text
        x="400"
        y="470"
        fontSize="9.5"
        fill="#5A6E7A"
        textAnchor="end"
        fontStyle="italic"
      >
        Highest tide sets the route
      </text>
    </svg>
  );
}
