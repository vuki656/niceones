import styled from 'styled-components'

export const HomeRoot = styled('div')((props) => ({
    backgroundColor: '#f4f7fc',
    display: 'grid',
    gap: props.theme.spacing.md,
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    height: '100%',
    padding: props.theme.spacing.xxl,
    width: '100%',
}))
