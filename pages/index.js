import { useEffect } from "react"

import { useRouter } from "next/router"

// import constanta
import { ROUTER_PATH } from "@/components/constanta/route-path"

export default function Home() {

  const router = useRouter()

  useEffect(() => {
      router.push(ROUTER_PATH.CRM_PAGE)
  },[])


  return (
    <>
      <div>
        Dashboard Page
      </div>
    </>
  )
}
