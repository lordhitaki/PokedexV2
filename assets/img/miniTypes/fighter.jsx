import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgFighter(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#CE416B" />
      <G clipPath="url(#clip0_1628_28667)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.723 2.331A1.104 1.104 0 0132.716 2h.323a1.103 1.103 0 011.803.333h.27a1.103 1.103 0 011.597.5h.734c.007 0 .013.002.018.005a1.103 1.103 0 011.205 1.098V7.304l-.002.06c-.067 2.295-2.13 4.136-4.665 4.136-2.578 0-4.667-1.903-4.667-4.25 0-1.133.487-2.162 1.28-2.924-.002 1.104.017 2.246.103 2.227.23-.053.05-3.474.008-4.222z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_28667">
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

export default SvgFighter
