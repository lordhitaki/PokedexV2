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

function SvgBackFighter(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#CE416B" />
      <G clipPath="url(#clip0_1558_32768)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.201 9.404A7.173 7.173 0 0140.156 7.25h2.096a7.172 7.172 0 0111.723 2.167h1.755a7.171 7.171 0 0110.378 3.25h4.773c.04 0 .08.01.112.03a7.17 7.17 0 017.831 7.14V41.724c0 .13-.003.261-.01.391C78.382 57.031 64.972 69 48.49 69c-16.753 0-30.333-12.368-30.333-27.625 0-7.364 3.164-14.056 8.322-19.008-.013 7.18.108 14.602.668 14.475 1.496-.342.327-22.58.053-27.438z"
          fill="url(#paint0_linear_1558_32768)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_32768"
          x1={18.0203}
          y1={3.99927}
          x2={63.1459}
          y2={78.6004}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1558_32768">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackFighter
