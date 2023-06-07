import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgMeninaRosa(props) {
  return (
    <Svg
      width={252}
      height={252}
      viewBox="0 0 252 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        fill="url(#pattern0)"
        d="M0.918335 0.415466H251.918335V251.415466H0.918335z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_1262_35309" transform="scale(.0125)" />
        </Pattern>
        <Image
          id="image0_1262_35309"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default SvgMeninaRosa
