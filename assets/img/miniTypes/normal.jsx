import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgNormal(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#919AA2" />
      <G clipPath="url(#clip0_1628_29977)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39 6.5a5 5 0 11-10 0 5 5 0 0110 0zm-2.143 0a2.857 2.857 0 11-5.714 0 2.857 2.857 0 015.714 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_29977">
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

export default SvgNormal
