export const examples: Record<string, { label: string, desc: string, code: string }> = {
  basic_selector: {
    label: "Basic Selectors",
    desc: "Fetching a DOM and finding multiple elements with standard CSS selectors.",
    code: `<?php

use voku\\helper\\HtmlDomParser;
require_once '../vendor/autoload.php';

// get DOM from URL or file
$html = HtmlDomParser::file_get_html('http://www.google.com/');

// find all link
foreach ($html->find('a') as $e) {
    echo $e->href . '<br>';
}

// find all tags with class=gb1
foreach ($html->find('span.gb1') as $e) {
    echo $e->outertext . '<br>';
}

// find all td tags with attribute align=center
foreach ($html->find('td[align=center]') as $e) {
    echo $e->innertext . '<br>';
}`
  },
  modify_contents: {
    label: "Modify Contents",
    desc: "Dynamically changing nodes with magic properties like outertext.",
    code: `<?php

use voku\\helper\\HtmlDomParser;
require_once '../vendor/autoload.php';

// get DOM from URL or file
$html = HtmlDomParser::file_get_html('http://www.google.com/');

// replace all image
foreach ($html->find('img') as $e) {
    $e->outertext = '<img src="foobar.png">';
}

// replace all input
foreach ($html->find('input') as $e) {
    $e->outertext = '[INPUT]';
}

// dump contents
echo $html;`
  },
  extract_data: {
    label: "Extract Data",
    desc: "Extract specific data attributes easily.",
    code: `<?php

use voku\\helper\\HtmlDomParser;
require_once '../vendor/autoload.php';

$templateHtml = '
<div>
    <div class="inner">
        <ul>
          <li><img alt="" src="none.jpg" data-lazyload="/pc/aaa.jpg"></a></li>
          <li><img alt="" src="none.jpg" data-lazyload="/pc/bbb.jpg"></a></li>
        </ul>
    </div>
</div>
';

$htmlTmp = HtmlDomParser::str_get_html($templateHtml);
$data_attribute = [];

foreach ($htmlTmp->find('.inner img') as $meta) {
    if ($meta->hasAttribute('data-lazyload')) {
        $data_attribute[] = $meta->getAttribute('data-lazyload');
    }
}

// dump contents
var_export($data_attribute, false);`
  },
  add_content: {
    label: "Add Content",
    desc: "Append or prepend content within elements.",
    code: `<?php

use voku\\helper\\HtmlDomParser;
require_once '../vendor/autoload.php';

$templateHtml = '<ul><li>test321</li></ul>';

// add: "<br>" to "<li>"
$htmlTmp = HtmlDomParser::str_get_html($templateHtml);
foreach ($htmlTmp->findMulti('ul li') as $li) {
    $li->innerhtml = '<br>' . $li->innerhtml . '<br>';
}
foreach ($htmlTmp->findMulti('br') as $br) {
    // DEBUG:
    echo $br->tag; // br
}

$templateHtml = $htmlTmp->save();

// dump contents
echo $templateHtml; // <ul><li><br>test321<br></li></ul>`
  },
  scraping: {
    label: "Scraping Pages",
    desc: "Extract specific data from a website by wrapping functionality into a clean function.",
    code: `<?php

use voku\\helper\\HtmlDomParser;
require_once '../vendor/autoload.php';

function scraping_imdb($url)
{
    $return = [];
    $dom = HtmlDomParser::file_get_html($url);

    // get title
    $return['Title'] = $dom->find('title', 0)->innertext;

    // get rating
    $return['Rating'] = $dom->find('.ratingValue strong', 0)->getAttribute('title');

    return $return;
}

$data = scraping_imdb('http://imdb.com/title/tt0335266/');

foreach ($data as $k => $v) {
    echo '<strong>' . $k . ' </strong>' . $v . '<br>';
}`
  }
};

