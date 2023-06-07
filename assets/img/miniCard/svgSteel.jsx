import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgBackSteel(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#5A8EA2" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.006 36.315a.047.047 0 010-.048L32.352 8.342a.047.047 0 01.04-.024h32.396c.017 0 .033.01.041.024l16.165 27.925a.047.047 0 010 .048L64.828 64.209a.047.047 0 01-.04.023H32.391a.048.048 0 01-.041-.023L16.006 36.315zm47.553-.04c0 8.314-6.74 15.054-15.054 15.054s-15.054-6.74-15.054-15.054 6.74-15.053 15.054-15.053 15.054 6.74 15.054 15.053z"
        fill="url(#paint0_linear_1558_22195)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_22195"
          x1={15.8526}
          y1={8.31773}
          x2={50.2975}
          y2={79.2431}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgBackSteel
