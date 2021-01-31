import Image from 'next/image'
import * as React from 'react'

import {
    CardContent,
    CardDescription,
    CardLink,
    CardLinkIcon,
    CardLinkURL,
    CardRoot,
    CardTitle,
    CardTitleText,
} from './Card.styles'
import type { CardProps } from './Card.types'

export const Card: React.FunctionComponent<CardProps> = (props) => {
    const { website } = props

    const {
        description,
        name,
        alt,
        bannerPath,
        faviconPath,
        url,
    } = website

    return (
        <CardRoot>
            <Image
                alt={alt}
                height={60}
                layout="responsive"
                quality={100}
                src={bannerPath}
                width={100}
            />
            <CardContent>
                <CardTitle>
                    <Image
                        height={32}
                        quality={100}
                        src={faviconPath}
                        width={32}
                    />
                    <CardTitleText>
                        {name}
                    </CardTitleText>
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
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
            </CardContent>
        </CardRoot>
    )
}
