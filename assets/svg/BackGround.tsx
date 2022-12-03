const Background: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2560 1433"
      fill="100"
      width="currentParent"
      height="100%"
    >
      <mask
        id="mask0_112_325"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        width="currentParent"
        height="currentParent"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M208.576 1271.91C114.004 1258.21 35.3204 1193.4 7.5128 1102.86C-147.682 597.544 -593.854 -1039.77 139.942 -1042.69C786.85 -1045.26 2327.3 -326.899 3069.4 38.8623C3249.29 127.527 3253.5 376.234 3078.68 474.336L1435.97 1396.15C1386.79 1423.74 1329.72 1434.32 1273.79 1426.22L208.576 1271.91Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_112_325)">
        <g filter="url(#filter0_d_112_325)">
          <rect width="3026" height="1433.69" fill="url(#pattern1)" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_112_325"
          width="3034"
          height="1441.69"
          filterUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_112_325"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_112_325"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_112_325" transform="scale(0.000391543 0.000818331)" />
        </pattern>
        <image
          id="image0_112_325"
          width="2554"
          height="1222"
          xlinkHref={
          }
        />
      </defs>
    </svg>
  )
}

export default Background