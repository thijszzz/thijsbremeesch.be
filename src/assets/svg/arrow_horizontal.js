import React from "react"

const ArrowHorizontal = props => (
  <svg width={82} height={24} {...props}>
    <g fill="#090909" fillRule="evenodd">
      <path d="M82 11H14v2h68z" />
      <path d="M24 0v2L2.182 12 24 22v2L0 13v-2z" />
    </g>
  </svg>
)

export default ArrowHorizontal
