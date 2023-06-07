import * as React from "react"
import Svg, {
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function SvgBackFlying(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#89AAE3" />
      <G clipPath="url(#clip0_1579_33295)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.688 64.65c9.522 0 17.674-5.292 21.04-12.794.04-.092-13.512 3.522-13.08 2.244.193-.57 8.5-3.605 14.553-7.145 3.48-2.035 5.081-6.342 5.081-6.342s-5.86 2.846-8.824 3.568c-5.97 1.455-11.227 1.298-11.227 1.146 0-.327 8.728-1.986 20.858-9.377 5.706-3.477 7.255-9.466 7.255-9.466s-6.272 3.736-10.065 4.97c-8.992 2.925-17.199 3.807-17.199 3.411 0-.848 7.222-2.834 14.88-6.544 3.98-1.929 7.428-4.449 11.424-7.252C79.922 16.484 81 8.316 81 8.316s-6.448 4.16-9.595 5.54c-12.985 5.7-24.45 8.69-32.717 9.336C26.209 24.17 16 32.876 16 44.181 16 55.486 26.158 64.65 38.688 64.65z"
          fill="url(#paint0_linear_1579_33295)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1579_33295"
          x1={15.8526}
          y1={8.31578}
          x2={50.7159}
          y2={79.5684}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1579_33295">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackFlying
