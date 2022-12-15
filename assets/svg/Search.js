import React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";

const Search = (props) => {
  return (
    <Svg
      width={20}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse
        cx={9.789}
        cy={10.767}
        rx={8.142}
        ry={8.989}
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.4514 17.4851L18.6435 21"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Search;
