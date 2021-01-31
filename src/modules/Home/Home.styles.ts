import styled from 'styled-components'

export const HomeRoot = styled('div')((props) => ({
    display: 'grid',
    gap: props.theme.spacing.lg,
    gridAutoRows: 'max-content',
    gridTemplateColumns: 'repeat(4, 1fr)',
    padding: props.theme.spacing.xl,
}))
