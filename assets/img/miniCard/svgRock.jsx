import * as React from "react"
import Svg, {
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function SvgBackRock(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#C5B78C" />
      <G clipPath="url(#clip0_1558_31792)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.163 35.075a.024.024 0 01-.004-.018l4.147-24.18a.023.023 0 01.023-.02h1.312c.01 0 .02.007.022.017l9.343 29.58c.003.01 0 .02-.008.025l-6.888 5.379a.023.023 0 01-.033-.005l-7.913-10.778zm-50.29 16.03c0 .01.006.018.016.021l14.2 4.643a.023.023 0 00.02-.003l31.739-21.912a.023.023 0 00.01-.015L65.26 11a.023.023 0 00-.022-.027H37.124a.023.023 0 00-.018.008l-21.23 25.61a.023.023 0 00-.004.015v14.497zm20.132 5.847l15.513 5.082a.023.023 0 00.02-.003l18.47-13.248a.023.023 0 00.005-.032L63.09 38.448a.023.023 0 00-.032-.006l-27.053 18.51z"
          fill="url(#paint0_linear_1558_31792)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_31792"
          x1={15.7249}
          y1={10.8568}
          x2={45.462}
          y2={77.8941}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1558_31792">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackRock
