import { memo } from "react"

interface paramsAppIcon {
  src: string,
  alt: string
}
export default memo( function AppIcon({ src, alt = "" }: paramsAppIcon) {
  return (
    <img 
      src={src}
      alt={alt}
      className="icono-de-aplicacion"
    />
  )
})
