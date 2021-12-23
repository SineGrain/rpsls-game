import { createStitches } from '@stitches/react';


export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
        },
        fonts: {
            main: 'Barlow Semi Condensed, sans-serif'
        },
        fontSizes: {
            1: '12px',
            2: '16px',
            3: '25px',
        },
    },
    media: {
        mobile: '(min-width: 375px)',
        desktop: '(min-width: 1366px)'
    },
    utils: {
        icon: (iconName: string) => ({
            backgorundImage: `url(/image/icon-${iconName})`
        })
    }
});