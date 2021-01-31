import NextHead from 'next/head'
import React from 'react'

import { Home } from '../modules/Home'

export default function HomePage() {
    return (
        <>
            <NextHead>
                <title>
                    Nice Ones
                </title>
            </NextHead>
            <Home />
        </>
    )
}
