import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgRock(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#C5B78C" />
      <G clipPath="url(#clip0_1628_27325)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.718 6.28l-.001-.002.638-3.72c0-.002.002-.003.003-.003h.202c.002 0 .003.001.004.003L39 7.108 39 7.113l-1.06.828a.004.004 0 01-.005 0l-1.217-1.66zM28.98 8.748c0 .002.002.003.003.003l2.184.715h.004l4.883-3.372.001-.002.524-3.514a.004.004 0 00-.004-.004H32.25l-.003.001-3.266 3.94v2.233zm3.098.9l2.386.781h.004l2.841-2.038a.004.004 0 000-.005L36.246 6.8a.004.004 0 00-.005-.001l-4.162 2.848z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_27325">
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

export default SvgRock
