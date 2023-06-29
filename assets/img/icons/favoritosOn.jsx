import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgFavoritosOn(props) {
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
        d="M29.523 6.53a7.793 7.793 0 00-11.022 0L17 8.032 15.498 6.53A7.794 7.794 0 004.476 17.552l1.502 1.502L17 30.076 28.02 19.053l1.502-1.502a7.792 7.792 0 000-11.022v0z"
        fill="#FD525C"
        stroke="#FD525C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgFavoritosOn;
