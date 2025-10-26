import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, urls } = req.body;

  if (!email || !urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Missing or invalid parameters' });
  }

  try {
    // You can improve this to fetch + analyze each URL
    const result = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a content audit assistant. Analyze blog content and suggest improvements in SEO, clarity, tone, and outdated info.',
        },
        {
          role: 'user',
          content: `Please audit this blog post: ${urls[0]}`,
        },
      ],
    });

    res.status(200).json({
      message: `Audit completed for ${urls.length} post(s)`,
      summary: result.choices[0].message.content,
    });
  } catch (error) {
    console.error('Error in /api/audit:', error);
    res.status(500).json({ error: 'Failed to audit content' });
  }
}
