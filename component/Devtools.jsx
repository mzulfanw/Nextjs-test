import React, { useEffect } from 'react'
import { Suspense, lazy } from 'react'

// https://tanstack.com/query/v4/docs/react/devtools

const ReactQueryDevtoolsProduction = lazy(() => {
  import('@tanstack/react-query-devtools').then((d) => ({
    default: d.ReactQueryDevtools
  }))
})

function Devtools() {
  const [mm, setMm] = React.useState(false)

  useEffect(() => {
    setTimeout(() => {
      setMm(true)
    }, 3000)
  }, [])
  return (
    <Suspense fallback={null}>
      {
        mm && (
          <ReactQueryDevtoolsProduction />
        )
      }
    </Suspense>
  )
}

export default Devtools