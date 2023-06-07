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

function SvgRock(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_3618)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_3618)" />
        <G clipPath="url(#clip1_128_3618)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M234.438 132.526a.074.074 0 01-.013-.056l13.014-75.888a.073.073 0 01.072-.061h4.119c.032 0 .06.02.069.05l29.321 92.838a.07.07 0 01-.024.079l-21.619 16.879a.072.072 0 01-.103-.014l-24.836-33.827zM76.602 182.834c0 .032.02.06.05.07l44.565 14.571a.073.073 0 00.064-.009l99.613-68.77a.07.07 0 00.03-.05l10.683-71.675a.073.073 0 00-.072-.084h-88.233a.074.074 0 00-.056.026L76.618 137.29a.072.072 0 00-.016.047v45.497zm63.185 18.354l48.686 15.948a.071.071 0 00.065-.01l57.965-41.578a.073.073 0 00.018-.1l-21.729-32.335a.072.072 0 00-.102-.019l-84.903 58.094z"
            fill="url(#paint1_linear_128_3618)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_3618"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C5B78C" />
          <Stop offset={1} stopColor="#C5B78C" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_3618"
          x1={76.8188}
          y1={56.5189}
          x2={144.609}
          y2={262.035}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_3618">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
        <ClipPath id="clip1_128_3618">
          <Path fill="#fff" transform="translate(77 35)" d="M0 0H204V204H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgRock
