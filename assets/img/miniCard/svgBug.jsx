import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgBackBug(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#91C12F" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.444 4.064a.15.15 0 01.207-.037l4.616 3.232a.15.15 0 01.036.207L57.88 16.64c3.123.998 5.25 2.074 5.25 2.074s-5.2 8.946-14.02 8.946c-8.822 0-15.09-8.338-15.09-8.338s2.223-1.418 5.518-2.634L32.492 8.29a.15.15 0 01.018-.21l4.316-3.622a.15.15 0 01.21.018l8.922 10.632a20.723 20.723 0 012.327-.134c1.129 0 2.256.085 3.357.23l7.802-11.141zm1.745 24.02c2.353-1.682 5.915-6.07 5.915-6.07s9.098 7.21 9.098 22.497C76.202 59.798 60.473 69 60.473 69s-7.515-7.59-9.36-17.21c-1.844-9.62 2.73-20.303 2.73-20.303s4.992-1.722 7.346-3.403zm-25.35 0c-2.355-1.682-5.916-6.07-5.916-6.07s-9.098 7.21-9.098 22.497C20.825 59.798 36.554 69 36.554 69s7.515-7.59 9.36-17.21c1.844-9.62-2.73-20.303-2.73-20.303s-4.992-1.722-7.346-3.403z"
        fill="url(#paint0_linear_1558_22545)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_22545"
          x1={20.6992}
          y1={3.99927}
          x2={67.6181}
          y2={74.8038}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgBackBug
