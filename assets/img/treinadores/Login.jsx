import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

function SvgLogin(props) {
  return (
    <Svg
      width={285}
      height={285}
      viewBox="0 0 285 285"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0.918335 0.415466H284.918335V284.415466H0.918335z" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_1262_35322" transform="scale(.0125)" />
        </Pattern>
        <Image
          id="image0_1262_35322"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default SvgLogin;
