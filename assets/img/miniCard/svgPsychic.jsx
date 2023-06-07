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

function SvgBackPsychic(props) {
  return (
    <Svg
      width={96}
      height={74}
      viewBox="0 0 96 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={1} width={95} height={74} rx={37} fill="#FA7179" />
      <G clipPath="url(#clip0_1558_32457)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.881 57.978s-8.196 6.574-24.506 3.854c-12.374-2.064-18.974-15.705-18.974-23.037 0-17.384 12.867-21.34 21.565-21.34S66.34 25.937 66.34 32.502c0 6.566-4.644 12.31-11.871 12.31s-9.368-5.075-9.368-9.74c0-4.664 3.774-6.307 7.216-6.307s4.62 2.938 4.62 5.464c0 2.525-1.959 3.43-3.593 3.43-1.635 0-1.796-.825-2.422-1.691-.626-.867.798-4.147-1.546-4.147-2.343 0-2.78 3.77-2.78 3.77s.854 7.28 7.873 7.154c7.018-.126 10.348-5.552 9.38-10.924-.967-5.372-6.18-11.08-15.33-9.927-9.15 1.154-12.887 10.399-11.24 20.279 1.647 9.88 13.483 15.605 22.79 13.545 9.306-2.06 18.575-8.797 18.575-25.879S63.848 2.49 46.208 4.181c-17.641 1.693-28.592 17.115-27.89 35.646.7 18.53 18.284 28.623 33.152 29.143 14.869.52 23.984-8.087 23.984-8.087s2.05-1.828 1.246-3.255c-.803-1.427-2.819.35-2.819.35z"
          fill="url(#paint0_linear_1558_32457)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1558_32457"
          x1={18.1486}
          y1={3.99927}
          x2={63.3738}
          y2={78.3918}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1558_32457">
          <Path fill="#fff" transform="translate(16 4)" d="M0 0H65V65H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBackPsychic
