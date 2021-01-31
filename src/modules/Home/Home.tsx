import * as React from 'react'

import { Card } from '../../components/Card'
import { websites } from '../../lib/websites'

import { HomeRoot } from './Home.styles'

export const Home: React.FunctionComponent = () => {
    return (
        <HomeRoot>
            {websites.map((website) => {
                return (
                    <Card
                        key={website.url}
                        website={website}
                    />
                )
            })}
        </HomeRoot>
    )
}
