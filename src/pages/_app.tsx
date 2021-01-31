import {
    createTheme,
    GlobalStyles,
    ThemeProvider,
} from '@dvukovic/dujo-ui'
import type { AppProps } from 'next/app'
import * as React from 'react'
import styled from 'styled-components'

import { NavigationBar } from '../components/NavigationBar'

const Root = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
})

function MyApp(props: AppProps) {
    const {
        Component,
        pageProps,
    } = props

    const theme = createTheme()

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Root>
                <NavigationBar />
                <Component {...pageProps} />
            </Root>
        </ThemeProvider>
    )
}

export default MyApp
