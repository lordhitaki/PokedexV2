import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgGround(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#D97845" />
      <G clipPath="url(#clip0_1628_27328)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.202 10.089a.004.004 0 01-.003-.005l2.553-7.214c0-.002.002-.003.003-.003h2.726c.002 0 .003.001.004.003L39 10.084a.004.004 0 01-.004.005h-7.794zm-2.198.028a.004.004 0 01-.004-.005l1.901-5.076.004-.002h1.652c.003 0 .005.002.004.005l-1.839 5.076a.004.004 0 01-.003.002h-1.715z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_27328">
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

export default SvgGround
