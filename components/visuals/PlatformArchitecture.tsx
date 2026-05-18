// Platform architecture — the four data-object types and how they relate,
// with the surrounding operational components.

export default function PlatformArchitecture() {
  return (
    <svg
      viewBox="0 0 800 460"
      style={{ width: "100%", height: "auto" }}
      role="img"
      aria-label="Platform architecture: techniques are described by use cases, operationalised by skills, and governed by lenses. Around them sit fellows, programme directors, and the cross-pollination event series."
    >
      <defs>
        <marker
          id="arch-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 z" fill="rgba(27,47,60,0.4)" />
        </marker>
      </defs>

      {/* Centre — Technique */}
      <g>
        <circle
          cx="400"
          cy="230"
          r="78"
          fill="#0E1A23"
          stroke="#00FFBC"
          strokeWidth="2"
        />
        <text
          x="400"
          y="218"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="700"
          fill="rgba(0,255,188,0.7)"
          style={{ letterSpacing: 1.5 }}
        >
          CENTRE
        </text>
        <text
          x="400"
          y="240"
          textAnchor="middle"
          fontSize="22"
          fontWeight="800"
          fill="white"
        >
          Technique
        </text>
        <text
          x="400"
          y="258"
          textAnchor="middle"
          fontSize="10"
          fill="rgba(255,255,255,0.5)"
        >
          The teaching unit
        </text>
      </g>

      {/* Use Cases — left */}
      <g>
        <rect
          x="100"
          y="180"
          width="160"
          height="100"
          rx="10"
          fill="white"
          stroke="rgba(0,177,255,0.5)"
          strokeWidth="1.5"
        />
        <text
          x="180"
          y="210"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="700"
          fill="#0080BA"
          style={{ letterSpacing: 1.5 }}
        >
          MANY
        </text>
        <text
          x="180"
          y="234"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill="#1B2F3C"
        >
          Use cases
        </text>
        <text
          x="180"
          y="253"
          textAnchor="middle"
          fontSize="9"
          fill="rgba(27,47,60,0.55)"
        >
          Redacted by default
        </text>
        <text
          x="180"
          y="266"
          textAnchor="middle"
          fontSize="9"
          fill="rgba(27,47,60,0.55)"
        >
          Real applied instances
        </text>
      </g>

      {/* Skills — right */}
      <g>
        <rect
          x="540"
          y="180"
          width="160"
          height="100"
          rx="10"
          fill="white"
          stroke="rgba(0,177,255,0.5)"
          strokeWidth="1.5"
        />
        <text
          x="620"
          y="210"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="700"
          fill="#0080BA"
          style={{ letterSpacing: 1.5 }}
        >
          MANY
        </text>
        <text
          x="620"
          y="234"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill="#1B2F3C"
        >
          Skills
        </text>
        <text
          x="620"
          y="253"
          textAnchor="middle"
          fontSize="9"
          fill="rgba(27,47,60,0.55)"
        >
          MIT-licensed, open-source
        </text>
        <text
          x="620"
          y="266"
          textAnchor="middle"
          fontSize="9"
          fill="rgba(27,47,60,0.55)"
        >
          With eval rigs
        </text>
      </g>

      {/* Lenses — top */}
      <g>
        <rect
          x="320"
          y="50"
          width="160"
          height="80"
          rx="10"
          fill="white"
          stroke="rgba(0, 122, 94, 0.6)"
          strokeWidth="1.5"
        />
        <text
          x="400"
          y="80"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="700"
          fill="#007A5E"
          style={{ letterSpacing: 1.5 }}
        >
          GOVERNANCE
        </text>
        <text
          x="400"
          y="103"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill="#1B2F3C"
        >
          5 lenses
        </text>
        <text
          x="400"
          y="120"
          textAnchor="middle"
          fontSize="9"
          fill="rgba(27,47,60,0.55)"
        >
          Highest Tide
        </text>
      </g>

      {/* Verticals — bottom */}
      <g>
        <rect
          x="320"
          y="330"
          width="160"
          height="80"
          rx="10"
          fill="white"
          stroke="rgba(27,47,60,0.3)"
          strokeWidth="1.5"
        />
        <text
          x="400"
          y="360"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="700"
          fill="rgba(27,47,60,0.7)"
          style={{ letterSpacing: 1.5 }}
        >
          CONTAINER
        </text>
        <text
          x="400"
          y="383"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill="#1B2F3C"
        >
          Verticals
        </text>
        <text
          x="400"
          y="400"
          textAnchor="middle"
          fontSize="9"
          fill="rgba(27,47,60,0.55)"
        >
          6 founding · 100+ at scale
        </text>
      </g>

      {/* Relationship lines */}
      <line
        x1="260"
        y1="230"
        x2="322"
        y2="230"
        stroke="rgba(27,47,60,0.3)"
        strokeWidth="1.5"
        markerEnd="url(#arch-arrow)"
      />
      <text
        x="290"
        y="222"
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fill="rgba(27,47,60,0.55)"
      >
        instantiates
      </text>

      <line
        x1="478"
        y1="230"
        x2="540"
        y2="230"
        stroke="rgba(27,47,60,0.3)"
        strokeWidth="1.5"
        markerEnd="url(#arch-arrow)"
      />
      <text
        x="510"
        y="222"
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fill="rgba(27,47,60,0.55)"
      >
        operationalised by
      </text>

      <line
        x1="400"
        y1="130"
        x2="400"
        y2="152"
        stroke="rgba(0, 122, 94, 0.5)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        markerEnd="url(#arch-arrow)"
      />
      <text
        x="490"
        y="148"
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fill="#007A5E"
      >
        scored against
      </text>

      <line
        x1="400"
        y1="308"
        x2="400"
        y2="330"
        stroke="rgba(27,47,60,0.3)"
        strokeWidth="1.5"
        markerEnd="url(#arch-arrow)"
      />
      <text
        x="475"
        y="324"
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fill="rgba(27,47,60,0.55)"
      >
        organised into
      </text>

      {/* Corner labels: surrounding people */}
      <g>
        <text
          x="40"
          y="50"
          fontSize="9.5"
          fontWeight="700"
          fill="rgba(27,47,60,0.5)"
          style={{ letterSpacing: 1.5 }}
        >
          PEOPLE LAYER
        </text>
      </g>

      {/* Fellows label - bottom-left */}
      <g>
        <text
          x="40"
          y="395"
          fontSize="10"
          fontWeight="700"
          fill="#1B2F3C"
        >
          AI Practitioner Fellows
        </text>
        <text
          x="40"
          y="408"
          fontSize="9"
          fill="rgba(27,47,60,0.55)"
        >
          embedded in Creator teams
        </text>
        <line
          x1="40"
          y1="416"
          x2="170"
          y2="416"
          stroke="rgba(27,47,60,0.2)"
        />
      </g>

      {/* PD partnerships label */}
      <g>
        <text
          x="630"
          y="50"
          fontSize="10"
          fontWeight="700"
          fill="#1B2F3C"
          textAnchor="end"
        >
          Programme Director
        </text>
        <text
          x="630"
          y="63"
          fontSize="9"
          fill="rgba(27,47,60,0.55)"
          textAnchor="end"
        >
          partnerships · Bramhavar,
        </text>
        <text
          x="630"
          y="76"
          fontSize="9"
          fill="rgba(27,47,60,0.55)"
          textAnchor="end"
        >
          Dalrymple, one Cohort 2
        </text>
      </g>

      {/* Cross-pollination events */}
      <g>
        <text
          x="760"
          y="395"
          fontSize="10"
          fontWeight="700"
          fill="#1B2F3C"
          textAnchor="end"
        >
          Cross-pollination events
        </text>
        <text
          x="760"
          y="408"
          fontSize="9"
          fill="rgba(27,47,60,0.55)"
          textAnchor="end"
        >
          4 hybrid events / year
        </text>
        <line
          x1="630"
          y1="416"
          x2="760"
          y2="416"
          stroke="rgba(27,47,60,0.2)"
        />
      </g>

      {/* Caption */}
      <text
        x="400"
        y="445"
        textAnchor="middle"
        fontSize="10"
        fill="rgba(27,47,60,0.5)"
        fontStyle="italic"
      >
        A Technique has many Use Cases, has many Skills, is rated against many Lenses. Use Cases live inside Verticals.
      </text>
    </svg>
  );
}
