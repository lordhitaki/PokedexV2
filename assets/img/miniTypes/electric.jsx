import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgElectric(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#F4D23C" />
      <G clipPath="url(#clip0_1_123)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.98 1.511a.009.009 0 01.008-.011H35.5c.004 0 .007.002.008.006l1.614 5.212a.009.009 0 01-.009.011h-2.338a.004.004 0 00-.004.006l1.341 4.72c.003.01-.01.016-.015.008l-5.212-6.93a.009.009 0 01.007-.014h2.122a.004.004 0 00.005-.006l-1.04-3.002z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_123">
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

export default SvgElectric
