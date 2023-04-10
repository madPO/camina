import { wcagContrast, filterContrast } from 'culori';

export type themeMode = 'light' | 'dark' | 'darkest';

export const reference = {
    light: {
        gray: {
            50: 'rgb(255, 255, 255)',
            75: 'rgb(253, 253, 253)',
            100: 'rgb(248, 248, 248)',
            200: 'rgb(230, 230, 230)',
            300: 'rgb(213, 213, 213)',
            400: 'rgb(177, 177, 177)',
            500: 'rgb(144, 144, 144)',
            600: 'rgb(109, 109, 109)',
            700: 'rgb(70, 70, 70)',
            800: 'rgb(34, 34, 34)',
            900: 'rgb(0, 0, 0)',
        }        
    },
    dark: {
        gray: {
            50: 'rgb(29, 29, 29)',
            75: 'rgb(38, 38, 38)',
            100: 'rgb(50, 50, 50)',
            200: 'rgb(63, 63, 63)',
            300: 'rgb(84, 84, 84)',
            400: 'rgb(112, 112, 112)',
            500: 'rgb(144, 144, 144)',
            600: 'rgb(178, 178, 178)',
            700: 'rgb(209, 209, 209)',
            800: 'rgb(235, 235, 235)',
            900: 'rgb(255, 255, 255)',
        }
    },
    darkest: {
        gray: {
            50: 'rgb(0, 0, 0)',
            75: 'rgb(14, 14, 14)',
            100: 'rgb(29, 29, 29)',
            200: 'rgb(48, 48, 48)',
            300: 'rgb(75, 75, 75)',
            400: 'rgb(106, 106, 106)',
            500: 'rgb(141, 141, 141)',
            600: 'rgb(176, 176, 176)',
            700: 'rgb(208, 208, 208)',
            800: 'rgb(235, 235, 235)',
            900: 'rgb(255, 255, 255)',
        }
    }
}

export function getContrast() {
    let contrast = {};

    for (const mode in reference) {
        contrast[mode] = {};
        for (const color in reference[mode]) {
            contrast[mode][color] = {};
            for (const num in reference[mode][color]) {
                contrast[mode][color][num] = wcagContrast(reference[mode].gray["100"], reference[mode][color][num]);
            }
        }
    }
    
    return contrast;
}