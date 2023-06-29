import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgFavoritos(props) {
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
        d="M29.523 6.53a7.793 7.793 0 00-11.021 0L17 8.033l-1.502-1.501A7.794 7.794 0 004.477 17.552l1.502 1.502L17 30.076l11.022-11.022 1.502-1.502a7.793 7.793 0 000-11.021v0z"
        stroke="#fff"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgFavoritos;
