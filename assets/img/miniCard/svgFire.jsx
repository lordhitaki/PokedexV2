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

function SvgBackFire(props) {
  return (
    <Svg
      width={108}
      height={88}
      viewBox="6 6 108 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={5} y={13} width={95} height={76} rx={37} fill="#FF9D55" />
      <G clipPath="url(#clip0_1558_21884)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.72 67.198c.803-2.937-.755-8.974-.755-8.974s-1.131 4.918-2.898 6.736c-1.507 1.55-3.353 2.626-6.002 2.908 2.165-1.051 3.654-3.244 3.654-5.779 0-3.558-2.934-6.442-6.553-6.442-3.62 0-6.554 2.884-6.554 6.442 0 .972.22 1.893.611 2.72-2.264-1.804-2.62-4.695-2.62-4.695s-2.528 10.495 4.438 15.432c6.965 4.937 20.61.693 20.61.693s-19.527 13.74-33.996-1.214c-12.464-12.882-3.253-29.84-3.253-29.84s-.398 1.573-.398 3.4c0 1.826.99 3.215.99 3.215s2.954-6.226 5.252-8.757c2.176-2.396 4.903-4.34 7.258-6.018 1.814-1.293 3.407-2.428 4.358-3.492 5.24-5.86 2.027-16.532 2.027-16.532s5.907 5.208 7.556 11.933c.629 2.564.225 5.481-.137 8.09-.587 4.234-1.062 7.656 3.18 7.434 6.853-.359.897-10.925.897-10.925s15.546 8.17 14.385 22.461c-1.162 14.29-16.992 17.539-16.992 17.539s4.139-3.399 4.942-6.335z"
          fill="url(#paint0_linear_1558_21884)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_21884"
          x1={28.0146}
          y1={17.0002}
          x2={76.9872}
          y2={82.0003}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1558_21884">
          <Path fill="#fff" transform="translate(20 17)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackFire
