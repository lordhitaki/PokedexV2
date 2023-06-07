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

function SvgNormal(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_2911)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_2911)" />
        <G clipPath="url(#clip1_128_2911)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M280.999 136.988c0 56.333-45.667 102-102 102-56.332 0-101.999-45.667-101.999-102 0-56.332 45.667-102 101.999-102 56.333 0 102 45.668 102 102zm-43.714 0c0 32.19-26.095 58.285-58.286 58.285-32.19 0-58.285-26.095-58.285-58.285s26.095-58.285 58.285-58.285c32.191 0 58.286 26.095 58.286 58.285z"
            fill="url(#paint1_linear_128_2911)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_2911"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#919AA2" />
          <Stop offset={1} stopColor="#919AA2" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_2911"
          x1={77.2168}
          y1={34.9861}
          x2={180.515}
          y2={281.043}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_2911">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
        <ClipPath id="clip1_128_2911">
          <Path fill="#fff" transform="translate(77 35)" d="M0 0H204V204H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgNormal
