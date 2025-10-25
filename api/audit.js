import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { email, urls } = await req.json();
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
    }

    const results = [];

    for (const url of urls) {
      const html = await fetch(url).then(res => res.text());
      const dom = new JSDOM(html);
      const textContent = dom.window.document.body.textContent;

      const prompt = `You are an AI content strategist. Audit the following blog post for:
- Outdated facts
- SEO problems (missing keywords, weak titles, etc)
- Tone inconsistencies or unnatural flow

Respond with a bullet-pointed audit.

Blog Content:
"""
${textContent.slice(0, 3000)}
"""`;

      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a helpful blog content auditor.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      });

      results.push({ url, audit: completion.choices[0].message.content });
    }

    return NextResponse.json({ success: true, results });
  } catch (err) {
    console.error('Audit Error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
