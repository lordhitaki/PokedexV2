import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgFire(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#FF9D55" />
      <G clipPath="url(#clip0_1628_26186)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.88 9.223c.124-.452-.116-1.381-.116-1.381s-.174.757-.446 1.036a1.436 1.436 0 01-.923.448.99.99 0 00.562-.89 1 1 0 00-1.008-.99 1 1 0 00-1.009.99c0 .15.034.292.094.419-.348-.277-.403-.722-.403-.722s-.389 1.614.683 2.374 3.17.107 3.17.107-3.003 2.113-5.23-.187c-1.917-1.982-.5-4.591-.5-4.591s-.061.242-.061.523.152.495.152.495.455-.958.808-1.348c.335-.368.755-.667 1.117-.925.279-.2.524-.374.67-.538.806-.901.312-2.543.312-2.543s.909.801 1.163 1.836c.096.394.034.843-.021 1.244-.09.652-.164 1.178.489 1.144 1.054-.055.138-1.68.138-1.68s2.392 1.256 2.213 3.455c-.179 2.198-2.614 2.698-2.614 2.698s.637-.523.76-.974z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_26186">
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

export default SvgFire
