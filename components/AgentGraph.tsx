export default function AgentGraph() {
  return (
    <svg
      viewBox="0 0 520 400"
      className="w-full h-auto max-w-md mx-auto"
      role="img"
      aria-label="Diagram of an agent pipeline: a query is retrieved, reasoned over in a loop with tool calls, then answered."
    >
      {/* edges */}
      <path
        d="M70 210 C 130 150, 150 120, 190 95"
        stroke="#2A3A4B"
        strokeWidth="2"
        fill="none"
        className="edge-flow"
      />
      <path
        d="M210 90 C 250 100, 280 120, 305 165"
        stroke="#2A3A4B"
        strokeWidth="2"
        fill="none"
        className="edge-flow"
      />
      {/* reasoning <-> tool call loop */}
      <path
        d="M335 215 C 345 250, 345 290, 330 320"
        stroke="#F2A93B"
        strokeWidth="2"
        fill="none"
        className="edge-flow"
        style={{ animationDirection: "reverse" }}
      />
      <path
        d="M310 320 C 280 290, 280 250, 300 218"
        stroke="#F2A93B"
        strokeWidth="2"
        fill="none"
        className="edge-flow"
      />
      <path
        d="M340 195 C 390 160, 420 130, 450 95"
        stroke="#2A3A4B"
        strokeWidth="2"
        fill="none"
        className="edge-flow"
      />

      {/* node: query */}
      <circle cx="58" cy="220" r="20" fill="#16202C" stroke="#8B96A3" strokeWidth="1.5" />
      <text x="58" y="255" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#8B96A3">query</text>

      {/* node: retrieve */}
      <circle cx="200" cy="80" r="22" fill="#16202C" stroke="#4FD1C5" strokeWidth="2" className="node-pulse" />
      <text x="200" y="48" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#4FD1C5">retrieve</text>

      {/* node: reason (center, larger) */}
      <circle cx="318" cy="190" r="26" fill="#16202C" stroke="#ECE7DA" strokeWidth="2" />
      <text x="318" y="195" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#ECE7DA">reason</text>

      {/* node: tool call */}
      <circle cx="318" cy="340" r="22" fill="#16202C" stroke="#F2A93B" strokeWidth="2" className="node-pulse" />
      <text x="318" y="372" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#F2A93B">tool call</text>

      {/* node: respond */}
      <circle cx="462" cy="80" r="22" fill="#16202C" stroke="#4FD1C5" strokeWidth="2" />
      <text x="462" y="48" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#4FD1C5">respond</text>
    </svg>
  );
}
