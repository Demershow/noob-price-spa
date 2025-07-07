export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');

  if (!title) {
    return Response.json({ error: 'Title is required' }, { status: 400 });
  }

  const url = new URL('https://api.isthereanydeal.com/games/search/v1');
  url.searchParams.append('key', process.env.ITAD_API_KEY);
  url.searchParams.append('title', title);
  url.searchParams.append('results', '1');

  try {
    const response = await fetch(url.toString());
    const data = await response.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: 'Erro ao buscar jogo.' }, { status: 500 });
  }
}