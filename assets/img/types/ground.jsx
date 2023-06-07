import * as React from "react"
import Svg, { Rect, Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgGround(props) {
  return (
    <Svg
      width={127}
      height={36}
      viewBox="0 0 127 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={127} height={36} rx={18} fill="#D97845" />
      <Circle cx={28} cy={18} r={14} fill="#fff" />
      <G clipPath="url(#clip0_1628_26899)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.964 24.46a.007.007 0 01-.006-.01l4.595-12.984a.007.007 0 01.007-.005h4.906c.003 0 .005.002.006.005L37 24.45a.007.007 0 01-.006.01H22.964zm-3.957.05a.007.007 0 01-.007-.009l3.423-9.136a.007.007 0 01.006-.004h2.974c.005 0 .008.005.006.01L22.1 24.505a.007.007 0 01-.007.005h-3.086z"
          fill="#D97845"
        />
      </G>
      <Path
        d="M57.336 12.77v1.302h-2.59V22.5H53.15v-8.428h-2.604V12.77h6.79zm8.686 5.684c0 .29-.018.55-.056.784h-5.894c.047.616.276 1.11.686 1.484.411.373.915.56 1.512.56.859 0 1.466-.36 1.82-1.078h1.722a3.498 3.498 0 01-1.274 1.75c-.606.448-1.362.672-2.268.672-.737 0-1.4-.163-1.988-.49a3.663 3.663 0 01-1.372-1.4c-.326-.607-.49-1.307-.49-2.1 0-.793.159-1.489.476-2.086a3.445 3.445 0 011.358-1.4c.588-.327 1.26-.49 2.016-.49.728 0 1.377.159 1.946.476a3.35 3.35 0 011.33 1.344c.318.57.476 1.227.476 1.974zm-1.666-.504c-.009-.588-.219-1.06-.63-1.414-.41-.355-.919-.532-1.526-.532-.55 0-1.022.177-1.414.532-.392.345-.625.817-.7 1.414h4.27zm4.833-2.044c.233-.392.541-.695.924-.91.392-.224.854-.336 1.386-.336v1.652h-.406c-.625 0-1.101.159-1.428.476-.317.317-.476.868-.476 1.652v4.06h-1.596v-7.714h1.596v1.12zm5.373 0a2.47 2.47 0 01.924-.91c.392-.224.854-.336 1.386-.336v1.652h-.406c-.625 0-1.101.159-1.428.476-.317.317-.476.868-.476 1.652v4.06h-1.596v-7.714h1.596v1.12zm10.847 2.548c0 .29-.019.55-.056.784H79.46c.047.616.275 1.11.686 1.484.41.373.915.56 1.512.56.859 0 1.465-.36 1.82-1.078H85.2a3.499 3.499 0 01-1.274 1.75c-.607.448-1.363.672-2.268.672-.737 0-1.4-.163-1.988-.49a3.662 3.662 0 01-1.372-1.4c-.327-.607-.49-1.307-.49-2.1 0-.793.159-1.489.476-2.086a3.443 3.443 0 011.358-1.4c.588-.327 1.26-.49 2.016-.49.728 0 1.377.159 1.946.476.57.317 1.013.765 1.33 1.344.317.57.476 1.227.476 1.974zm-1.666-.504c-.01-.588-.22-1.06-.63-1.414-.41-.355-.92-.532-1.526-.532-.55 0-1.022.177-1.414.532-.392.345-.625.817-.7 1.414h4.27zm6.037 4.676a4.007 4.007 0 01-1.638-.322 2.96 2.96 0 01-1.134-.896 2.267 2.267 0 01-.448-1.274h1.652c.028.327.182.602.462.826.289.215.648.322 1.078.322.448 0 .793-.084 1.036-.252.252-.177.378-.401.378-.672 0-.29-.14-.504-.42-.644-.271-.14-.705-.294-1.302-.462a12.645 12.645 0 01-1.414-.462 2.538 2.538 0 01-.952-.686c-.262-.308-.392-.714-.392-1.218 0-.41.121-.784.364-1.12.242-.345.588-.616 1.036-.812.457-.196.98-.294 1.568-.294.877 0 1.582.224 2.114.672.541.439.83 1.04.868 1.806H91.04a1.137 1.137 0 00-.42-.826c-.252-.205-.593-.308-1.022-.308-.42 0-.742.08-.966.238a.737.737 0 00-.336.63c0 .205.074.378.224.518.149.14.331.252.546.336.214.075.532.173.952.294.56.15 1.017.303 1.372.462.364.15.676.373.938.672.261.299.396.695.406 1.19 0 .439-.122.83-.364 1.176-.243.345-.588.616-1.036.812-.439.196-.957.294-1.554.294zm6.54-6.538v4.27c0 .29.066.5.196.63.14.121.373.182.7.182h.98v1.33h-1.26c-.719 0-1.27-.168-1.652-.504-.383-.336-.574-.882-.574-1.638v-4.27h-.91v-1.302h.91v-1.918h1.61v1.918h1.876v1.302H96.32zm4.943-.182c.234-.392.542-.695.924-.91.392-.224.854-.336 1.386-.336v1.652h-.406c-.625 0-1.101.159-1.428.476-.317.317-.476.868-.476 1.652v4.06h-1.596v-7.714h1.596v1.12zm10.847 2.548c0 .29-.018.55-.056.784h-5.894c.047.616.276 1.11.686 1.484.411.373.915.56 1.512.56.859 0 1.466-.36 1.82-1.078h1.722a3.496 3.496 0 01-1.274 1.75c-.606.448-1.362.672-2.268.672-.737 0-1.4-.163-1.988-.49a3.667 3.667 0 01-1.372-1.4c-.326-.607-.49-1.307-.49-2.1 0-.793.159-1.489.476-2.086a3.45 3.45 0 011.358-1.4c.588-.327 1.26-.49 2.016-.49.728 0 1.377.159 1.946.476.57.317 1.013.765 1.33 1.344.318.57.476 1.227.476 1.974zm-1.666-.504c-.009-.588-.219-1.06-.63-1.414-.41-.355-.919-.532-1.526-.532-.55 0-1.022.177-1.414.532-.392.345-.625.817-.7 1.414h4.27z"
        fill="#000"
      />
      <Defs>
        <ClipPath id="clip0_1628_26899">
          <Path fill="#fff" transform="translate(19 9)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgGround
