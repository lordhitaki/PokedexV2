import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgBackGround(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#D97845" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.316 59.828a.026.026 0 01-.024-.034l16.594-46.89a.026.026 0 01.024-.017h17.716c.01 0 .02.007.024.017l16.348 46.89a.025.025 0 01-.024.034H30.316zm-14.29.184a.026.026 0 01-.024-.035l12.357-32.991a.026.026 0 01.024-.017h10.738c.017 0 .03.018.023.034L27.195 59.995a.025.025 0 01-.024.017H16.026z"
        fill="url(#paint0_linear_1558_19217)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_19217"
          x1={15.8526}
          y1={12.8862}
          x2={41.7516}
          y2={76.1608}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgBackGround
