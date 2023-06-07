import * as React from "react"
import Svg, { Rect, Circle, Path } from "react-native-svg"

function SvgDragon(props) {
  return (
    <Svg
      width={156}
      height={36}
      viewBox="0 0 156 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={156} height={36} rx={18} fill="#0B6DC3" />
      <Circle cx={47.5} cy={18} r={14} fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.368 17.96c.122-.074.226-.23.31-.403 1.098.45 1.87 1.51 1.87 2.747 0 1.644-1.363 2.976-3.043 2.976-.69 0-1.326-.225-1.836-.603-.168-.08-.306-.155-.418-.218-.175-.096-.29-.16-.362-.15-.21.03-.149.222-.093.398.038.119.072.23.018.276-.056.047-.24-.128-.455-.332-.292-.28-.642-.613-.807-.512-.13.079-.004.294.151.556l.012.02c.065.111.14.224.21.328.14.21.254.379.198.407-.069.035-.547-.287-.95-.735-.154-.173-.305-.36-.445-.534-.306-.38-.561-.698-.704-.66-.172.045-.042.4.15.742.089.16.194.322.285.463.142.22.25.386.21.406-.052.028-.515-.424-.83-.994-.187-.338-.344-.712-.471-1.014-.138-.328-.24-.573-.308-.597-.235-.086-.235.393-.14 1.084.011.09.03.185.052.281.914 2.956 3.72 5.108 7.04 5.108 4.061 0 7.353-3.22 7.353-7.192 0-3.78-2.982-6.88-6.77-7.17.004-.178.097-.53.097-.53s.669-1.62.704-1.965l.008-.075c.042-.373.12-1.068-.478-1.068-.32 0-.468.237-.638.51-.065.103-.133.213-.216.315-.593.741-1.59 1.666-2.155 2.159-1.195 1.04-2.368 1.897-3.052 2.396-.31.227-.52.38-.586.443-.49.478-2.245 3.644-2.245 3.644s-.567 1.016-.366 1.222c.202.206.689.159.689.159s6.537-1.5 7.122-1.618c.157-.032.269-.05.354-.064.232-.039.274-.046.535-.205zm-4.622-1.927c-.35.334-.932 1.13-.932 1.13s1.081.067 1.677-.5c.596-.566.46-1.53.46-1.53s-.854.567-1.205.9z"
        fill="#0B6DC3"
      />
      <Path
        d="M73.728 12.77c1.036 0 1.941.2 2.716.602a4.15 4.15 0 011.806 1.708c.43.737.644 1.6.644 2.59 0 .99-.215 1.848-.644 2.576a4.198 4.198 0 01-1.806 1.68c-.775.383-1.68.574-2.716.574H70.55v-9.73h3.178zm0 8.428c1.139 0 2.011-.308 2.618-.924.607-.616.91-1.484.91-2.604 0-1.13-.303-2.011-.91-2.646-.607-.635-1.48-.952-2.618-.952h-1.582v7.126h1.582zm8.344-5.292c.233-.392.541-.695.924-.91.392-.224.854-.336 1.386-.336v1.652h-.406c-.626 0-1.102.159-1.428.476-.317.317-.476.868-.476 1.652v4.06h-1.596v-7.714h1.596v1.12zm3.245 2.702c0-.775.159-1.46.476-2.058a3.556 3.556 0 013.164-1.89c.607 0 1.134.121 1.582.364.457.233.821.527 1.092.882v-1.12h1.61V22.5h-1.61v-1.148c-.27.364-.64.667-1.106.91-.467.243-.999.364-1.596.364-.663 0-1.27-.168-1.82-.504a3.74 3.74 0 01-1.316-1.428c-.318-.616-.476-1.311-.476-2.086zm6.314.028c0-.532-.112-.994-.336-1.386a2.26 2.26 0 00-.854-.896 2.253 2.253 0 00-1.148-.308c-.41 0-.794.103-1.148.308-.355.196-.644.49-.868.882-.215.383-.322.84-.322 1.372 0 .532.107.999.322 1.4.224.401.513.71.868.924.364.205.746.308 1.148.308.41 0 .793-.103 1.148-.308a2.26 2.26 0 00.854-.896c.224-.401.336-.868.336-1.4zm6.814-3.976c.597 0 1.125.121 1.582.364.467.233.831.527 1.092.882v-1.12h1.61v7.84c0 .71-.149 1.34-.448 1.89-.299.56-.733.999-1.302 1.316-.56.317-1.232.476-2.016.476-1.045 0-1.913-.247-2.604-.742a2.69 2.69 0 01-1.176-1.988h1.582c.121.401.378.723.77.966.401.252.877.378 1.428.378.644 0 1.162-.196 1.554-.588.401-.392.602-.961.602-1.708v-1.288c-.271.364-.639.672-1.106.924-.457.243-.98.364-1.568.364a3.525 3.525 0 01-1.848-.504 3.74 3.74 0 01-1.316-1.428c-.317-.616-.476-1.311-.476-2.086 0-.775.159-1.46.476-2.058a3.556 3.556 0 013.164-1.89zm2.674 3.976c0-.532-.112-.994-.336-1.386a2.261 2.261 0 00-.854-.896 2.253 2.253 0 00-1.148-.308c-.41 0-.793.103-1.148.308-.355.196-.644.49-.868.882-.215.383-.322.84-.322 1.372 0 .532.107.999.322 1.4.224.401.513.71.868.924.364.205.747.308 1.148.308.41 0 .793-.103 1.148-.308.355-.205.639-.504.854-.896.224-.401.336-.868.336-1.4zm3.174-.028c0-.775.159-1.46.476-2.058a3.563 3.563 0 013.164-1.89c.607 0 1.134.121 1.582.364.458.233.822.527 1.092.882v-1.12h1.61V22.5h-1.61v-1.148c-.27.364-.639.667-1.106.91-.466.243-.998.364-1.596.364a3.43 3.43 0 01-1.82-.504 3.748 3.748 0 01-1.316-1.428c-.317-.616-.476-1.311-.476-2.086zm6.314.028c0-.532-.112-.994-.336-1.386a2.254 2.254 0 00-.854-.896 2.25 2.25 0 00-1.148-.308c-.41 0-.793.103-1.148.308a2.26 2.26 0 00-.868.882c-.214.383-.322.84-.322 1.372 0 .532.108.999.322 1.4.224.401.514.71.868.924.364.205.747.308 1.148.308a2.25 2.25 0 001.148-.308c.355-.205.64-.504.854-.896.224-.401.336-.868.336-1.4zm-4.368-4.648c.075-.541.252-.947.532-1.218.28-.28.63-.42 1.05-.42.178 0 .332.028.462.084.131.056.29.14.476.252.14.093.257.163.35.21.103.047.215.07.336.07.159 0 .29-.047.392-.14.112-.103.182-.252.21-.448h.896c-.074.541-.252.952-.532 1.232-.28.27-.63.406-1.05.406-.177 0-.336-.028-.476-.084a3.564 3.564 0 01-.462-.266 2.832 2.832 0 00-.392-.21.595.595 0 00-.294-.07.58.58 0 00-.406.154c-.102.103-.168.252-.196.448h-.896zm11.421 8.638a3.995 3.995 0 01-1.974-.49 3.633 3.633 0 01-1.386-1.4c-.336-.607-.504-1.307-.504-2.1 0-.784.172-1.48.518-2.086a3.572 3.572 0 011.414-1.4c.597-.327 1.264-.49 2.002-.49.737 0 1.404.163 2.002.49a3.584 3.584 0 011.414 1.4c.345.607.518 1.302.518 2.086 0 .784-.178 1.48-.532 2.086a3.722 3.722 0 01-1.456 1.414 4.185 4.185 0 01-2.016.49zm0-1.386c.41 0 .793-.098 1.148-.294.364-.196.658-.49.882-.882.224-.392.336-.868.336-1.428 0-.56-.108-1.031-.322-1.414a2.17 2.17 0 00-.854-.882 2.338 2.338 0 00-1.148-.294c-.411 0-.794.098-1.148.294-.346.196-.621.49-.826.882-.206.383-.308.854-.308 1.414 0 .83.21 1.475.63 1.932.429.448.966.672 1.61.672z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgDragon
