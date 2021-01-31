import * as React from 'react'

import {
    NavigationBarRoot,
    NavigationBarTitle,
} from './NavigationBar.styles'

export const NavigationBar: React.FunctionComponent = () => {
    return (
        <NavigationBarRoot>
            <NavigationBarTitle>
                Nice Ones
            </NavigationBarTitle>
        </NavigationBarRoot>
    )
}
