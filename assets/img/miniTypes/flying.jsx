import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgFlying(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#89AAE3" />
      <G clipPath="url(#clip0_1628_26189)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.49 10.83c1.465 0 2.72-.813 3.237-1.968.007-.014-2.078.542-2.012.346.03-.088 1.308-.555 2.24-1.1.534-.313.78-.975.78-.975s-.9.438-1.357.549c-.918.224-1.727.2-1.727.176 0-.05 1.343-.305 3.209-1.443.878-.535 1.116-1.456 1.116-1.456s-.965.575-1.548.765c-1.384.45-2.646.585-2.646.524 0-.13 1.11-.435 2.289-1.006.612-.297 1.143-.685 1.757-1.116C38.834 3.421 39 2.164 39 2.164s-.992.64-1.476.852c-1.998.877-3.762 1.337-5.034 1.437-1.92.15-3.49 1.49-3.49 3.229s1.563 3.149 3.49 3.149z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1628_26189">
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

export default SvgFlying
