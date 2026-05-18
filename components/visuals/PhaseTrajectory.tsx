// Phase-gated trajectory — three phases with milestone gates between them.

export default function PhaseTrajectory() {
  return (
    <svg
      viewBox="0 0 1000 320"
      style={{ width: "100%", height: "auto" }}
      role="img"
      aria-label="Phase-gated trajectory: Year 1 £3m (Foundation, 6 verticals), conditional on M3/M6/M9/M12 milestones leading to Year 2 £3.5m (Scale, ~30 verticals), conditional on Year 2 milestones leading to Year 3 £3.5m (Maturity, ~100 verticals)."
    >
      <defs>
        <linearGradient id="phase-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00FFBC" stopOpacity="0.0" />
          <stop offset="50%" stopColor="#00FFBC" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00FFBC" stopOpacity="0.0" />
        </linearGradient>
        <marker
          id="phase-arrow"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" fill="rgba(27,47,60,0.4)" />
        </marker>
      </defs>

      {/* Phase 1 — Year 1 */}
      <g>
        <rect
          x="40"
          y="60"
          width="260"
          height="180"
          rx="12"
          fill="white"
          stroke="#00FFBC"
          strokeWidth="2.5"
        />
        <text
          x="170"
          y="92"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="#007A5E"
          style={{ letterSpacing: 1.5 }}
        >
          PHASE 1 · FOUNDATION
        </text>
        <text
          x="170"
          y="125"
          textAnchor="middle"
          fontSize="42"
          fontWeight="800"
          fill="#1B2F3C"
          style={{ letterSpacing: -1 }}
        >
          £3m
        </text>
        <text
          x="170"
          y="148"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="rgba(27,47,60,0.7)"
        >
          Year 1
        </text>
        <line
          x1="60"
          y1="170"
          x2="280"
          y2="170"
          stroke="rgba(27,47,60,0.1)"
        />
        <text x="60" y="190" fontSize="11" fontWeight="600" fill="#1B2F3C">
          6 founding verticals
        </text>
        <text x="60" y="208" fontSize="11" fill="rgba(27,47,60,0.65)">
          3 named PD partnerships
        </text>
        <text x="60" y="225" fontSize="11" fill="rgba(27,47,60,0.65)">
          30+ open-source skills
        </text>
      </g>

      {/* Gate 1 → 2 */}
      <g>
        <rect
          x="330"
          y="110"
          width="80"
          height="80"
          rx="8"
          fill="#0E1A23"
        />
        <text
          x="370"
          y="135"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="rgba(0,255,188,0.7)"
          style={{ letterSpacing: 1 }}
        >
          GATE
        </text>
        <text
          x="370"
          y="158"
          textAnchor="middle"
          fontSize="16"
          fontWeight="800"
          fill="#00FFBC"
        >
          M3 · M6
        </text>
        <text
          x="370"
          y="178"
          textAnchor="middle"
          fontSize="16"
          fontWeight="800"
          fill="#00FFBC"
        >
          M9 · M12
        </text>
        <line
          x1="300"
          y1="150"
          x2="330"
          y2="150"
          stroke="rgba(27,47,60,0.4)"
          strokeWidth="2"
          markerEnd="url(#phase-arrow)"
        />
        <line
          x1="410"
          y1="150"
          x2="440"
          y2="150"
          stroke="rgba(27,47,60,0.4)"
          strokeWidth="2"
          markerEnd="url(#phase-arrow)"
        />
        <text
          x="370"
          y="220"
          textAnchor="middle"
          fontSize="9.5"
          fill="rgba(0, 122, 94, 0.85)"
          fontWeight="600"
        >
          ARIA can stop
        </text>
      </g>

      {/* Phase 2 — Year 2 */}
      <g>
        <rect
          x="450"
          y="60"
          width="220"
          height="180"
          rx="12"
          fill="white"
          stroke="rgba(0,177,255,0.7)"
          strokeWidth="2"
        />
        <text
          x="560"
          y="92"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="#0080BA"
          style={{ letterSpacing: 1.5 }}
        >
          PHASE 2 · SCALE
        </text>
        <text
          x="560"
          y="125"
          textAnchor="middle"
          fontSize="38"
          fontWeight="800"
          fill="#1B2F3C"
          style={{ letterSpacing: -1 }}
        >
          £3.5m
        </text>
        <text
          x="560"
          y="148"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="rgba(27,47,60,0.7)"
        >
          Year 2 · conditional
        </text>
        <line x1="470" y1="170" x2="650" y2="170" stroke="rgba(27,47,60,0.1)" />
        <text x="470" y="190" fontSize="11" fontWeight="600" fill="#1B2F3C">
          ~30 verticals
        </text>
        <text x="470" y="208" fontSize="11" fill="rgba(27,47,60,0.65)">
          Second fellowship cohort
        </text>
        <text x="470" y="225" fontSize="11" fill="rgba(27,47,60,0.65)">
          DSIT autonomous-labs integration
        </text>
      </g>

      {/* Gate 2 → 3 */}
      <g>
        <rect
          x="690"
          y="110"
          width="60"
          height="80"
          rx="8"
          fill="#0E1A23"
        />
        <text
          x="720"
          y="135"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="rgba(0,255,188,0.7)"
          style={{ letterSpacing: 1 }}
        >
          GATE
        </text>
        <text
          x="720"
          y="160"
          textAnchor="middle"
          fontSize="14"
          fontWeight="800"
          fill="#00FFBC"
        >
          Year 2
        </text>
        <text
          x="720"
          y="178"
          textAnchor="middle"
          fontSize="10"
          fill="rgba(255,255,255,0.7)"
        >
          review
        </text>
        <line
          x1="670"
          y1="150"
          x2="690"
          y2="150"
          stroke="rgba(27,47,60,0.4)"
          strokeWidth="2"
          markerEnd="url(#phase-arrow)"
        />
        <line
          x1="750"
          y1="150"
          x2="770"
          y2="150"
          stroke="rgba(27,47,60,0.4)"
          strokeWidth="2"
          markerEnd="url(#phase-arrow)"
        />
      </g>

      {/* Phase 3 — Year 3 */}
      <g>
        <rect
          x="780"
          y="60"
          width="180"
          height="180"
          rx="12"
          fill="white"
          stroke="rgba(27,47,60,0.4)"
          strokeWidth="2"
        />
        <text
          x="870"
          y="92"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="#1B2F3C"
          style={{ letterSpacing: 1.5 }}
        >
          PHASE 3 · MATURITY
        </text>
        <text
          x="870"
          y="125"
          textAnchor="middle"
          fontSize="38"
          fontWeight="800"
          fill="#1B2F3C"
          style={{ letterSpacing: -1 }}
        >
          £3.5m
        </text>
        <text
          x="870"
          y="148"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="rgba(27,47,60,0.7)"
        >
          Year 3 · conditional
        </text>
        <line x1="800" y1="170" x2="940" y2="170" stroke="rgba(27,47,60,0.1)" />
        <text x="800" y="190" fontSize="11" fontWeight="600" fill="#1B2F3C">
          ~100 verticals
        </text>
        <text x="800" y="208" fontSize="11" fill="rgba(27,47,60,0.65)">
          Open the platform
        </text>
        <text x="800" y="225" fontSize="11" fill="rgba(27,47,60,0.65)">
          UK ecosystem-wide
        </text>
      </g>

      {/* Total band */}
      <g>
        <rect x="40" y="270" width="920" height="36" rx="18" fill="url(#phase-grad-1)" />
        <text
          x="500"
          y="293"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#007A5E"
        >
          £10m total · phase-gated · ARIA pulls at any gate · no tail risk
        </text>
      </g>
    </svg>
  );
}
