import * as React from 'react';
import Svg, { G, Path, Defs, Pattern, Use, Image } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgLoadSuccess02(props) {
  return (
    <Svg
      width={360}
      height={333}
      viewBox="0 0 360 333"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <G filter="url(#filter0_f_1203_28247)">
        <Path
          d="M229.747 301.041c5.45-23.781-77.898-68.853-193.35-6.197-31.035 23.496 159.874 51.015 193.35 6.197z"
          fill="#F2F2F2"
        />
      </G>
      <G filter="url(#filter1_f_1203_28247)">
        <Path
          d="M211.113 311.793c-2.435-11.123 34.797-32.205 86.369-2.898 13.864 10.99-71.415 23.861-86.369 2.898z"
          fill="#F2F2F2"
        />
      </G>
      <Path fill="url(#pattern0)" d="M-11 31.8242H275.41V318.23420000000004H-11z" />
      <Path fill="url(#pattern1)" d="M80.4922 0H398.7252V318.233H80.4922z" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_1203_28247" transform="scale(.0125)" />
        </Pattern>
        <Pattern id="pattern1" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image1_1203_28247" transform="scale(.0125)" />
        </Pattern>
        <Image
          id="image0_1203_28247"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,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"
        />
        <Image
          id="image1_1203_28247"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAE8UlEQVR4nO2cIVDjWBjHf7k5wUlkHVkXmTp6rriu67oU1Z5E4sKppep2HXKLopV1hyvuwBHFPEdwSOSteyfoS5M2abmBvnxvpr+ZDE3SQvqbf96XfEmAHTvqxKt7A/4vUXShq9ZNJifWv48zAo24IAgr36NUAtgV6YTAKLrQRpxSyVqJ5j22JP5i44+8h7y8txIE4dpd/SMRncBleevS1wpXl5/++TtJkmz1O/66zV/+ERgxt0lSmJeC2ASa9GXC7k5oRz16Q8Ug6q+8/zZJShM6nZ5sNYXiE2iS1wsaK8uWCYLwTUXmIxFbRCaTE88clgB8+X4NwDgOUCrJpmWMRFuITyCwImQcB6TJDQBn16DUiG73ovRz2y4iYhMIixQaQefTvUxcqp45u24QBCHd7gXT6QnT6Unh80qNtr6NTiTwWyekfdYC4PwcSIG9AeNxi5u//6X9+Td6fodx2snGwG0XD4PYKgyL0zelRtxffcuWmxT6YbswP047hc/bkOhEAoNgQPP4tCARFuKWsVlExI+Bk8liXFtOXp5Px8PCvFIjK7uwEwmE1xR++T6i00gZRD6jSQrAIPL5dDzk69d/gMXpnlJ1bq08NKDnY6IG9ONVrPPLo+hCh2GYTbVurVTiTqT1wywTVzJZR/QYWMUs7qMfZtn8j7BL/+AQapLoGnoW97V+mGU/AT3rxrp/cGg9ic4kMO5EOu5EGsAPGtxMxtm6x6uY8f0NvWbbehKdEBh3In3+14B2uMfjVQy8SjQiyw5rbOGEwOH1xGsen3I0vCRVz4V1fq7NVQdOCCS3Sx4NL1cOmgefz2jtNxjfl5+ZbBNnDqQBM74xSm/xPC+bb+0vUthrtrl8urO2TU4J7DXb0H8dA7XWeJ7Hj7ALwO3LM639BkfTIVhskojuxuTQALNuTJoqfD8AIE0Vty+vY6JJ4R/JFCx+LxcSqMMwJHzZK12Z331tywN3igi9ZruQPqDytU2cEJhUXIUz+H5gfewzOCGwf3C4kj6gdJltnBDYa85b9+lqky9NVW3pA/lFRENRnHltDlvqRnICNSwOnquoo/LmkShQA7rsLEMiknbhNyVOGrUncN7j0/2DwxV5VTKljH9Qv0A9iPysx7fMWyTNxdfWyq9LoLmyli04O180RS+f7t7UUbl9ebbefVnG+hgYdyLdDve4SX6urMuJ8NjQljfy6sa6wOH1BIgYRH5h+bxJWnk4Yrou8HpgXUfztAyrAs21jTS5KXSVq8bAMmkSUpfHqsDh9WSeQGCRNr0ufdKELWO7iHi5aXnZRkxLCxYVer4r785EltD9g8PS6prfrYFaKzDIFVhJPoUScE4grKawTkQL7B8cml5fAUmFRbRAF9gJfCcSBWqXWloSBRaoGgelIF6gdHYC34kTAst2Y98PSFPFrBtDjfdGOyFQMtIErq3AaarE9AEN0gSuw5tfAxaFSwJLSVNV66VQ5wSae6HzHZl5b3D3pNI66rx0uQ5pAr0NDVJx46A0gc4hUeCmFIq5rQNkCqxE4jjolECJOClwd01kMxvHQSlIFegMTgm8fLrLno2TglMCJeKkwNZ+Q0whkSqwsi+YfzpTgkRJd+mXkuy/3sm66Xm5upAoUIdhSEKpOC/Z/6kv5w0FCQVF4gPXy6dr+W3UYe6/+C7L3eI2VSJR4DrKzoVd+w478vwHBH0jPs/NUtQAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
}

export default SvgLoadSuccess02;
