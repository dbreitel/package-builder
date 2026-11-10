# char-breakdown

Count the characters in a string, broken down into letters, digits and everything else. Unicode-aware, zero dependencies.

## Install

```sh
npm install char-breakdown
```

Requires Node 18 or newer. ESM only.

## Usage

```js
import { countChars } from 'char-breakdown';

countChars('ab12 !');
// { alpha: 2, numeric: 2, other: 2, total: 6 }
```

## API

### `countChars(input)`

- `input` (`string`): the text to count.
- Returns `{ alpha, numeric, other, total }`.
- Throws `TypeError` if `input` is not a string.

| Field     | Counts                                                  |
|-----------|---------------------------------------------------------|
| `alpha`   | Letters in any script (`a`, `é`, `ש`, `字`)              |
| `numeric` | Digits and numeric characters in any script (`7`, `٣`)  |
| `other`   | Whitespace, punctuation, symbols, emoji                 |
| `total`   | Sum of the above                                        |

## How characters are counted

The string is split into user-perceived characters (grapheme clusters) with `Intl.Segmenter`, so:

- `'👍🏽'` counts as 1, not 4 code units.
- `'é'` (e + combining accent) counts as 1 letter.

Each character is classified by its first code point using the Unicode `\p{L}` (letter) and `\p{N}` (number) categories.

## License

MIT
