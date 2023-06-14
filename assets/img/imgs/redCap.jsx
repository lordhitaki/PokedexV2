import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

function SvgRedCap(props) {
  return (
    <Svg
      width={90}
      height={94}
      viewBox="0 0 90 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0.0654297 0.712891H92.6610297V93.308491H0.0654297z" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_1217_39347" transform="scale(.0125)" />
        </Pattern>
        <Image
          id="image0_1217_39347"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default SvgRedCap;
