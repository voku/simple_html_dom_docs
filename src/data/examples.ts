export const examples: Record<string, { label: string, desc: string, code: string }> = {
  basic_selector: {
    label: "Basic Selectors",
    desc: "Fetching a DOM and finding multiple elements with standard CSS selectors.",
    code: String.raw`<?php

use voku\helper\HtmlDomParser;
require_once __DIR__ . '/vendor/autoload.php';

$html = HtmlDomParser::str_get_html(
    '<article class="featured"><a href="/docs">Docs</a><a href="/api">API</a></article>'
);

foreach ($html->findMulti('article.featured a[href]') as $link) {
    echo $link->getAttribute('href') . ' => ' . $link->text() . PHP_EOL;
}`
  },
  modify_contents: {
    label: "Modify Contents",
    desc: "Dynamically changing nodes with magic properties like outertext.",
    code: String.raw`<?php

use voku\helper\HtmlDomParser;
require_once __DIR__ . '/vendor/autoload.php';

$html = HtmlDomParser::str_get_html(
    '<div class="gallery"><img src="cover.jpg"><input value="draft"></div>'
);

foreach ($html->findMulti('img') as $image) {
    $image->setAttribute('loading', 'lazy');
    $image->setAttribute('alt', 'Cover image');
}

$input = $html->findOneOrNull('input');
if ($input !== null) {
    $input->outertext = '<strong>[INPUT REMOVED]</strong>';
}

echo $html->save();`
  },
  extract_data: {
    label: "Extract Data",
    desc: "Extract specific data attributes easily.",
    code: String.raw`<?php

use voku\helper\HtmlDomParser;
require_once __DIR__ . '/vendor/autoload.php';

$templateHtml = <<<'HTML'
<div>
    <div class="inner">
        <ul>
            <li><img alt="" src="none.jpg" data-lazyload="/pc/aaa.jpg"></li>
            <li><img alt="" src="none.jpg" data-lazyload="/pc/bbb.jpg"></li>
        </ul>
    </div>
</div>
HTML;

$html = HtmlDomParser::str_get_html($templateHtml);
$dataAttributes = [];

foreach ($html->findMulti('.inner img[data-lazyload]') as $image) {
    $dataAttributes[] = $image->getAttribute('data-lazyload');
}

var_export($dataAttributes);`
  },
  add_content: {
    label: "Add Content",
    desc: "Append or prepend content within elements.",
    code: String.raw`<?php

use voku\helper\HtmlDomParser;
require_once __DIR__ . '/vendor/autoload.php';

$list = HtmlDomParser::str_get_html('<ul><li>alpha</li><li>beta</li></ul>');

foreach ($list->findMulti('ul li') as $item) {
    $item->innerhtml = '<span class="marker">•</span> ' . $item->innertext;
}

echo $list->save();`
  },
  scraping: {
    label: "Scraping Pages",
    desc: "Extract specific data from a website by wrapping functionality into a clean function.",
    code: String.raw`<?php

use voku\helper\HtmlDomParser;
require_once __DIR__ . '/vendor/autoload.php';

function extractArticleSummary(string $htmlString): array
{
    $dom = HtmlDomParser::str_get_html($htmlString);

    $author = $dom->findOneOrNull('[rel=author]');
    $tags = [];

    foreach ($dom->findMulti('ul.tags li') as $tag) {
        $tags[] = trim($tag->text());
    }

    return [
        'title' => $dom->findOne('article h1')->text(),
        'author' => $author !== null ? $author->text() : null,
        'tags' => $tags,
    ];
}

$pageHtml = <<<'HTML'
<article>
    <h1>Simple HTML DOM in Production</h1>
    <a rel="author" href="/authors/voku">voku</a>
    <ul class="tags">
        <li>php</li>
        <li>dom</li>
        <li>scraping</li>
    </ul>
</article>
HTML;

$summary = extractArticleSummary($pageHtml);
var_export($summary);`
  }
};
