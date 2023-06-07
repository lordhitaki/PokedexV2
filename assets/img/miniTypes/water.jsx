import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgWater(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#5090D6" />
      <G clipPath="url(#clip0_1_129)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.246 8.268a3.238 3.238 0 01-3.244 3.232 3.238 3.238 0 01-3.244-3.232c0-1.736 3.068-6.503 3.237-6.764.003-.006.01-.006.014 0 .168.26 3.237 5.028 3.237 6.764zm-3.785 2.195c-1.646-.36-1.364-2.183-1.364-2.183s.449 1.1 1.54 1.457c1.09.357 2.409-.166 2.409-.166s-.939 1.253-2.585.893z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_129">
          <Path
            fill="#fff"
            transform="translate(29 1.5)"
            d="M0 0H10.0001V10.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgWater
