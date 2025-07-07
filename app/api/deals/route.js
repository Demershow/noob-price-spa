import axios from 'axios';

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const plain = searchParams.get('plain');
  const API_KEY = process.env.ITAD_API_KEY;

  if (!plain) {
    return Response.json({ error: 'Plain is required' }, { status: 400 });
  }

  const url = `https://api.isthereanydeal.com/games/prices/v3?key=${API_KEY}&country=BR`;

  try {
    const response = await axios({
      method: 'post',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: [plain],
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar ofertas:', error.message);
    return Response.json({ error: 'Erro ao buscar ofertas.' }, { status: 500 });
  }
}
