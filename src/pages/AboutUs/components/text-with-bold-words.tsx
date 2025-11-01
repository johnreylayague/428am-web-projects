import React from 'react';
import clsx from 'clsx';

interface TextWithBoldWordsProps {
  label: string;
  boldWords?: string | string[];
}

const TextWithBoldWords: React.FC<TextWithBoldWordsProps> = ({
  label,
  boldWords,
}) => {
  if (!boldWords) {
    return <>{label}</>;
  }

  const wordsToBold = Array.isArray(boldWords) ? boldWords : [boldWords];
  const labelLower = label.toLowerCase();

  // Find all matches with their positions
  const matches: Array<{ start: number; end: number; word: string }> = [];

  wordsToBold.forEach((word) => {
    const wordLower = word.toLowerCase();
    let searchIndex = 0;

    while (searchIndex < labelLower.length) {
      const index = labelLower.indexOf(wordLower, searchIndex);
      if (index === -1) break;

      matches.push({
        start: index,
        end: index + word.length,
        word: label.substring(index, index + word.length),
      });
      searchIndex = index + 1;
    }
  });

  // Sort matches by start position
  matches.sort((a, b) => a.start - b.start);

  // Build the result
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let keyCounter = 0;

  matches.forEach((match) => {
    // Add text before the match
    if (match.start > lastIndex) {
      result.push(label.substring(lastIndex, match.start));
    }

    // Add the bold word
    result.push(
      <b key={keyCounter++} className={clsx('capitalize inline-block')}>
        {match.word}
      </b>
    );

    lastIndex = match.end;
  });

  // Add any remaining text
  if (lastIndex < label.length) {
    result.push(label.substring(lastIndex));
  }

  // If no matches found, return original label
  return <React.Fragment>{result.length > 0 ? result : label}</React.Fragment>;
};

export default TextWithBoldWords;
