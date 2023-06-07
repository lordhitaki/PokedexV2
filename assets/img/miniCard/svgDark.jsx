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

function SvgBackDark(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#5A5465" />
      <G clipPath="url(#clip0_1558_31937)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.121 61.49c1.235.19 2.5.288 3.788.288 13.711 0 24.826-11.115 24.826-24.827 0-13.71-11.115-24.826-24.826-24.826-.92 0-1.828.05-2.722.148 6.801 5.152 11.298 14.079 11.298 24.227 0 10.67-4.97 19.987-12.364 24.99zM48.457 69c17.95 0 32.5-14.55 32.5-32.5S66.407 4 48.457 4c-17.949 0-32.5 14.55-32.5 32.5S30.509 69 48.458 69z"
          fill="url(#paint0_linear_1558_31937)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_31937"
          x1={15.8101}
          y1={3.99927}
          x2={59.4335}
          y2={81.2682}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1558_31937">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackDark
