import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgBug(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#91C12F" />
      <G clipPath="url(#clip0_1628_32192)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.684 1.51a.023.023 0 01.032-.006l.71.497c.01.008.012.022.005.032l-.988 1.412c.48.153.808.319.808.319s-.8 1.376-2.157 1.376-2.322-1.283-2.322-1.283.342-.218.85-.405L31.536 2.16a.023.023 0 01.003-.032l.664-.557a.023.023 0 01.032.002L33.61 3.21a3.19 3.19 0 01.358-.02c.174 0 .347.013.516.035l1.2-1.714zm.268 3.695c.362-.258.91-.934.91-.934s1.4 1.11 1.4 3.462c0 2.351-2.42 3.767-2.42 3.767s-1.156-1.168-1.44-2.648c-.284-1.48.42-3.123.42-3.123s.768-.265 1.13-.524zm-3.9 0c-.362-.258-.91-.934-.91-.934s-1.4 1.11-1.4 3.462c0 2.351 2.42 3.767 2.42 3.767s1.156-1.168 1.44-2.648c.284-1.48-.42-3.123-.42-3.123s-.768-.265-1.13-.524z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_32192">
          <Path
            fill="#fff"
            transform="translate(29 1.5)"
            d="M0 0H10.0001V10.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgBug
