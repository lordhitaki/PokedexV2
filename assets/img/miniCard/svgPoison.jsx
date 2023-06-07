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

function SvgBackPoison(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#B567CE" />
      <G clipPath="url(#clip0_1558_17118)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70.313 53.95C76.877 48.7 81 41.118 81 32.685 81 16.843 66.45 4 48.5 4S16 16.843 16 32.685c0 8.129 3.83 15.468 9.985 20.687a14.953 14.953 0 00-.577 4.154C25.408 63.863 29.237 69 33.96 69c3.069 0 5.76-2.169 7.27-5.427C42.738 66.831 45.43 69 48.5 69c2.798 0 5.282-1.802 6.842-4.588C56.902 67.198 59.386 69 62.184 69c4.724 0 8.553-5.137 8.553-11.474 0-1.249-.149-2.451-.424-3.576zm-2.997-20.696c0 8.043-8.616 14.563-19.244 14.563S28.83 41.297 28.83 33.254c0-8.043 8.615-14.563 19.243-14.563 10.628 0 19.244 6.52 19.244 14.563z"
          fill="url(#paint0_linear_1558_17118)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_17118"
          x1={15.8526}
          y1={3.99927}
          x2={59.476}
          y2={81.2682}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1558_17118">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackPoison
