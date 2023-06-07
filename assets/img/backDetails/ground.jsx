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

function SvgGround(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_2479)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_2479)" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M121.929 210.212a.08.08 0 01-.075-.107l52.082-147.164a.08.08 0 01.075-.053h55.599a.08.08 0 01.076.053l51.309 147.164a.08.08 0 01-.076.107h-158.99zm-44.849.575a.08.08 0 01-.075-.108l38.784-103.542a.08.08 0 01.075-.053h33.699a.08.08 0 01.075.108l-37.503 103.543a.08.08 0 01-.075.052H77.08z"
          fill="url(#paint1_linear_128_2479)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_2479"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D97845" />
          <Stop offset={1} stopColor="#D97845" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_2479"
          x1={77.2168}
          y1={62.8857}
          x2={135.668}
          y2={254.928}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_2479">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgGround
