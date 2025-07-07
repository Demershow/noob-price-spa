export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const plain = searchParams.get('plain');

  if (!plain) {
    return Response.json({ error: 'Plain is required' }, { status: 400 });
  }

  const url = new URL('https://api.isthereanydeal.com/v01/game/prices/');
  url.searchParams.append('key', process.env.ITAD_API_KEY);
  url.searchParams.append('plains', plain);

  try {
    const response = await fetch(url.toString());
    const data = await response.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: 'Erro ao buscar ofertas.' }, { status: 500 });
  }
}
