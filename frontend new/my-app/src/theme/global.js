import { createGlobalStyle } from 'styled-components';
import fontAssistantBoldWoff from '../assets/fonts/Assistant-Bold.woff';
import fontAssistantBoldWoff2 from '../assets/fonts/Assistant-Bold.woff2';
import fontAssistantMediumWoff from '../assets/fonts/Assistant-Medium.woff';
import fontAssistantMediumWoff2 from '../assets/fonts/Assistant-Medium.woff2';
import fontAssistantRegularWoff from '../assets/fonts/Assistant-Regular.woff';
import fontAssistantRegularWoff2 from '../assets/fonts/Assistant-Regular.woff2';
import fontAssistantLightWoff from '../assets/fonts/Assistant-Light.woff';
import fontAssistantLightWoff2 from '../assets/fonts/Assistant-Light.woff2';
import fontAssistantThinWoff from '../assets/fonts/Assistant-ExtraLight.woff';
import fontAssistantThinWoff2 from '../assets/fonts/Assistant-ExtraLight.woff2';
import { hexToRgba } from '../helpers'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src:  url(${fontAssistantThinWoff2}) format('woff2'),
          url(${fontAssistantThinWoff}) format('woff');
  }

  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src:  url(${fontAssistantLightWoff2}) format('woff2'),
          url(${fontAssistantLightWoff}) format('woff');
  }

  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src:  url(${fontAssistantRegularWoff2}) format('woff2'),
          url(${fontAssistantRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src:  url(${fontAssistantMediumWoff2}) format('woff2'),
          url(${fontAssistantMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src:  url(${fontAssistantBoldWoff2}) format('woff2'),
          url(${fontAssistantBoldWoff}) format('woff');
  }


  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
     ========================================================================== */

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
     ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */

  body {
    margin: 0;
  }

  /**
   * Render the main element consistently in IE.
   */

  main {
    display: block;
  }

  /**
   * Correct the font size and margin on h1 elements within section and
   * article contexts in Chrome, Firefox, and Safari.
   */

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
     ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd em font sizing in all browsers.
   */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
     ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */

  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd em font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  small {
    font-size: 80%;
  }

  /**
   * Prevent sub and sup elements from affecting the line height in
   * all browsers.
   */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
     ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  img {
    border-style: none;
  }

  /* Forms
     ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from fieldset elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    fieldset elements in all browsers.
   */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

  progress {
    vertical-align: baseline;
  }

  /**
   * Remove the default vertical scrollbar in IE 10+.
   */

  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to inherit in Safari.
   */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
     ========================================================================== */

  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

  details {
    display: block;
  }

  /*
   * Add the correct display in all browsers.
   */

  summary {
    display: list-item;
  }

  /* Misc
     ========================================================================== */

  /**
   * Add the correct display in IE 10+.
   */

  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */

  [hidden] {
    display: none;
  }


  /*! base site style */

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${(p) => p.theme.typography.fontSize};
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  strong, b {
    font-weight: bold;
    display: inline-block;
  }

  code, kbd, pre, samp {
    font-size: 1em;
    direction: ltr;
    unicode-bidi: bidi-override;
  }

  pre {
      display: block;
      margin-top: 0;
      margin-bottom: 1rem;
      overflow: auto;
      font-size: .875em;
  }

  pre code {
      font-size: inherit;
      color: inherit;
      word-break: normal;
  }

  code {
      font-size: .875em;
      color: #d63384;
      word-wrap: break-word;
  }

  body {
    background-color: ${(p) => p.theme.colors.bg};
    color: ${(p) => p.theme.colors.text};
    padding: 0;
    font-size: 1rem;
    font-family: ${(p) => p.theme.typography.fontFamily};
    font-weight: normal;
    min-height: 100vh;
  }

  @media print {
    body {
      background-color: #fff;
    }
  }

  body::backdrop {
    background-color: #fff;
  }

  img {
    height: 100%;
    width: auto;
  }

  img,
  fieldset {
    border: 0;
  }

  a {
    color: ${(p) => p.theme.colors.link};
    text-decoration: none;
    box-shadow: inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 ${(p) => hexToRgba(p.theme.colors.link, 20)};

    &:hover, &:focus {
      box-shadow: inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 ${(p) => hexToRgba(p.theme.colors.link, 30)};
    }
  }

  blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
    margin: 0;
  }

  .sr { // screen reader
    position: absolute !important;
    overflow: hidden;
    clip: rect(0 0 0 0);
    margin: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    border: 0;
  }

  .w200 { font-weight: 200; }
  .w300 { font-weight: 300; }
  .w500 { font-weight: 500; }

  .s06 { font-size: 0.6rem; }
  .s08 { font-size: 0.8rem; }
  .s09 { font-size: 0.9rem; }
  .s1 { font-size: 1rem; }
  .s2 { font-size: 2rem; }
  .s3 { font-size: 3rem; }
  .s4 { font-size: 4rem; }

  .mt1 { margin-top: 1rem; }
  .mt2 { margin-top: 2rem; }
  .mt3 { margin-top: 3rem; }
  .mt4 { margin-top: 4rem; }
  .mt5 { margin-top: 5rem; }
  .mt6 { margin-top: 6rem; }

  .mb1 { margin-bottom: 1rem; }
  .mb2 { margin-bottom: 2rem; }
  .mb3 { margin-bottom: 3rem; }
  .mb4 { margin-bottom: 4rem; }
  .mb5 { margin-bottom: 5rem; }
  .mb6 { margin-bottom: 6rem; }
`;

export default GlobalStyle;
