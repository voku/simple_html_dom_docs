import { Highlight, themes } from "prism-react-renderer";
import "./prism-setup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "php", className }: CodeBlockProps) {
  return (
    <Highlight theme={themes.github} code={code.trim()} language={language}>
      {({ className: prismClass, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`text-[11px] sm:text-xs overflow-x-auto p-4 sm:p-5 md:p-6 font-mono leading-relaxed ${className || ""}`} style={{ ...style, backgroundColor: 'transparent' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })} className="table-row">
              <span className="table-cell select-none text-right pr-3 sm:pr-4 text-slate-400 text-[10px] sm:text-[11px]">{i + 1}</span>
              <span className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
