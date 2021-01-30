import type { AppProps } from 'next/app'
import * as React from 'react'

function MyApp(props: AppProps) {
    const {
        Component,
        pageProps,
    } = props

    return <Component {...pageProps} />
}

export default MyApp
