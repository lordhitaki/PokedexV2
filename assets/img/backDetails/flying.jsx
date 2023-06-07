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

function SvgFlying(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_2692)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_2692)" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M148.206 225.347c29.884 0 55.468-16.609 66.03-40.154.129-.287-42.405 11.054-41.049 7.045.606-1.79 26.68-11.315 45.676-22.425 10.918-6.386 15.946-19.904 15.946-19.904s-18.394 8.931-27.694 11.197c-18.739 4.566-35.235 4.074-35.235 3.599 0-1.029 27.391-6.234 65.461-29.433 17.907-10.912 22.771-29.707 22.771-29.707s-19.688 11.726-31.589 15.598c-28.224 9.181-53.979 11.948-53.979 10.706 0-2.66 22.665-8.893 46.697-20.538 12.495-6.054 23.316-13.964 35.856-22.76C277.616 74.18 281 48.547 281 48.547S260.762 61.6 250.886 65.935c-40.752 17.886-76.735 27.268-102.68 29.3C109.041 98.3 77 125.627 77 161.106s31.88 64.241 71.206 64.241z"
          fill="url(#paint1_linear_128_2692)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_2692"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#89AAE3" />
          <Stop offset={1} stopColor="#89AAE3" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_2692"
          x1={77.2168}
          y1={48.5445}
          x2={157.811}
          y2={270.056}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_2692">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgFlying
