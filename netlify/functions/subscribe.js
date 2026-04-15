export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let email;
  try {
    ({ email } = await req.json());
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
  }

  const apiKey = Netlify.env.get('MAILERLITE_API_KEY');
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Server configuration error' }), { status: 500 });
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({ email, groups: ['183608949676705180'] })
    });

    if (response.status === 200 || response.status === 201) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else if (response.status === 409) {
      return new Response(JSON.stringify({ already: true }), { status: 409 });
    } else {
      const err = await response.text();
      console.error('MailerLite error:', response.status, err);
      return new Response(JSON.stringify({ error: 'Subscription failed' }), { status: 500 });
    }
  } catch (err) {
    console.error('Fetch error:', err);
    return new Response(JSON.stringify({ error: 'Network error' }), { status: 500 });
  }
};

export const config = { path: '/api/subscribe' };
