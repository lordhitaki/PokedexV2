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

function SvgStell(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_4274)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_4274)" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M77.02 136.419a.15.15 0 010-.151l51.297-87.642a.147.147 0 01.128-.074h101.672a.15.15 0 01.129.074l50.734 87.643a.152.152 0 010 .149l-50.734 87.544a.15.15 0 01-.129.074H128.445a.148.148 0 01-.128-.073L77.02 136.419zm149.242-.125c0 26.093-21.153 47.246-47.246 47.246-26.093 0-47.246-21.153-47.246-47.246 0-26.093 21.153-47.245 47.246-47.245 26.093 0 47.246 21.152 47.246 47.245z"
          fill="url(#paint1_linear_128_4274)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_4274"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5A8EA2" />
          <Stop offset={1} stopColor="#5A8EA2" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_4274"
          x1={77.2168}
          y1={48.5499}
          x2={156.754}
          y2={268.794}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_4274">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgStell
