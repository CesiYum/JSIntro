import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const PORT = 8765;
const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  if (url.pathname === '/api/produits') {
    if (url.searchParams.get('delai') === '1') await new Promise(resolve => setTimeout(resolve, 700));
    const status = url.searchParams.get('erreur') === '1' ? 503 : 200;
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(status === 200 ? [{ id: 1, nom: 'Casque' }, { id: 2, nom: 'Micro' }] : { message: 'Service indisponible' }));
    return;
  }
  if (url.pathname === '/api/commande' && req.method === 'POST') {
    let body = '';
    for await (const chunk of req) body += chunk;
    try {
      const data = JSON.parse(body);
      if (!data.produit) throw new Error('Produit manquant');
      res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ id: 7, produit: data.produit }));
    } catch {
      res.writeHead(400); res.end('Requête invalide');
    }
    return;
  }
  const files = { '/': ['index.html', 'text/html'], '/main.js': ['main.js', 'text/javascript'] };
  if (!files[url.pathname]) { res.writeHead(404); res.end('Introuvable'); return; }
  const [filename, mime] = files[url.pathname];
  res.writeHead(200, { 'Content-Type': `${mime}; charset=utf-8` });
  res.end(await readFile(new URL(`./${filename}`, import.meta.url)));
});
server.listen(PORT, () => console.log(`Ouvrez http://localhost:${PORT}`));
