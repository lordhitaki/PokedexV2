import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function SvgFire(props) {
  return (
    <Svg
      width={360}
      height={307}
      viewBox="0 0 360 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_388_7472)">
        <Circle cx={186} cy={22} r={249} fill="url(#paint0_linear_388_7472)" />
        <G clipPath="url(#clip1_388_7472)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M217.353 192.543c2.52-9.216-2.372-28.163-2.372-28.163s-3.548 15.435-9.093 21.14c-4.73 4.866-10.526 8.241-18.837 9.128 6.795-3.301 11.469-10.183 11.469-18.138 0-11.167-9.209-20.219-20.569-20.219-11.359 0-20.568 9.052-20.568 20.219 0 3.05.687 5.942 1.917 8.535-7.105-5.66-8.222-14.735-8.222-14.735s-7.934 32.939 13.927 48.433c21.86 15.495 64.684 2.177 64.684 2.177s-61.283 43.12-106.695-3.811c-39.118-40.428-10.21-93.652-10.21-93.652s-1.248 4.938-1.248 10.669c0 5.732 3.107 10.093 3.107 10.093s9.27-19.539 16.484-27.485c6.828-7.52 15.386-13.62 22.779-18.888 5.691-4.055 10.69-7.618 13.676-10.957 16.446-18.39 6.362-51.886 6.362-51.886s18.54 16.344 23.715 37.452c1.973 8.046.704 17.201-.431 25.388-1.842 13.29-3.331 24.029 9.979 23.332 21.508-1.126 2.818-34.286 2.818-34.286s48.789 25.643 45.144 70.492c-3.645 44.849-53.329 55.045-53.329 55.045s12.992-10.667 15.513-19.883z"
            fill="url(#paint1_linear_388_7472)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_388_7472"
          x1={77.5}
          y1={-19}
          x2={307.5}
          y2={271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF9D55" />
          <Stop offset={1} stopColor="#FF9D55" stopOpacity={0.5} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_388_7472"
          x1={102.662}
          y1={35.0002}
          x2={226.076}
          y2={255.283}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_388_7472">
          <Path fill="#fff" d="M0 0H360V307H0z" />
        </ClipPath>
        <ClipPath id="clip1_388_7472">
          <Path fill="#fff" transform="translate(77 35)" d="M0 0H204V204H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgFire
