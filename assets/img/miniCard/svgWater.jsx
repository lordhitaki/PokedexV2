import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgBackWater(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#5090D6" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.596 47.991c0 11.601-9.44 21.006-21.085 21.006-11.645 0-21.085-9.405-21.085-21.006 0-11.283 19.944-42.271 21.038-43.962.025-.039.069-.039.094 0C49.65 5.72 69.596 36.709 69.596 47.99zm-24.6 14.272c-10.7-2.341-8.869-14.194-8.869-14.194s2.922 7.155 10.012 9.473c7.09 2.317 15.659-1.082 15.659-1.082s-6.102 8.144-16.802 5.803z"
        fill="url(#paint0_linear_1558_17928)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_17928"
          x1={27.3302}
          y1={3.99927}
          x2={77.7878}
          y2={61.9854}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgBackWater
