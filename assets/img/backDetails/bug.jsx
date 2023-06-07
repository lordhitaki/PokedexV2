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

function SvgBug(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_128_3946)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_128_3946)" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M213.345 35.203a.468.468 0 01.652-.115l14.485 10.142c.212.148.263.44.115.652l-20.161 28.792c9.801 3.131 16.479 6.51 16.479 6.51s-16.322 28.074-44.005 28.074c-27.683 0-47.354-26.166-47.354-26.166s6.975-4.452 17.314-8.27L128.757 48.47a.469.469 0 01.058-.66l13.546-11.366a.467.467 0 01.659.058l27.999 33.368a65.04 65.04 0 017.305-.423c3.542 0 7.081.27 10.535.726l24.486-34.97zm5.476 75.384c7.388-5.276 18.566-19.047 18.566-19.047s28.554 22.628 28.554 70.606c0 47.978-49.365 76.854-49.365 76.854s-23.585-23.819-29.375-54.013c-5.79-30.194 8.565-63.721 8.565-63.721s15.668-5.403 23.055-10.679zm-79.561 0c-7.387-5.276-18.566-19.047-18.566-19.047s-28.553 22.628-28.553 70.606c0 47.978 49.364 76.854 49.364 76.854s23.586-23.819 29.376-54.013c5.79-30.194-8.565-63.721-8.565-63.721s-15.668-5.403-23.056-10.679z"
          fill="url(#paint1_linear_128_3946)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_3946"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#91C12F" />
          <Stop offset={1} stopColor="#91C12F" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_128_3946"
          x1={92.3253}
          y1={35.0002}
          x2={207.076}
          y2={267.877}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_128_3946">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBug
