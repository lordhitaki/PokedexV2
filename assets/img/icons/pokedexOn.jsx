import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function SvgPokedexOn(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.167 13a10.834 10.834 0 1021.667 0H2.166z" fill="#fff" />
      <Path d="M23.833 13a10.834 10.834 0 00-21.666 0h21.666z" fill="#CD3131" />
      <Circle cx={13.0002} cy={12.9995} r={3.25} fill="#fff" />
      <Path
        d="M13 23.833c5.983 0 10.833-4.85 10.833-10.833 0-5.983-4.85-10.834-10.833-10.834C7.017 2.166 2.167 7.016 2.167 13c0 5.983 4.85 10.833 10.833 10.833z"
        stroke="#173EA5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 16.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5v0z"
        stroke="#173EA5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M2.167 13H9.75m6.5 0h7.583" stroke="#173EA5" strokeWidth={1.5} />
    </Svg>
  )
}

export default SvgPokedexOn
