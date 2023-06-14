import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgLoadSucess(props) {
  return (
    <Svg
      width={437}
      height={427}
      viewBox="0 0 437 427"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M133.6 196.341l85.683 83.326L393.394 110.39C357.551 53.266 293.033 15 219.169 15 106.4 15 15 103.862 15 213.5S106.4 412 219.169 412C324.248 412 410.703 334.806 422 235.556"
        stroke="url(#paint0_linear_0_3)"
        strokeWidth={29.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_3"
          x1={94.0146}
          y1={15}
          x2={196.078}
          y2={301.151}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#173EA5" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#173EA5" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgLoadSucess;
