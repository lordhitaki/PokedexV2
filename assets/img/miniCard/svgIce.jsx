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

function SvgBackIce(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#73CEC0" />
      <G clipPath="url(#clip0_1579_18931)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.72 54.197c.803-2.937-.756-8.974-.756-8.974s-1.131 4.918-2.898 6.736c-1.507 1.55-3.353 2.626-6.002 2.908 2.166-1.051 3.655-3.244 3.655-5.779 0-3.558-2.935-6.442-6.554-6.442-3.62 0-6.554 2.884-6.554 6.442 0 .972.22 1.893.611 2.72-2.264-1.804-2.62-4.696-2.62-4.696s-2.527 10.496 4.438 15.433c6.965 4.937 20.61.693 20.61.693s-19.527 13.74-33.996-1.214c-12.464-12.882-3.253-29.84-3.253-29.84s-.398 1.573-.398 3.4c0 1.826.99 3.215.99 3.215s2.954-6.225 5.253-8.757c2.175-2.397 4.902-4.34 7.258-6.018 1.813-1.293 3.406-2.428 4.357-3.492C50.101 14.672 46.888 4 46.888 4s5.907 5.208 7.556 11.933c.63 2.564.225 5.481-.137 8.09-.587 4.234-1.061 7.656 3.18 7.434 6.853-.359.898-10.925.898-10.925s15.545 8.17 14.384 22.461c-1.162 14.29-16.992 17.539-16.992 17.539s4.14-3.399 4.942-6.335z"
          fill="url(#paint0_linear_1579_18931)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1579_18931"
          x1={24.0137}
          y1={3.99927}
          x2={72.9863}
          y2={68.9993}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1579_18931">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackIce
