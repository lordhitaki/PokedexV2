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

function SvgBackElectric(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="2 2 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#F4D23C" />
      <G clipPath="url(#clip0_1558_18637)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.368 4.074A.056.056 0 0135.42 4h22.83c.025 0 .047.016.054.04L68.79 37.917a.056.056 0 01-.053.073h-15.2a.028.028 0 00-.026.035l8.717 30.685c.017.06-.061.099-.098.05L28.254 23.71a.056.056 0 01.045-.089h13.794c.02 0 .033-.019.026-.037l-6.751-19.51z"
          fill="url(#paint0_linear_1558_18637)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_18637"
          x1={28.1512}
          y1={3.99928}
          x2={78.6605}
          y2={59.9982}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1558_18637">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackElectric
