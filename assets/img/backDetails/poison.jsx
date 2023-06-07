import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgPoison(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_4766)" filter="url(#filter0_d_128_4766)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_4766)" />
        <G clipPath="url(#clip1_128_4766)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M247.46 191.765c20.6-16.472 33.54-40.271 33.54-66.738C281 75.307 235.333 35 179 35S77 75.306 77 125.027c0 25.511 12.022 48.544 31.339 64.926-1.17 4.042-1.813 8.439-1.813 13.036 0 19.888 12.018 36.011 26.843 36.011 9.632 0 18.08-6.807 22.815-17.032C160.92 232.193 169.367 239 179 239c8.781 0 16.577-5.656 21.474-14.401 4.897 8.745 12.693 14.401 21.473 14.401 14.825 0 26.843-16.123 26.843-36.011 0-3.919-.467-7.692-1.33-11.224zm-9.407-64.953c0 25.243-27.04 45.706-60.395 45.706-33.355 0-60.395-20.463-60.395-45.706 0-25.242 27.04-45.706 60.395-45.706 33.355 0 60.395 20.464 60.395 45.706z"
            fill="url(#paint1_linear_128_4766)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_4766"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B567CE" />
          <Stop offset={1} stopColor="#B567CE" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_4766"
          x1={77.2168}
          y1={34.9973}
          x2={180.515}
          y2={281.056}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_4766">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
        <ClipPath id="clip1_128_4766">
          <Path fill="#fff" transform="translate(77 35)" d="M0 0H204V204H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgPoison
