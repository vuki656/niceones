import styled from 'styled-components'

export const CardRoot = styled('div')((props) => ({
    backgroundColor: props.theme.palette.white,
    borderRadius: 10,
    boxShadow: '0 5px 12px 0 rgb(0 0 0 / 9%), 0 0 2px 0 rgb(0 0 0 / 0%)',
    height: '420px',
    overflow: 'hidden',
    position: 'relative',
}))

export const CardContent = styled('div')((props) => ({
    padding: props.theme.spacing.md,
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
    margin: 0,
    paddingLeft: props.theme.spacing.xs,
}))

export const CardDescription = styled('p')((props) => ({
    color: props.theme.palette.grey.light200,
    margin: 0,
    paddingBottom: props.theme.spacing.md,
    paddingTop: props.theme.spacing.md,
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
    borderRadius: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: props.theme.spacing.sm,
    padding: props.theme.spacing.sm,
}))

export const CardLinkURL = styled('a')((props) => ({
    '&:hover': {
        color: props.theme.palette.black,
    },
    color: props.theme.palette.grey.light300,
}))
