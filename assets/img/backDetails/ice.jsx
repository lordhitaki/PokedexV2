import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  ClipPath
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgIce(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_3290)" filter="url(#filter0_d_128_3290)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_3290)" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M227.704 46.553l.627 55.124-48.079 23.08-.593-52.047 48.045-26.157z"
          fill="url(#paint1_radial_128_3290)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M275.902 133.418l-47.596 27.224-47.623-27.267 47.599-25.003 47.62 25.046z"
          fill="url(#paint2_radial_128_3290)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M172.219 133.418l-47.595 27.224L77 133.375l47.599-25.003 47.62 25.046z"
          fill="url(#paint3_radial_128_3290)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M124.084 46.33l49.4 24.467-1.263 53.317-46.643-23.1-1.494-54.683z"
          fill="url(#paint4_radial_128_3290)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M229.054 219.667l-49.401-24.466 1.263-53.318 46.644 23.101 1.494 54.683z"
          fill="url(#paint5_radial_128_3290)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125.797 220.165l-.628-55.124 48.08-23.08.592 52.047-48.044 26.157z"
          fill="url(#paint6_radial_128_3290)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_3290"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#73CEC0" />
          <Stop offset={1} stopColor="#73CEC0" stopOpacity={0.5} />
        </LinearGradient>
        <RadialGradient
          id="paint1_radial_128_3290"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(42.483 -16.17 133.623) scale(257.635 294.787)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint2_radial_128_3290"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(42.483 -16.17 133.623) scale(257.635 294.787)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint3_radial_128_3290"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(42.483 -16.17 133.623) scale(257.635 294.787)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint4_radial_128_3290"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(42.483 -16.17 133.623) scale(257.635 294.787)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint5_radial_128_3290"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(42.483 -16.17 133.623) scale(257.635 294.787)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint6_radial_128_3290"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(42.483 -16.17 133.623) scale(257.635 294.787)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <ClipPath id="clip0_128_3290">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgIce
