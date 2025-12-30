
import React from "react";

export function contentWithLineBreaks(content) {
  return content.split(/<br\s*\/?>/i).map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  )
  );
}