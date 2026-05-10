import { useState } from 'react';
import { Terminal, Copy, Check, Github, BookOpen, ExternalLink, ShieldAlert } from 'lucide-react';
import { CodeBlock } from './components/CodeBlock';
import { examples } from './data/examples';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-white/10 rounded-md transition-colors"
      aria-label="Copy code"
    >
      {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400" />}
    </button>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<keyof typeof examples>('basic_selector');

  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden flex flex-col">
      <div className="absolute inset-0 grid-bg pointer-events-none fixed"></div>

      {/* Navigation */}
      <header className="relative z-50 px-6 md:px-12 py-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black flex items-center justify-center rounded-sm">
            <span className="text-white font-black text-xl tracking-tighter">V</span>
          </div>
          <span className="font-bold tracking-widest text-sm uppercase text-slate-900">voku/simple_html_dom</span>
        </div>
        <nav className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-widest text-slate-500 opacity-80">
          <a href="https://github.com/voku/simple_html_dom/blob/master/README.md" className="hover:text-slate-900 transition-colors">Documentation</a>
          <a href="https://packagist.org/packages/voku/simple_html_dom" className="hover:text-slate-900 transition-colors">Packagist</a>
          <a href="https://github.com/voku/simple_html_dom" className="hover:text-slate-900 transition-colors">GitHub</a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter mb-8 uppercase text-slate-900">
              SIMPLE HTML<br />
              DOM PARSING<br />
              <span className="text-stroke">FOR PHP.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-md leading-relaxed">
              Query, extract, and rewrite HTML without fighting strings. Built on DOMDocument, Symfony CssSelector, and modern PHP runtimes.
            </p>

            <div className="flex flex-col gap-4 max-w-md">
              <div className="bg-slate-100 border border-slate-200 rounded px-5 py-4 flex items-center justify-between font-mono text-sm shadow-sm">
                <span className="text-slate-700 font-medium">composer require <span className="text-blue-600">voku/simple_html_dom</span></span>
                <CopyButton text="composer require voku/simple_html_dom" />
              </div>
              
              <div className="flex gap-4 items-center">
                <a href="#examples" className="bg-black text-white font-bold px-8 py-4 text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors inline-block text-center shadow-lg hover:shadow-xl">
                  View Examples
                </a>
                <div className="flex items-center gap-2 px-4 opacity-80 hidden sm:flex">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-600">PHP 7.1 — 8.4 Verified</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 flex items-center relative">
            <div className="w-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-20">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20"></div>
                </div>
                <div className="ml-4 text-[10px] text-slate-500 font-mono uppercase tracking-widest font-semibold">basic_selector.php</div>
              </div>
              <CodeBlock code={examples.basic_selector.code} />
            </div>
            
            {/* Background blur decorative element */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-3xl rounded-full opacity-50 z-10 pointer-events-none"></div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="relative z-10 border-t border-slate-200 mt-12 py-12 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full text-slate-900">
          <div className="flex flex-col">
            <span className="text-3xl font-bold tracking-tight">8.57M+</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-bold">Total Installs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold tracking-tight">66+</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-bold">Active Dependents</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold tracking-tight">MIT</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-bold">Open Source License</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold tracking-tight">100%</span>
              <span className="text-xs text-green-600 font-bold">PHPStan</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-bold">Static Analysis Clean</span>
          </div>
        </section>

        {/* Features / Why this project */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-slate-200 text-slate-900">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4 uppercase">Why this project?</h2>
            <p className="text-xl text-slate-600 italic font-serif">
              "Because scraping and rewriting HTML with string functions is not bravery. It is just deferred regret."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-4">
              <div className="text-blue-500 mb-2"><BookOpen size={32} strokeWidth={1.5} /></div>
              <h3 className="text-2xl font-bold tracking-tight uppercase">Familiar API, modern base</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Keep the selector-first workflow people know from Simple HTML DOM, but use a modernized implementation built around <code className="text-slate-900 bg-slate-200 px-1 rounded">DOMDocument</code> and Symfony CssSelector.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-green-500 mb-2"><Terminal size={32} strokeWidth={1.5} /></div>
              <h3 className="text-2xl font-bold tracking-tight uppercase">Query like CSS</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Use CSS selectors for readable extraction and transformation logic. Easily find nodes with <code className="text-slate-900 bg-slate-200 px-1 rounded text-sm font-mono">findMulti('article.featured a[href]')</code>.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-amber-500 mb-2"><ExternalLink size={32} strokeWidth={1.5} /></div>
              <h3 className="text-2xl font-bold tracking-tight uppercase">Rewrite, don't regex</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Change attributes, remove nodes, extract text, and serialize the document again. Real DOM manipulation without the headache of string replacement.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-red-500 mb-2"><ShieldAlert size={32} strokeWidth={1.5} /></div>
              <h3 className="text-2xl font-bold tracking-tight uppercase">Works with ugly HTML</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Real-world HTML is rarely clean. The parser includes partial invalid HTML handling, wrapper cleanup, UTF-8 support, and regression tests for edge cases.
              </p>
            </div>
          </div>
        </section>

        {/* Code Examples Tabs */}
        <section id="examples" className="relative z-10 border-t border-slate-200 bg-white pt-24 pb-12 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-12 uppercase border-b border-slate-200 pb-6 text-slate-900">Real APIs, Real Examples</h2>
            
            <div className="grid lg:grid-cols-[250px_1fr] gap-8">
              {/* Vertical Tabs */}
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                {(Object.entries(examples) as [keyof typeof examples, typeof examples[keyof typeof examples]][]).map(([key, example]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`text-left px-5 py-4 rounded font-bold uppercase tracking-widest text-xs transition-all whitespace-nowrap ${
                      activeTab === key 
                        ? 'bg-slate-100 text-slate-900 border border-slate-200 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    {example.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-w-0 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-1 text-slate-900 uppercase">{examples[activeTab].label}</h3>
                  <p className="text-slate-600 text-lg">{examples[activeTab].desc}</p>
                </div>
                <div className="relative rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20"></div>
                    </div>
                    <CopyButton text={examples[activeTab].code} />
                  </div>
                  <CodeBlock code={examples[activeTab].code} className="!bg-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Matrix */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
          <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
            <div>
              <h2 className="text-2xl xl:text-3xl font-extrabold tracking-tighter mb-8 uppercase text-slate-900">Selector API</h2>
              <div className="border border-slate-200 rounded overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-widest font-bold">
                    <tr>
                      <th className="px-5 py-4">Use case</th>
                      <th className="px-5 py-4">API Method</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 text-slate-700 whitespace-normal">One required-ish node</td>
                      <td className="px-5 py-4 font-mono font-bold text-amber-600">findOne()</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="px-5 py-4 text-slate-900 font-medium whitespace-normal">One optional node (Modern)</td>
                      <td className="px-5 py-4 font-mono font-bold text-blue-500">findOneOrNull()</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 text-slate-700 whitespace-normal">Multiple nodes</td>
                      <td className="px-5 py-4 font-mono font-bold text-amber-600">findMulti()</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="px-5 py-4 text-slate-900 font-medium whitespace-normal">Multiple optional nodes (Modern)</td>
                      <td className="px-5 py-4 font-mono font-bold text-blue-500">findMultiOrNull()</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors text-slate-500">
                      <td className="px-5 py-4 whitespace-normal">Legacy false-style optional</td>
                      <td className="px-5 py-4 font-mono">findOneOrFalse()</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl xl:text-3xl font-extrabold tracking-tighter mb-8 uppercase text-slate-900">DOM Mutation</h2>
              <div className="border border-slate-200 rounded overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-widest font-bold">
                    <tr>
                      <th className="px-5 py-4">Method</th>
                      <th className="px-5 py-4">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-amber-600">setAttribute()</td>
                      <td className="px-5 py-4 text-slate-700">Set attribute on node</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-amber-600">removeAttribute()</td>
                      <td className="px-5 py-4 text-slate-700">Remove specific attr</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-amber-600">removeAttributes()</td>
                      <td className="px-5 py-4 text-slate-700">Clear all text/attrs</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-red-500">remove()</td>
                      <td className="px-5 py-4 text-slate-700">Remove node from DOM</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-red-500">delete()</td>
                      <td className="px-5 py-4 text-slate-700">Alias for remove()</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl xl:text-3xl font-extrabold tracking-tighter mb-8 uppercase text-slate-900">Output Operations</h2>
              <div className="border border-slate-200 rounded overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-widest font-bold">
                    <tr>
                      <th className="px-5 py-4">Method</th>
                      <th className="px-5 py-4">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-emerald-600">$dom-&gt;html()</td>
                      <td className="px-5 py-4 text-slate-700">Get formatted HTML representation</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-emerald-600">$dom-&gt;innerHtml()</td>
                      <td className="px-5 py-4 text-slate-700">Get HTML of children only</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-emerald-600">$dom-&gt;text()</td>
                      <td className="px-5 py-4 text-slate-700">Extract plain text content</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-emerald-600">$dom-&gt;xml()</td>
                      <td className="px-5 py-4 text-slate-700">Get strict XML representation</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-emerald-600">$dom-&gt;save()</td>
                      <td className="px-5 py-4 text-slate-700">Save the current state to a string</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Banner */}
        <section className="relative z-10 border-t border-red-200 bg-red-50 mt-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center gap-6">
            <div className="bg-red-100 p-4 rounded text-red-600 shrink-0 shadow-sm border border-red-200">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-red-600 mb-2 uppercase">This is a Parser, not a Sanitizer</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                This library is designed for HTML parsing and manipulation. It is <strong className="text-slate-900">not</strong> intended for HTML sanitization. For preventing XSS and handling untrusted user input, you must use a dedicated HTML sanitizer.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white py-12 text-center text-xs font-bold uppercase tracking-widest text-slate-500 w-full">
        <p>Maintained for modern PHP runtimes. Forked from the original sourceforge project.</p>
        <div className="mt-6 flex justify-center gap-8">
          <a href="https://github.com/voku/simple_html_dom" className="hover:text-slate-900 transition-colors">GitHub Repository</a>
          <a href="https://packagist.org/packages/voku/simple_html_dom" className="hover:text-slate-900 transition-colors">Packagist</a>
        </div>
      </footer>
    </div>
  );
}
