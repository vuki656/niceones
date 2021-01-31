import Image from 'next/image'
import * as React from 'react'

import {
    CardBadges,
    CardColorDivider,
    CardColors,
    CardColorsIcon,
    CardColorsPalette,
    CardContent,
    CardDescription,
    CardLink,
    CardLinkIcon,
    CardLinkURL,
    CardRoot,
    CardTitle,
    CardTitleText,
    PaletteIcon,
} from './Card.styles'
import type { CardProps } from './Card.types'

export const Card: React.FunctionComponent<CardProps> = (props) => {
    const { website } = props

    const {
        description,
        name,
        bannerPath,
        faviconPath,
        url,
        color,
        palette,
    } = website

    const faviconSize = 25

    return (
        <CardRoot>
            <Image
                height={60}
                layout="responsive"
                quality={100}
                src={bannerPath}
                width={100}
            />
            <CardColorDivider borderColor={color} />
            <CardContent>
                <CardTitle>
                    <Image
                        height={faviconSize}
                        quality={100}
                        src={faviconPath}
                        width={faviconSize}
                    />
                    <CardTitleText>
                        {name}
                    </CardTitleText>
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
                <CardBadges>
                    <CardColors>
                        <CardColorsIcon>
                            <Image
                                height={13}
                                quality={100}
                                src="/brush.png"
                                width={13}
                            />
                        </CardColorsIcon>
                        <CardColorsPalette>
                            {palette?.map((paletteColor) => {
                                return (
                                    <PaletteIcon
                                        key={paletteColor}
                                        paletteColor={paletteColor}
                                    />
                                )
                            })}
                        </CardColorsPalette>
                    </CardColors>
                    <CardLink>
                        <CardLinkIcon>
                            <Image
                                height={13}
                                quality={100}
                                src="/link.png"
                                width={13}
                            />
                        </CardLinkIcon>
                        <CardLinkURL href={url}>
                            {url}
                        </CardLinkURL>
                    </CardLink>
                </CardBadges>
            </CardContent>
        </CardRoot>
    )
}
