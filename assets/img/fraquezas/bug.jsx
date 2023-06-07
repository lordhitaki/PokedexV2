import * as React from "react"
import Svg, { Rect, Circle, Path } from "react-native-svg"

function SvgBug(props) {
  return (
    <Svg
      width={156}
      height={36}
      viewBox="0 0 156 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={156} height={36} rx={18} fill="#91C12F" />
      <Circle cx={52} cy={18} r={14} fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.03 9.018a.041.041 0 01.058-.01l1.278.894a.041.041 0 01.01.058l-1.779 2.54a10.9 10.9 0 011.454.575s-1.44 2.477-3.883 2.477c-2.442 0-4.178-2.309-4.178-2.309s.616-.393 1.528-.73l-1.951-2.325a.041.041 0 01.005-.058l1.195-1.003a.041.041 0 01.058.005l2.47 2.944c.212-.024.428-.037.645-.037.313 0 .625.024.93.064l2.16-3.085zm.484 6.651c.651-.465 1.638-1.68 1.638-1.68s2.52 1.996 2.52 6.23c0 4.233-4.356 6.78-4.356 6.78s-2.082-2.101-2.592-4.765c-.511-2.664.755-5.623.755-5.623s1.383-.476 2.035-.942zm-7.02 0c-.652-.465-1.639-1.68-1.639-1.68s-2.52 1.996-2.52 6.23c0 4.233 4.357 6.78 4.357 6.78s2.08-2.101 2.592-4.765c.51-2.664-.756-5.623-.756-5.623s-1.383-.476-2.034-.942z"
        fill="#91C12F"
      />
      <Path
        d="M76.646 12.77v9.73H75.05v-9.73h1.596zm5.987 1.89c.607 0 1.148.126 1.624.378.486.252.864.625 1.134 1.12.271.495.406 1.092.406 1.792v4.55h-1.582v-4.312c0-.69-.172-1.218-.518-1.582-.345-.373-.816-.56-1.414-.56-.597 0-1.073.187-1.428.56-.345.364-.518.891-.518 1.582V22.5h-1.596v-7.714h1.596v.882c.262-.317.593-.565.994-.742a3.25 3.25 0 011.302-.266zm8 7.966a4.007 4.007 0 01-1.638-.322 2.96 2.96 0 01-1.134-.896 2.267 2.267 0 01-.448-1.274h1.652c.028.327.182.602.462.826.29.215.649.322 1.078.322.448 0 .793-.084 1.036-.252.252-.177.378-.401.378-.672 0-.29-.14-.504-.42-.644-.27-.14-.705-.294-1.302-.462a12.645 12.645 0 01-1.414-.462 2.538 2.538 0 01-.952-.686c-.261-.308-.392-.714-.392-1.218 0-.41.121-.784.364-1.12.243-.345.588-.616 1.036-.812.458-.196.98-.294 1.568-.294.877 0 1.582.224 2.114.672.541.439.83 1.04.868 1.806h-1.596a1.137 1.137 0 00-.42-.826c-.252-.205-.593-.308-1.022-.308-.42 0-.742.08-.966.238a.737.737 0 00-.336.63c0 .205.075.378.224.518.15.14.331.252.546.336.215.075.532.173.952.294.56.15 1.017.303 1.372.462.364.15.677.373.938.672.261.299.397.695.406 1.19 0 .439-.121.83-.364 1.176-.242.345-.588.616-1.036.812-.438.196-.956.294-1.554.294zm11.749-4.172c0 .29-.019.55-.056.784h-5.894c.046.616.275 1.11.686 1.484.41.373.914.56 1.512.56.858 0 1.465-.36 1.82-1.078h1.722a3.502 3.502 0 01-1.274 1.75c-.607.448-1.363.672-2.268.672-.738 0-1.4-.163-1.988-.49a3.663 3.663 0 01-1.372-1.4c-.327-.607-.49-1.307-.49-2.1 0-.793.158-1.489.476-2.086a3.445 3.445 0 011.358-1.4c.588-.327 1.26-.49 2.016-.49.728 0 1.376.159 1.946.476a3.357 3.357 0 011.33 1.344c.317.57.476 1.227.476 1.974zm-1.666-.504c-.01-.588-.22-1.06-.63-1.414-.41-.355-.92-.532-1.526-.532-.55 0-1.022.177-1.414.532-.392.345-.626.817-.7 1.414h4.27zm5.098-1.862v4.27c0 .29.066.5.196.63.14.121.374.182.7.182h.98v1.33h-1.26c-.718 0-1.269-.168-1.652-.504-.382-.336-.574-.882-.574-1.638v-4.27h-.91v-1.302h.91v-1.918h1.61v1.918h1.876v1.302h-1.876zm6.693 6.538a3.995 3.995 0 01-1.974-.49 3.633 3.633 0 01-1.386-1.4c-.336-.607-.504-1.307-.504-2.1 0-.784.173-1.48.518-2.086a3.584 3.584 0 011.414-1.4 4.105 4.105 0 012.002-.49c.738 0 1.405.163 2.002.49a3.572 3.572 0 011.414 1.4c.346.607.518 1.302.518 2.086 0 .784-.177 1.48-.532 2.086a3.715 3.715 0 01-1.456 1.414 4.18 4.18 0 01-2.016.49zm0-1.386c.411 0 .794-.098 1.148-.294.364-.196.658-.49.882-.882.224-.392.336-.868.336-1.428 0-.56-.107-1.031-.322-1.414a2.157 2.157 0 00-.854-.882 2.333 2.333 0 00-1.148-.294c-.41 0-.793.098-1.148.294a2.11 2.11 0 00-.826.882c-.205.383-.308.854-.308 1.414 0 .83.21 1.475.63 1.932.43.448.966.672 1.61.672z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgBug
