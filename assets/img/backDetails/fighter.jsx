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

function SvgFighter(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_3782)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_3782)" />
        <G clipPath="url(#clip1_128_3782)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M112.156 51.96C114.624 42.212 123.455 35 133.97 35c7.887 0 14.826 4.058 18.844 10.2h6.58a22.434 22.434 0 0116.118-6.8c9.265 0 17.223 5.6 20.672 13.6h5.509a22.394 22.394 0 0111.899-3.4c9.265 0 17.222 5.6 20.672 13.6h14.979c.128 0 .248.034.351.095a22.81 22.81 0 012.078-.095c12.427 0 22.501 10.074 22.501 22.502v67.473l.001.125-.001.125v.972c0 .412-.011.822-.033 1.23C272.786 201.434 230.697 239 178.973 239c-52.577 0-95.2-38.817-95.2-86.7 0-23.113 9.931-44.114 26.119-59.656-.04 22.533.341 45.828 2.095 45.428 4.698-1.071 1.027-70.862.169-86.112z"
            fill="url(#paint1_linear_128_3782)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_3782"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#CE416B" />
          <Stop offset={1} stopColor="#CE416B" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_3782"
          x1={83.9757}
          y1={34.9973}
          x2={192.252}
          y2={275.719}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_3782">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
        <ClipPath id="clip1_128_3782">
          <Path fill="#fff" transform="translate(77 35)" d="M0 0H204V204H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgFighter
