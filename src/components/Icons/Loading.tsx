import React from "react";

export const Loading = () => {
  return (
    <svg width="100px" height="100px" viewBox="0 0 51 50">
      <rect y="0" width="13" height="50" fill="black">
        <animate
          attributeName="height"
          values="50;10;50"
          begin="0s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="0;20;0"
          begin="0s"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>

      <rect x="19" y="0" width="13" height="50" fill="white">
        <animate
          attributeName="height"
          values="50;10;50"
          begin="0.2s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="0;20;0"
          begin="0.2s"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>

      <rect x="38" y="0" width="13" height="50" fill="black">
        <animate
          attributeName="height"
          values="50;10;50"
          begin="0.4s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="0;20;0"
          begin="0.4s"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};
