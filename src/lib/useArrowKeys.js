import React from "react"

export const useArrowKeys = ({ left, right, up, down }) => {
  const navigateUsingKeys = ({ key }) => {
    switch (key) {
      case "ArrowLeft":
        if (left) left()
        break
      case "ArrowRight":
        if (right) right()
        break
      case "ArrowUp":
        if (up) up()
        break
      case "ArrowDown":
        if (down) down()
        break

      default:
        break
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", navigateUsingKeys)

    return () => {
      document.removeEventListener("keydown", navigateUsingKeys)
    }
  })
}
