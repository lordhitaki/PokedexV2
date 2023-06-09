import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgGoogle(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M26.892 11.34H25.8v-.056h-12.22v5.432h7.673c-1.12 3.161-4.128 5.431-7.674 5.431a8.147 8.147 0 010-16.294c2.077 0 3.966.784 5.405 2.063l3.84-3.84A13.516 13.516 0 0013.579.422C6.08.422 0 6.502 0 14 0 21.5 6.08 27.578 13.578 27.578c7.499 0 13.578-6.08 13.578-13.578 0-.91-.093-1.799-.264-2.66z"
        fill="#FFC107"
      />
      <Path
        d="M1.566 7.68l4.461 3.272a8.143 8.143 0 017.551-5.099c2.077 0 3.967.784 5.405 2.064l3.84-3.841A13.515 13.515 0 0013.579.422C8.364.422 3.84 3.367 1.566 7.68z"
        fill="#FF3D00"
      />
      <Path
        d="M13.579 27.578c3.507 0 6.694-1.342 9.103-3.525l-4.202-3.556a8.086 8.086 0 01-4.901 1.65c-3.532 0-6.53-2.252-7.66-5.395L1.49 20.164c2.247 4.397 6.81 7.414 12.088 7.414z"
        fill="#4CAF50"
      />
      <Path
        d="M26.892 11.342H25.8v-.057h-12.22v5.432h7.673a8.174 8.174 0 01-2.775 3.782l.002-.002 4.203 3.557c-.298.27 4.474-3.264 4.474-10.053 0-.91-.093-1.8-.264-2.66z"
        fill="#1976D2"
      />
    </Svg>
  )
}

export default SvgGoogle
