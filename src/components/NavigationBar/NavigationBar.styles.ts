import styled from 'styled-components'

export const NavigationBarRoot = styled('div')((props) => {
    return {
        alignItems: 'center',
        backgroundColor: props.theme.palette.white,
        borderBottom: `1px solid ${props.theme.palette.grey.light400}`,
        display: 'flex',
        flexDirection: 'row',
        height: '70px',
        justifyContent: 'flex-start',
        paddingLeft: props.theme.spacing.xl,
        paddingRight: props.theme.spacing.xl,
    }
})

export const NavigationBarTitle = styled('p')({
    fontSize: 30,
    fontWeight: 'bold',
    margin: 0,
})

export const NavigationBarDescription = styled('p')((props) => ({
    color: props.theme.palette.grey.light200,
    marginLeft: props.theme.spacing.md,
}))
