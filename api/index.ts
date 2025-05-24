import app from '../src/app';  // import your Express app
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Export Vercel compatible handler
export default function handler(req: VercelRequest, res: VercelResponse) {
  app(req, res);
}