import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgStell(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#5A8EA2" />
      <G clipPath="url(#clip0_1628_27350)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.001 6.472a.007.007 0 010-.008l2.514-4.296a.007.007 0 01.007-.003h4.984c.002 0 .005 0 .006.003L39 6.464a.007.007 0 010 .008l-2.487 4.291a.007.007 0 01-.006.004h-4.984a.007.007 0 01-.006-.004L29 6.472zm7.316-.006a2.316 2.316 0 11-4.632 0 2.316 2.316 0 014.632 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_27350">
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

export default SvgStell
