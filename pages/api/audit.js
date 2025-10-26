import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, urls } = req.body;

  if (!email || !urls || !Array.isArray(urls) || urls.length === 0) {
    return res.status(400).json({ error: 'Missing or invalid parameters' });
  }

  try {
    // For now, just audit the first URL provided
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an AI that audits blog posts for outdated content, SEO issues, and tone problems. Provide actionable insights.',
        },
        {
          role: 'user',
          content: `Please audit this blog post and provide a summary of issues: ${urls[0]}`,
        },
      ],
    });

    const summary = response.choices[0].message.content;

    res.status(200).json({
      message: 'Audit successful',
      summary,
    });
  } catch (err) {
    console.error('Audit error:', err);
    res.status(500).json({ error: 'Audit failed' });
  }
}
