import * as React from 'react';
import Svg, { G, Path, Defs, Pattern, Use, Image } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgElite04(props) {
  return (
    <Svg
      width={266}
      height={288}
      viewBox="0 0 266 288"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <G filter="url(#filter0_f_1203_27435)">
        <Path
          d="M70.162 269.796c-3.5-13 50.029-37.64 124.176-3.388 19.932 12.844-102.676 27.888-124.176 3.388z"
          fill="#F2F2F2"
        />
      </G>
      <Path fill="url(#pattern0)" d="M0 0H266V266H0z" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_1203_27435" transform="scale(.0125)" />
        </Pattern>
        <Image
          id="image0_1203_27435"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default SvgElite04;
