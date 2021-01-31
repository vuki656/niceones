import styled from 'styled-components'

export const HomeRoot = styled('div')((props) => ({
    display: 'grid',
    gap: props.theme.spacing.lg,
    gridAutoRows: 'max-content',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    padding: props.theme.spacing.xl,
}))
