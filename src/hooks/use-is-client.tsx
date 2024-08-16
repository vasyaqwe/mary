import { useEffect, useState } from "react"

export function useIsClient() {
   const [isClient, setIsClient] = useState(false)

   useEffect(() => {
      setIsClient(true)
   }, [])

   const innerWidth = !isClient ? 0 : window.innerWidth

   return { isClient, innerWidth }
}
