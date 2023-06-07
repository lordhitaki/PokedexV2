import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgPokedex(props) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 22.732c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        stroke="gray"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15.732a3 3 0 100-5.999 3 3 0 000 6v0z"
        stroke="gray"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M2 12.732h7m6 0h7" stroke="gray" strokeWidth={1.5} />
    </Svg>
  )
}

export default SvgPokedex
