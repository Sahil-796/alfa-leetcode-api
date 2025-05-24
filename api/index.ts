import { createServer } from 'http';
import app from '../src/app';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { parse } from 'url';

const server = createServer(app);

export default function handler(req: VercelRequest, res: VercelResponse) {
  const parsedUrl = parse(req.url!, true);
  server.emit('request', req, res);
}
