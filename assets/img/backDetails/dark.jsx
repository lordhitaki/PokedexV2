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

function SvgDark(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_4602)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_4602)" />
        <G clipPath="url(#clip1_128_4602)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M168.397 215.432c3.876.594 7.845.901 11.887.901 43.032 0 77.916-34.884 77.916-77.916 0-43.033-34.884-77.917-77.916-77.917-2.887 0-5.738.157-8.543.463C193.087 77.135 207.2 105.15 207.2 137c0 33.485-15.599 62.73-38.803 78.432zM178.867 239c56.333 0 102-45.667 102-102s-45.667-102-102-102-102 45.667-102 102 45.667 102 102 102z"
            fill="url(#paint1_linear_128_4602)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_4602"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5A5465" />
          <Stop offset={1} stopColor="#5A5465" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_4602"
          x1={77.0839}
          y1={34.9973}
          x2={180.383}
          y2={281.056}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_4602">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
        <ClipPath id="clip1_128_4602">
          <Path fill="#fff" transform="translate(77 35)" d="M0 0H204V204H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgDark
