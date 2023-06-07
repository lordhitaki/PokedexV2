import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgPoison(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#B567CE" />
      <G clipPath="url(#clip0_1628_30292)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.356 9.185C38.366 8.377 39 7.21 39 5.913 39 3.476 36.761 1.5 34 1.5s-5 1.976-5 4.413c0 1.25.59 2.38 1.536 3.183a2.304 2.304 0 00-.089.639c0 .975.59 1.765 1.316 1.765.472 0 .887-.334 1.119-.835.232.501.646.835 1.118.835.43 0 .813-.277 1.053-.706.24.429.622.706 1.052.706.727 0 1.316-.79 1.316-1.765a2.32 2.32 0 00-.065-.55zM36.895 6c0 1.237-1.326 2.24-2.96 2.24-1.636 0-2.961-1.003-2.961-2.24 0-1.238 1.325-2.24 2.96-2.24s2.96 1.002 2.96 2.24z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_30292">
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

export default SvgPoison
