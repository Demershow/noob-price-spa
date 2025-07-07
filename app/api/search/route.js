import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');

  if (!title) {
    return Response.json({ error: 'Title is required' }, { status: 400 });
  }

  const url = 'https://api.isthereanydeal.com/games/search/v1';

  try {
    const response = await axios({
      method: 'get',
      url,
      params: {
        key: process.env.ITAD_API_KEY,
        title,
        results: 1,
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar jogo:', error);
    return Response.json({ error: 'Erro ao buscar jogo.' }, { status: 500 });
  }
}
