import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"
import SvgBackWater from "../miniCard/svgWater"

function SvgBackWater(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_390_9722)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_390_9722)" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M245.209 173.066c0 36.41-29.627 65.926-66.175 65.926-36.547 0-66.175-29.516-66.175-65.926 0-35.411 62.596-132.666 66.029-137.974.078-.12.215-.12.293 0 3.433 5.308 66.028 102.563 66.028 137.974zm-77.206 44.791c-33.58-7.348-27.834-44.546-27.834-44.546s9.17 22.455 31.422 29.729c22.252 7.274 49.143-3.394 49.143-3.394s-19.151 25.558-52.731 18.211z"
          fill="url(#paint1_linear_390_9722)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_390_9722"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5090D6" />
          <Stop offset={1} stopColor="#5090D6" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_390_9722"
          x1={113}
          y1={34.9988}
          x2={245}
          y2={238.999}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_390_9722">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackWater
