import React from "react";
import Svg, { Path } from "react-native-svg";

const Home = (props) => {
  return (
    <Svg
      width={20}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.5244 22H14.7816H7.34851H5.60571C3.86836 22 2.45996 20.4607 2.45996 18.5618V9.84736C2.46665 9.09967 2.78809 8.39702 3.33136 7.94256L9.26559 2.6853C10.3098 1.77157 11.7941 1.77157 12.8383 2.6853L18.7987 7.93303C19.3399 8.38935 19.6608 9.09083 19.6701 9.83784V18.5618C19.6701 20.4607 18.2617 22 16.5244 22Z"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Home;
