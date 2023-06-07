import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgGary(props) {
  return (
    <Svg
      width={319}
      height={319}
      viewBox="0 0 319 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        fill="url(#pattern0)"
        d="M0.560791 0H318.975791V318.415H0.560791z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_1262_35332" transform="scale(.0125)" />
        </Pattern>
        <Image
          id="image0_1262_35332"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default SvgGary
