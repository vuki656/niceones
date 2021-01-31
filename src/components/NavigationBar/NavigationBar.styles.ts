import styled from 'styled-components'

export const NavigationBarRoot = styled('div')((props) => {
    return {
        alignItems: 'center',
        borderBottom: `1px solid ${props.theme.palette.grey.light100}`,
        display: 'flex',
        flexDirection: 'row',
        height: '50px',
        justifyContent: 'flex-start',
    }
})
