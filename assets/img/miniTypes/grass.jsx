import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgGrass(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#63BC5A" />
      <G clipPath="url(#clip0_1628_30289)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.903 10.107a4.535 4.535 0 01-.102-6.513c1.771-1.771 7.415-1.89 7.415-1.89s.77 6.533-1 8.304a4.537 4.537 0 01-5.782.528l1.424-1.748 2.276-.491-1.858-.186 1.18-1.202 1.345-.295-1.063-.315 1.063-1.917-1.512 1.696-.584-.824.206 1.36-1.053 1.187L32.37 6.3v1.998l-1.467 1.81z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_30289">
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

export default SvgGrass
