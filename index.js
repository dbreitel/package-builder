const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });

/**
 * @param {string} input
 * @returns {{ alpha: number, numeric: number, other: number, total: number }}
 */
export function countChars(input) {
  if (typeof input !== 'string') throw new TypeError('countChars expects a string');
  const result = { alpha: 0, numeric: 0, other: 0, total: 0 };
  for (const { segment } of segmenter.segment(input)) {
    result.total++;
    if (/^\p{L}/u.test(segment)) result.alpha++;
    else if (/^\p{N}/u.test(segment)) result.numeric++;
    else result.other++;
  }
  return result;
}
