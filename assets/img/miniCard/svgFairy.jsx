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

function SvgBackFairy(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#EC8FE6" />
      <G clipPath="url(#clip0_1558_32248)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.041 55.54l10.426-3.023 9.005 16.465a.03.03 0 00.054 0l9.005-16.465 10.426 3.023a.03.03 0 00.038-.038l-3.024-10.22 16.01-8.756a.03.03 0 000-.054L64.84 27.643l3.156-10.665a.03.03 0 00-.038-.039l-10.67 3.094-8.761-16.017a.03.03 0 00-.054 0l-8.76 16.017-10.67-3.094a.03.03 0 00-.039.039l3.156 10.665-16.143 8.829a.03.03 0 000 .054l16.01 8.756-3.023 10.22a.03.03 0 00.038.038zm8.09-18.929l7.387 4.04 4.04 7.386a.03.03 0 00.053 0l4.04-7.386 7.386-4.04a.03.03 0 000-.054l-7.386-4.04-4.04-7.385a.03.03 0 00-.054 0l-4.04 7.386-7.385 4.04a.03.03 0 000 .053z"
          fill="url(#paint0_linear_1558_32248)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_32248"
          x1={15.8526}
          y1={3.99927}
          x2={59.4746}
          y2={81.2656}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1558_32248">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackFairy
