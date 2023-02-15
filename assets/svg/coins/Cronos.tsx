import React from 'react'

const Cronos = () => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={24} cy={24} r={24} fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.9999 8L11 15.9996V31.9994L24.9999 40L38.9998 31.9994V15.9996L24.9999 8Z"
        fill="#002D72"
      />
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.9999 8V40L38.9998 31.9994V15.9996L24.9999 8Z"
          fill="url(#paint0_linear_201_5013)"
        />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.9999 8L11 15.9996V31.9994L24.9999 40V8Z"
          fill="url(#paint1_linear_201_5013)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7476 15H30.2161L31.4782 20.3099H18.5331L19.7476 15ZM22.7639 24.0776L21.6222 21.112H28.401L27.2834 24.0776L27.6079 27.3906L24.9996 27.4027H22.4154L22.7639 24.0776ZM26.0938 30.9066V29.8546L28.4372 27.6182V24.0895L31.5023 22.1048L35 24.7238L30.2395 32.976H28.3529L26.0938 30.9066ZM15 24.7238L18.5089 22.1286L21.6101 24.0895V27.6182L23.9535 29.8546V30.9066L21.6946 33H19.7831L15 24.7238Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_201_5013"
          x1="43.0137"
          y1="36.5479"
          x2="43.0137"
          y2="11.3732"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#002D72" />
          <stop offset={1} stopColor="#002D72" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_201_5013"
          x1="29.0139"
          y1="36.5479"
          x2="29.0139"
          y2="11.3732"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#002D72" stopOpacity="0.01" />
          <stop offset={1} stopColor="#002D72" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Cronos
