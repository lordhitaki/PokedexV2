import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgDark(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#5A5465" />
      <G clipPath="url(#clip0_1_96)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.48 10.345a3.82 3.82 0 10.164-7.572c1.046.792 1.738 2.166 1.738 3.727 0 1.641-.764 3.075-1.902 3.845zm.514 1.155a5 5 0 100-10 5 5 0 000 10z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_96">
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

export default SvgDark
