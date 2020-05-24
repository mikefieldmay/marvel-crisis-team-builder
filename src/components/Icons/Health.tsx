import React from "react";

export const Health: React.FC<{ fill?: string }> = ({ fill = "#2DA8EC" }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g>
      <ellipse
        stroke="#000"
        ry="11.438"
        rx="11.469"
        cy="12.06"
        cx="12"
        fill={fill}
      />
      <path
        stroke="#000"
        fill="none"
        d="M.847 11.961l5.34.06M7.219 8.216l-1.5 3.812M10.344 20.653L7.094 8.591M12.844 4.153l-2.563 16.375"
      />
      <path
        stroke="#000"
        strokeWidth="null"
        fill="none"
        d="M12.8 4.27l3.838 11.516M16.344 15.591l2.25-3.938"
      />
      <path stroke="#000" fill="none" d="M18.344 12.028l5.25.063" />
    </g>
  </svg>
);
