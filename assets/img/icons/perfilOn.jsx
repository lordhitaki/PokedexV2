import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgPerilOn(props) {
  return (
    <Svg
      width={32}
      height={35}
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_1260_36147)">
        <Rect
          x={9.57143}
          y={21.4285}
          width={12.8571}
          height={4.28571}
          rx={2.14286}
          fill="#CD3131"
        />
        <Path
          d="M23.955 7.045c4.393 4.393 4.393 11.517 0 15.91-4.393 4.393-11.517 4.393-15.91 0-4.393-4.393-4.393-11.517 0-15.91 4.393-4.393 11.517-4.393 15.91 0"
          stroke="#173EA5"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.487 10.405a3.516 3.516 0 11-4.973 4.973 3.516 3.516 0 014.973-4.973z"
          fill="#173EA5"
        />
        <Path
          d="M18.487 10.405a3.516 3.516 0 11-4.973 4.973 3.516 3.516 0 014.973-4.973M23.5 23.699c-1.794-1.889-4.69-3.074-7.5-3.074a9.806 9.806 0 00-7.134 3.074"
          stroke="#173EA5"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SvgPerilOn
