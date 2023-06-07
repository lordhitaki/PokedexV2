import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgLeaderGymOp2(props) {
  return (
    <Svg
      width={320}
      height={319}
      viewBox="0 0 320 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        fill="url(#pattern0)"
        d="M0.976318 0H319.391318V318.415H0.976318z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_1262_35331" transform="scale(.0125)" />
        </Pattern>
        <Image
          id="image0_1262_35331"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default SvgLeaderGymOp2
