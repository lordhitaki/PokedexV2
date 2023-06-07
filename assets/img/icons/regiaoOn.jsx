import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function SvgRegiaoOn(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13 24.917c-9.208-8.125-8.667-10.292-9.75-14.084h19.5c0 4.875-4.333 10.834-9.75 14.084z"
        fill="#fff"
      />
      <Path
        d="M22.75 10.833H3.25c.18-2.889 2.167-9.208 9.75-9.75 7.042 0 9.57 6.5 9.75 9.75z"
        fill="#CD3131"
      />
      <Circle cx={13} cy={10.8333} r={3.25} fill="#fff" />
      <Path
        d="M22.75 10.833c0 7.584-9.75 14.084-9.75 14.084s-9.75-6.5-9.75-14.084a9.75 9.75 0 1119.5 0z"
        stroke="#173EA5"
        strokeWidth={1.625}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 14.083a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5v0z"
        stroke="#173EA5"
        strokeWidth={1.625}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.25 10.833h6.825m5.85 0h6.825"
        stroke="#173EA5"
        strokeWidth={1.625}
      />
    </Svg>
  )
}

export default SvgRegiaoOn
