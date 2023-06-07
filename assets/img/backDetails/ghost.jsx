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

function SvgGhost(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_4438)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_4438)" />
        <G clipPath="url(#clip1_128_4438)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M224.004 238.294c-18.401.942-39.467.942-46.626 0C121.533 230.947 77 190.117 77 134.928S122.667 35 179 35s102 44.74 102 99.928c0 25.668-9.878 49.075-26.114 66.773-4.408 4.806 1.641 8.176 7.787 11.601 6.027 3.36 12.148 6.771 8.591 11.638-3.92 5.363-25.17 12.223-47.26 13.354zm-59.348-115.857c0 8.623-7.135 15.614-15.937 15.614s-15.938-6.991-15.938-15.614c0-5.783 3.21-10.832 7.979-13.53.274 7.519 6.456 13.53 14.043 13.53h9.853zm49.397-13.53c-.275 7.519-6.457 13.53-14.043 13.53h-9.854c0 8.623 7.136 15.614 15.938 15.614s15.937-6.991 15.937-15.614c0-5.783-3.209-10.832-7.978-13.53z"
            fill="url(#paint1_linear_128_4438)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_4438"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5269AD" />
          <Stop offset={1} stopColor="#5269AD" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_4438"
          x1={77.2168}
          y1={34.9973}
          x2={180.515}
          y2={281.056}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_4438">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
        <ClipPath id="clip1_128_4438">
          <Path fill="#fff" transform="translate(77 35)" d="M0 0H204V204H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgGhost
