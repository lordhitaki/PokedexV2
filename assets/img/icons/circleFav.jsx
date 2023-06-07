import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgCircleFav(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_b_1260_36133)">
        <Circle cx={16} cy={16} r={16} fill="#000" fillOpacity={0.3} />
        <Circle cx={16} cy={16} r={15.25} stroke="#fff" strokeWidth={1.5} />
      </G>
      <Path
        d="M21.893 11.073a3.667 3.667 0 00-5.186 0L16 11.78l-.707-.707a3.667 3.667 0 10-5.186 5.187l.706.707L16 22.153l5.187-5.186.706-.707a3.666 3.666 0 000-5.187v0z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default SvgCircleFav