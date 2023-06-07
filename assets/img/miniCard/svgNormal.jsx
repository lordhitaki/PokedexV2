import * as React from "react"
import Svg, {
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function SvgBackNormal(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#919AA2" />
      <G clipPath="url(#clip0_1558_19336)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M81 36.496c0 17.95-14.551 32.5-32.5 32.5-17.95 0-32.5-14.55-32.5-32.5s14.55-32.5 32.5-32.5c17.949 0 32.5 14.55 32.5 32.5zm-13.929 0c0 10.257-8.314 18.571-18.571 18.571-10.257 0-18.571-8.314-18.571-18.571 0-10.257 8.314-18.571 18.57-18.571 10.258 0 18.572 8.314 18.572 18.57z"
          fill="url(#paint0_linear_1558_19336)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_19336"
          x1={15.8526}
          y1={3.99537}
          x2={59.4758}
          y2={81.2639}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1558_19336">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackNormal
