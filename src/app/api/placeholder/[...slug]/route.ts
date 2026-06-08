import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const width = parseInt(params.slug[0]) || 100;
  const height = parseInt(params.slug[1]) || 100;

  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6" />
    <text x="50%" y="50%" font-family="ui-sans-serif, system-ui" font-size="10" fill="#9ca3af" text-anchor="middle" dy=".3em">${width}x${height}</text>
  </svg>`;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
}
