import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgIce(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#73CEC0" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.388 2.066l.03 2.703L34.061 5.9l-.029-2.551 2.356-1.283zM38.75 6.325l-2.333 1.334-2.334-1.337 2.333-1.225 2.334 1.228zM33.668 6.325l-2.334 1.334L29 6.322l2.333-1.225 2.335 1.228zM31.308 2.056l2.422 1.199-.062 2.614-2.287-1.133-.073-2.68zM36.454 10.553l-2.422-1.2.062-2.613 2.286 1.132.074 2.68zM31.392 10.577l-.03-2.702 2.356-1.132.03 2.552-2.356 1.282z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgIce
