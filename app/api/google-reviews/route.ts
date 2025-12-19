import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('placeId');
  const apiKey = searchParams.get('apiKey');

  if (!placeId || !apiKey) {
    return NextResponse.json(
      { error: 'Missing placeId or apiKey parameter' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    const data = await response.json();

    if (data.status === 'OK') {
      return NextResponse.json(data);
    } else {
      return NextResponse.json(
        { error: `Google API error: ${data.status}` },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
