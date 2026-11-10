# @dbreitel/char-breakdown

Count the characters in a string, broken down into letters, digits and everything else. Unicode-aware, zero dependencies.

## Install

Published to GitHub Packages. Point the `@dbreitel` scope at it in your project's `.npmrc`:

```
@dbreitel:registry=https://npm.pkg.github.com
```

Then authenticate with a GitHub token that has `read:packages` and install:

```sh
npm install @dbreitel/char-breakdown
```

Requires Node 18 or newer. ESM only.

## Usage

```js
import { countChars } from '@dbreitel/char-breakdown';

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

## Releasing

Bump `version` in `package.json`, commit, then push a matching tag:

```sh
git tag v1.0.1 && git push origin v1.0.1
```

The `Publish` workflow runs the tests and publishes to GitHub Packages. It fails if the tag doesn't match the `package.json` version.

## License

MIT
