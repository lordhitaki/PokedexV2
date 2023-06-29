import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgTabFav(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M29.523 6.53a7.792 7.792 0 00-11.021 0L17 8.034 15.498 6.53A7.794 7.794 0 004.477 17.552l1.501 1.502L17 30.076l11.022-11.022 1.501-1.502a7.79 7.79 0 000-11.021v0z"
        stroke="gray"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgTabFav;
