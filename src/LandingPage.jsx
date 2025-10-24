import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 border-b shadow-sm">
        <h1 className="text-3xl font-bold">AI Content Audit</h1>
        <p className="text-sm text-gray-600">Audit your blog. Boost your SEO. Fix outdated posts — fast.</p>
      </header>

      <main className="p-8 max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Blog Might Be Costing You Money</h2>
          <p className="text-lg text-gray-700 mb-6">
            We use AI to scan your blog for outdated content, SEO issues, and tone mismatches — and give you a
            crystal-clear report with exactly what to fix.
          </p>
          <a
            href="https://tally.so/r/wAo2Wk"
            target="_blank"
            rel="noopener"
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800"
          >
            Request a Free Audit
          </a>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-2">🔍 Find Outdated Info</h3>
            <p>Our AI detects references to old product names, broken links, or discontinued features.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">📈 Improve SEO</h3>
            <p>Weak headlines? Missing keywords? We’ll flag the issues and suggest improvements.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">🧠 Unify Your Voice</h3>
            <p>Make sure every article matches your brand tone and doesn’t confuse your audience.</p>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Ready to Fix Your Blog?</h2>
          <p className="mb-6">Try it free on 3 blog posts. We'll send your personalized audit report in 24 hours.</p>
          <a
            href="https://tally.so/r/wAo2Wk"
            target="_blank"
            rel="noopener"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500"
          >
            Get Your Free Audit
          </a>
        </section>

        <section className="mt-16">
          <iframe 
            src="https://tally.so/r/wAo2Wk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            width="100%" 
            height="600" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            title="AI Content Audit Request"
          />
        </section>
      </main>

      <footer className="mt-20 text-center text-gray-400 text-sm p-6">
        &copy; {new Date().getFullYear()} AI Content Audit. All rights reserved.
      </footer>
    </div>
  );
}
