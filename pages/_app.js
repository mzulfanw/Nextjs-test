// Setup React Query Hydrate 
import { useState } from 'react'
import PropTypes from 'prop-types'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '@/lib/react-query-helper'
// import Devtools from '@/component/Devtools'
import Head from 'next/head'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

function MyApp({
  Component,
  pageProps
}) {
  const [queryClient] = useState(() => new QueryClient(config))

  return (
    <QueryClientProvider
      client={queryClient}
    >
      <Head>
        <title>Next JS - React Query - Tailwindcss</title>
      </Head>
      <Hydrate
        state={pageProps.dehydratedState}
      >
        <Toaster
          position='top-right'
          reverseOrder={false}
          containerStyle={{ top: '90px' }}
        />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object
}

export default MyApp