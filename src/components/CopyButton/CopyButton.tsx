import React, { useState } from 'react';
import './CopyButton.scss';

interface CopyButtonProps {
  className: string;
  color: string;
  toCopyData: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ className, color, toCopyData }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <button
      className={`CopyButton ${className} ${
        isCopied ? 'CopyButton--copied' : 'CopyButton--uncopied'
      }`}
      style={{ borderColor: color }}
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(String(toCopyData));
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      }}
    >
      <div className="CopyButton__icon" style={{ backgroundColor: color }} />
    </button>
  );
};
