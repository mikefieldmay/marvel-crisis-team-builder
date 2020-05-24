import React from "react";

export const Threat: React.FC<{ fill?: string }> = ({ fill = "#2DA8EC" }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <ellipse
        stroke="#000"
        ry="11.406"
        rx="11.469"
        cy="11.872"
        cx="12"
        fill={fill}
      />
      <ellipse
        stroke="#000"
        ry="2.719"
        rx="2.656"
        cy="10.906"
        cx="11.969"
        fill="black"
      />
      <ellipse
        stroke="#000"
        ry="1.406"
        rx="1.469"
        cy="2.997"
        cx="16.312"
        fill="black"
      />
      <path stroke="#000" fill="none" d="M15.719 4.403l-2.313 3.938" />
      <path
        stroke="#000"
        strokeWidth="null"
        fill="none"
        d="M13.094 13.153l4.625 8.75"
      />
      <path stroke="#000" fill="none" d="M9.406 10.091l-8.062-1.75" />
      <path
        stroke="#000"
        strokeWidth=".5"
        fill="none"
        d="M10.156 13.153l-3.062 4M10.531 8.153l-1.625-4M14.469 11.091l5.375 1.187"
      />
      <ellipse
        stroke="#000"
        ry=".594"
        rx=".625"
        cy="4.122"
        cx="8.844"
        strokeWidth=".5"
        fill="black"
      />
      <ellipse
        ry=".625"
        rx=".594"
        cy="12.403"
        cx="20.312"
        strokeWidth=".5"
        stroke="#000"
        fill="black"
      />
      <ellipse
        ry=".625"
        rx=".594"
        cy="17.403"
        cx="6.938"
        strokeWidth=".5"
        stroke="#000"
        fill="black"
      />
      <ellipse
        stroke="#000"
        ry="1.406"
        rx="1.469"
        cy="20.497"
        cx="17.312"
        fill="black"
      />
      <ellipse
        stroke="#000"
        ry="1.156"
        rx="1.062"
        cy="8.435"
        cx="2.281"
        fill="black"
      />
    </g>
  </svg>
);
