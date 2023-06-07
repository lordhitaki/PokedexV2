import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgPsychic(props) {
  return (
    <Svg
      width={68}
      height={13}
      viewBox="0 0 68 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={68} height={13} rx={6.5} fill="#FA7179" />
      <G clipPath="url(#clip0_1_132)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.905 9.804s-1.261 1.012-3.77.593c-1.904-.317-2.92-2.416-2.92-3.544 0-2.674 1.98-3.283 3.318-3.283s2.211 1.305 2.211 2.315-.714 1.894-1.826 1.894-1.441-.78-1.441-1.499c0-.717.58-.97 1.11-.97.53 0 .71.452.71.84 0 .39-.3.528-.552.528-.252 0-.276-.127-.373-.26-.096-.133.123-.638-.237-.638s-.428.58-.428.58.131 1.12 1.211 1.1c1.08-.019 1.592-.853 1.443-1.68-.149-.826-.95-1.705-2.358-1.527-1.408.177-1.983 1.6-1.73 3.12.254 1.52 2.075 2.4 3.506 2.084 1.432-.317 2.858-1.354 2.858-3.982s-2.276-4.207-4.99-3.947c-2.714.26-4.398 2.633-4.29 5.484.107 2.85 2.812 4.403 5.1 4.484 2.287.08 3.69-1.245 3.69-1.245s.315-.28.192-.5c-.124-.22-.434.053-.434.053z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_132">
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

export default SvgPsychic
