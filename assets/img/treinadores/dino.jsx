import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgDino(props) {
  return (
    <Svg
      width={308}
      height={308}
      viewBox="0 0 308 308"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        fill="url(#pattern0)"
        d="M0.391846 0.414795H307.39284599999996V307.415795H0.391846z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_1262_35299" transform="scale(.0125)" />
        </Pattern>
        <Image
          id="image0_1262_35299"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default SvgDino
