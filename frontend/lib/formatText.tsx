import React, { ElementType } from 'react';

export function formatTextWithBreaks(text: string): React.ReactNode[] {
  if (!text) return [];
  
  // Split the text by <br> or <br/> or <br /> tags
  const parts = text.split(/(<br\s*\/?>)/i);
  
  // Map through parts and replace br tags with line breaks
  return parts.map((part, index) => {
    if (part.match(/<br\s*\/?>/i)) {
      return <br key={index} />;
    }
    return <span key={index}>{part}</span>;
  });
}



// NOTE: Text component moved to /components/configs/text.tsx to avoid mixing with content components

/**
 * Detects <green>...</green> markers in a string and wraps the inner content
 * with a span using the .greenHighlight class.
 *
 * Safety: This function does not use dangerouslySetInnerHTML. It renders
 * plain text and only adds a span element for the highlighted segments.
 * Any HTML present in the string will be treated as text.
 */
export function formatGreenHighlight(text?: string | null): React.ReactNode[] {
  if (!text) return [];

  // Split keeping the <green>...</green> segments
  const parts = text.split(/(<green>[\s\S]*?<\/green>)/gi);

  return parts.map((part, index) => {
    const match = part.match(/^<green>[\s\S]*?<\/green>$/i);
    if (match) {
      // Extract inner content (between the tags)
      const inner = part.replace(/^<green>/i, '').replace(/<\/green>$/i, '');
      return (
        <span key={`green-${index}`} className="greenHighlight">
          {inner}
        </span>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

/**
 * Convenience formatter: first applies green highlight, then processes <br/>.
 * Use when both behaviors are desired in the same field.
 */
export function formatTextRich(text?: string | null): React.ReactNode[] {
  if (!text) return [];

  // First, mark green segments as tokens we can safely wrap later
  // We'll reuse the same logic but avoid double-splitting BR tags incorrectly
  const highlighted = formatGreenHighlight(text);

  // Now map over each node; if it's a Fragment with string content, split its BRs
  const result: React.ReactNode[] = [];
  highlighted.forEach((node, i) => {
    // Check if it's a React.Fragment containing a string
    if (React.isValidElement(node) && node.type === React.Fragment) {
      const fragmentContent = (node.props as any).children;
      if (typeof fragmentContent === 'string') {
        const withBreaks = formatTextWithBreaks(fragmentContent);
        result.push(...withBreaks);
        return;
      }
    }
    // Check if it's already a span with greenHighlight (don't process further)
    if (React.isValidElement(node) && (node.props as any)?.className === 'greenHighlight') {
      // Process BR tags inside green highlighted text too
      const greenContent = (node.props as any).children;
      if (typeof greenContent === 'string') {
        const withBreaks = formatTextWithBreaks(greenContent);
        result.push(
          React.cloneElement(node, { key: `green-${i}` }, ...withBreaks)
        );
        return;
      }
    }
    result.push(node);
  });
  return result;
}