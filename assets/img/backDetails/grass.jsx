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

function SvgGrass(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_390_12637)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_390_12637)" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M115.817 210.574c-.7-.659-1.393-1.33-2.077-2.015-36.132-36.132-36.132-94.714 0-130.846 36.132-36.132 151.263-38.549 151.263-38.549s15.715 133.263-20.417 169.395c-32.09 32.09-81.888 35.68-117.94 10.77l29.05-35.648 46.438-10.026-37.907-3.79 24.09-24.528 27.422-6.007-21.684-6.422 21.684-39.117-30.843 34.595-11.911-16.807 4.193 27.751-21.482 24.217-9.958-30.639v40.747l-29.921 36.919z"
          fill="url(#paint1_linear_390_12637)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_390_12637"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#63BC5A" />
          <Stop offset={1} stopColor="#63BC5A" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_390_12637"
          x1={86.8338}
          y1={39.1615}
          x2={191.745}
          y2={270.325}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_390_12637">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgGrass
