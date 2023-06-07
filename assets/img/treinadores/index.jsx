import * as React from 'react';
import Svg, { G, Path, Defs, Pattern, Use, Image } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgIndex(props) {
  return (
    <Svg
      width={342}
      height={270}
      viewBox="0 0 342 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <G filter="url(#filter0_f_1203_27380)">
        <Path
          d="M34.162 251.796c-3.5-13 50.03-37.64 124.176-3.388 19.932 12.844-102.676 27.888-124.176 3.388z"
          fill="#F2F2F2"
        />
      </G>
      <Path fill="url(#pattern0)" d="M0 26H230.918V256.918H0z" />
      <G filter="url(#filter1_f_1203_27380)">
        <Path
          d="M150.162 251.796c-3.5-13 50.029-37.64 124.176-3.388 19.932 12.844-102.676 27.888-124.176 3.388z"
          fill="#F2F2F2"
        />
      </G>
      <Path fill="url(#pattern1)" d="M85 0H342V257H85z" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_1203_27380" transform="scale(.0125)" />
        </Pattern>
        <Pattern id="pattern1" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image1_1203_27380" transform="scale(.0125)" />
        </Pattern>
        <Image
          id="image0_1203_27380"
          width={75}
          height={90}
          xlinkHref="data:image/png;base64,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"
        />
        <Image
          id="image1_1203_27380"
          width={120}
          height={75}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default SvgIndex;
