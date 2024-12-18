import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

interface TreeIconProps {
  width?: number;
  height?: number;
}

function TreeIcon({ width = 69, height = 85, ...props }: TreeIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 69 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.25 46.25H5.362l16.589-20.435.661-.815h-8.597L34.5.774 54.985 25h-8.597l.661.815L63.638 46.25H50.7l.662.815L67.95 67.5H38.312v17h-7.624v-17H1.05l16.588-20.435.662-.815h-1.05z"
        fill="#02B598"
        stroke="url(#paint0_linear_2_138)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2_138"
          x1={34.5}
          y1={0}
          x2={34.5}
          y2={85}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D9D9D9" stopOpacity={0} />
          <Stop offset={1} stopColor="#02B598" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default TreeIcon;
