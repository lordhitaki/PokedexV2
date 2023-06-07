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

function SvgBackGhost(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#5269AD" />
      <G clipPath="url(#clip0_1558_33117)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M62.84 68.775c-5.864.3-12.576.3-14.857 0C30.19 66.434 16 53.425 16 35.84S30.55 4 48.5 4 81 18.255 81 35.84c0 8.178-3.147 15.636-8.32 21.275-1.405 1.532.522 2.606 2.48 3.697 1.921 1.07 3.871 2.157 2.738 3.708-1.25 1.709-8.02 3.895-15.058 4.255zM43.93 31.86c0 2.747-2.274 4.975-5.078 4.975-2.805 0-5.079-2.228-5.079-4.975 0-1.843 1.023-3.451 2.542-4.311a4.478 4.478 0 004.475 4.31h3.14zm15.739-4.311a4.477 4.477 0 01-4.475 4.31h-3.14c0 2.748 2.274 4.976 5.079 4.976 2.804 0 5.078-2.228 5.078-4.975 0-1.843-1.023-3.451-2.542-4.311z"
          fill="url(#paint0_linear_1558_33117)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_33117"
          x1={15.8526}
          y1={3.99927}
          x2={59.476}
          y2={81.2682}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1558_33117">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackGhost
