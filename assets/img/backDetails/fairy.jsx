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

function SvgFairy(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_5094)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_5094)" />
        <G clipPath="url(#clip1_128_5094)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M117.93 196.757l32.72-9.488 28.262 51.674a.096.096 0 00.169 0l28.262-51.674 32.72 9.488a.097.097 0 00.12-.12l-9.489-32.073 50.249-27.483a.096.096 0 000-.169l-50.663-27.709 9.903-33.473a.097.097 0 00-.12-.12l-33.488 9.71-27.494-50.27a.096.096 0 00-.169 0l-27.494 50.27-33.488-9.71a.097.097 0 00-.12.12l9.904 33.473-50.664 27.709a.096.096 0 000 .169l50.249 27.483-9.489 32.073a.097.097 0 00.12.12zm25.391-59.408l23.18 12.678 12.678 23.18a.096.096 0 00.17 0l12.678-23.18 23.18-12.678a.097.097 0 000-.17l-23.18-12.678-12.678-23.18a.097.097 0 00-.17 0l-12.678 23.18-23.18 12.678a.097.097 0 000 .17z"
            fill="url(#paint1_linear_128_5094)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_5094"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EC8FE6" />
          <Stop offset={1} stopColor="#EC8FE6" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_5094"
          x1={77.2167}
          y1={34.9973}
          x2={180.512}
          y2={281.048}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_5094">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
        <ClipPath id="clip1_128_5094">
          <Path fill="#fff" transform="translate(77 35)" d="M0 0H204V204H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgFairy
