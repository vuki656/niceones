import styled from 'styled-components'

type CardColorDividerProps = {
    borderColor?: string
}

export type PaletteIconProps = {
    paletteColor: string
}

export const CardRoot = styled('div')((props) => ({
    backgroundColor: props.theme.palette.white,
    borderRadius: 10,
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    overflow: 'hidden',
    position: 'relative',
}))

export const CardContent = styled('div')((props) => ({
    padding: props.theme.spacing.md,
}))

export const CardColorDivider = styled('div')<CardColorDividerProps>((props) => ({
    backgroundColor: props.borderColor,
    height: '4px',
}))

export const CardTitle = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
})

export const CardTitleText = styled('p')((props) => ({
    fontSize: '25px',
    fontWeight: 500,
    paddingLeft: props.theme.spacing.xs,
}))

export const CardDescription = styled('p')((props) => ({
    color: props.theme.palette.grey.light200,
    height: '80px',
    paddingBottom: props.theme.spacing.md,
    paddingTop: props.theme.spacing.md,
}))

export const CardBadges = styled('div')((props) => ({
    display: 'grid',
    rowGap: props.theme.spacing.sm,
}))

export const CardLink = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
})

export const CardLinkIcon = styled('div')((props) => ({
    alignItems: 'center',
    backgroundColor: '#ffd1d6',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: props.theme.spacing.sm,
    padding: props.theme.spacing.sm,
}))

export const CardLinkURL = styled('a')((props) => ({
    '&:hover': {
        color: props.theme.palette.black,
        fontWeight: 'bold',
    },
    color: props.theme.palette.grey.light200,
    cursor: 'pointer',
    transition: props.theme.transitions.create(['color', 'font-weight'], 200),

}))

export const CardColors = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
})

export const CardColorsIcon = styled('div')((props) => ({
    alignItems: 'center',
    backgroundColor: props.theme.palette.grey.light400,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: props.theme.spacing.sm,
    padding: props.theme.spacing.sm,
}))

export const CardColorsPalette = styled('div')((props) => ({
    columnGap: props.theme.spacing.sm,
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: '1fr',
}))

export const PaletteIcon = styled('div')<PaletteIconProps>((props) => ({
    backgroundColor: props.paletteColor,
    borderRadius: '100%',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    cursor: 'pointer',
    height: '30px',
    width: '30px',
}))
