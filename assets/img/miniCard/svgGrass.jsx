import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgBackGrass(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="2 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#63BC5A" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.368 59.942a30.25 30.25 0 01-.662-.642c-11.513-11.512-11.513-30.178 0-41.69C39.218 6.095 75.902 5.325 75.902 5.325S80.91 47.788 69.397 59.3C59.172 69.525 43.305 70.67 31.818 62.732l9.256-11.359 14.797-3.194-12.079-1.208 7.676-7.815 8.738-1.914-6.91-2.046 6.91-12.464-9.828 11.023-3.795-5.355 1.336 8.842-6.845 7.716-3.173-9.763V48.18l-9.533 11.763z"
        fill="url(#paint0_linear_1558_30895)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_30895"
          x1={18.94}
          y1={5.32547}
          x2={62.5847}
          y2={76.8363}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgBackGrass
