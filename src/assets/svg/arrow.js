import React from "react"

const Arrow = props => (
  <svg width={24} height={82} {...props}>
    <g fill="#090909" fillRule="evenodd">
      <path d="M11 0v68h2V0z" />
      <path d="M0 58h2l10 21.818L22 58h2L13 82h-2L0 58z" />
    </g>
  </svg>
)

export default Arrow
