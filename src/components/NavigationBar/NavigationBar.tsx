import * as React from 'react'

import {
    NavigationBarDescription,
    NavigationBarRoot,
    NavigationBarTitle,
} from './NavigationBar.styles'

export const NavigationBar: React.FunctionComponent = () => {
    return (
        <NavigationBarRoot>
            <NavigationBarTitle>
                Nice Ones
            </NavigationBarTitle>
            <NavigationBarDescription>
                Cool looking websites
            </NavigationBarDescription>
        </NavigationBarRoot>
    )
}
