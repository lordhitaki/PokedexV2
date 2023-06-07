import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgFairy(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#EC8FE6" />
      <G clipPath="url(#clip0_1_126)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.006 9.43l1.604-.466 1.386 2.533a.005.005 0 00.008 0l1.385-2.533 1.604.465A.005.005 0 0037 9.423l-.465-1.572 2.463-1.347a.005.005 0 000-.008l-2.483-1.359.485-1.64a.005.005 0 00-.006-.006l-1.641.476-1.348-2.465a.005.005 0 00-.008 0l-1.348 2.465-1.642-.476a.005.005 0 00-.006.006l.486 1.64-2.484 1.359a.005.005 0 000 .008l2.464 1.347L31 9.423a.005.005 0 00.006.006zm1.245-2.913l1.136.622.622 1.136a.005.005 0 00.008 0l.622-1.136 1.136-.622a.005.005 0 000-.008l-1.136-.622-.622-1.136a.005.005 0 00-.008 0l-.622 1.136-1.136.622a.005.005 0 000 .008z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_126">
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

export default SvgFairy
