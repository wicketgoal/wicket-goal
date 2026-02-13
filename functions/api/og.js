export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const match = url.searchParams.get("match") || "T20-World-Cup";

  const teams = match.split("-vs-");
  const teamA = teams[0] ? teams[0].toUpperCase() : "TEAM A";
  const teamB = teams[1] ? teams[1].toUpperCase() : "TEAM B";

  const html = `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#050b2e"/>
        <stop offset="100%" stop-color="#0a1c4d"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#grad)"/>

    <text x="600" y="200" font-size="70" fill="white" text-anchor="middle" font-weight="bold">
      ${teamA} vs ${teamB}
    </text>

    <text x="600" y="300" font-size="40" fill="#ff0050" text-anchor="middle">
      T20 World Cup
    </text>

    <text x="600" y="380" font-size="45" fill="white" text-anchor="middle">
      Watch Live Now
    </text>

    <text x="600" y="560" font-size="30" fill="#ccc" text-anchor="middle">
      Wicket Goal
    </text>
  </svg>
  `;

  return new Response(html, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
