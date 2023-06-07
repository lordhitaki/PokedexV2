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

function SvgElectric(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_123_5488)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_123_5488)" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M137.786 35.233a.175.175 0 01.166-.233h71.65c.077 0 .145.05.168.123l32.91 106.328a.175.175 0 01-.168.227h-47.7c-.058 0-.1.055-.084.112l27.357 96.304c.054.187-.191.309-.308.153L115.461 96.864a.175.175 0 01.14-.28h43.293c.06 0 .102-.06.082-.117l-21.19-61.234z"
          fill="url(#paint1_linear_123_5488)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_123_5488"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F4D23C" />
          <Stop offset={1} stopColor="#F4D23C" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_123_5488"
          x1={115.561}
          y1={34.9973}
          x2={249.003}
          y2={233.954}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_123_5488">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgElectric
