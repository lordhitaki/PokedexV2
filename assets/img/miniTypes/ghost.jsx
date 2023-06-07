import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgGhost(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#5269AD" />
      <G clipPath="url(#clip0_1628_29295)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.206 11.465c-.902.047-1.935.047-2.286 0-2.737-.36-4.92-2.361-4.92-5.067C29 3.693 31.239 1.5 34 1.5s5 2.193 5 4.898a4.825 4.825 0 01-1.28 3.274c-.216.235.08.4.382.568.295.165.595.332.42.57-.191.264-1.233.6-2.316.655zm-2.91-5.679c0 .423-.349.766-.78.766a.773.773 0 01-.782-.766c0-.283.158-.53.392-.663a.689.689 0 00.688.663h.483zm2.422-.663a.689.689 0 01-.688.663h-.483c0 .423.35.766.781.766a.773.773 0 00.781-.766.762.762 0 00-.39-.663z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_29295">
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

export default SvgGhost
