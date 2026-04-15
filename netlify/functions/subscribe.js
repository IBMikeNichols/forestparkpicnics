exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  let email;
  try { ({ email } = JSON.parse(event.body)); } catch { return { statusCode: 400, body: 'Bad request' }; }
  if (!email) return { statusCode: 400, body: 'Invalid email' };
  const r = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNWM0ZjMzNTViYjFhYTEwN2MzNzU3ZGY5NjFiNTY4ZGRlZTM1NzAzOGVmODExNjRlYmI3NzU0ZDViMjgzNDg1NDc0ODJjYmZhYjA0YjUwOTkiLCJpYXQiOjE3NzYyNzU3MTQuODIyOTk0LCJuYmYiOjE3NzYyNzU3MTQuODIyOTk4LCJleHAiOjQ5MzE5NDkzMTQuODE4NjEsInN1YiI6IjIyNTU4MTMiLCJzY29wZXMiOltdfQ.q9whN0EiPYi6NEqDSVaYRXXIvv-ZUn2ajT8-iOETv16Nv5nqhoM9-ISfwfa_pGQbHwKSit27uA6LrjexbBCJHGmGMl9-5s9oq2sXnaDbMiunxN22hDV3Uy0hgt4xyDI0WZ2BpsqvPPHhw7cK_0dZ5yxNoVwZZJu7wknWjrS0N5h1sXdm7uGi-ra06xrUBr89D4DlxbiFTdT_JdRkIp_IwRbwSYM3lrrqpZ_iM3JjFeBKa7lS1djQD0lgk6WOCqd5Ki78lerPB1Gtb20CNbXQSIOA5wpsDcKuoGuIAm0M2qRw-qFslkRP-D2iR-PVIcfAQrzxvgMAgnXX1e0l-n9l7VhbBgzhd2V_MgrfgwvBmcFPDaLO9BUJHq2Ib14Vitl4zi7NgmA_8mFiNFO8f9sqIcMB9YJ7FIiqYWhAfoUlg2BLX2aWL7eY9FivAEv1pQn5kupOPaiU2yLjS0X9xEDzF9EyafCggy95rOTQljMu0_rW9EdV5tpbS6PKbZ48c2hiTGuWFDj5vCNlwjvrZCBlWdgQ93yOK6dGCSVN71ztWgK59emn10IEMpMz4JHChSwbaHifnvfbrtDYCsYC1SmXpOCdNsHiJ5B-cZl-8u-CcylVzsTqZqu_TwkzjXNbxrtqL0H5bdWPOoYJJKjvu_pPN6aRQlgHwDPc2DoA5imtJaY' },
    body: JSON.stringify({ email, groups: ['183608949676705180'] })
  });
  if (r.status === 200 || r.status === 201) return { statusCode: 200, body: JSON.stringify({ success: true }) };
  if (r.status === 409) return { statusCode: 409, body: JSON.stringify({ already: true }) };
  return { statusCode: 500, body: 'Error' };
};
