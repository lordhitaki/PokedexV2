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

function SvgPsychic(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_4930)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_4930)" />
        <G clipPath="url(#clip1_128_4930)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M258.658 204.406s-25.723 20.631-76.912 12.094c-38.835-6.478-59.548-49.288-59.548-72.3 0-54.558 40.38-66.973 67.679-66.973 27.3 0 45.109 26.615 45.109 47.223 0 20.607-14.575 38.631-37.257 38.631-22.681 0-29.399-15.923-29.399-30.563 0-14.64 11.844-19.797 22.646-19.797 10.802 0 14.501 9.222 14.501 17.148 0 7.927-6.15 10.765-11.279 10.765-5.13 0-5.637-2.588-7.6-5.308-1.964-2.719 2.504-13.013-4.852-13.013-7.355 0-8.726 11.834-8.726 11.834s2.682 22.844 24.709 22.45c22.028-.395 32.477-17.424 29.441-34.284-3.037-16.86-19.4-34.776-48.117-31.156-28.717 3.62-40.442 32.636-35.274 63.644 5.168 31.009 42.316 48.975 71.523 42.511 29.208-6.464 58.299-27.609 58.299-81.22S227.17 30.256 171.805 35.567c-55.365 5.31-89.733 53.714-87.533 111.872 2.2 58.158 57.384 89.833 104.049 91.465 46.665 1.633 75.272-25.38 75.272-25.38s6.434-5.737 3.911-10.217c-2.522-4.48-8.846 1.099-8.846 1.099z"
            fill="url(#paint1_linear_128_4930)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_4930"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FA7179" />
          <Stop offset={1} stopColor="#FA7179" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_4930"
          x1={84.3731}
          y1={34.9944}
          x2={192.998}
          y2={275.283}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_4930">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
        <ClipPath id="clip1_128_4930">
          <Path fill="#fff" transform="translate(77 35)" d="M0 0H204V204H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgPsychic
