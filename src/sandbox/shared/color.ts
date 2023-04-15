import { converter } from 'culori'

export type themeMode = 'light' | 'dark' | 'darkest'
const oklch = converter('oklch')

export const reference: {
  [mode: string]: {
    background: {
      [index: number]: { l: number; c: number; h: number }
    }
    brand: {
      [index: number]: { l: number; c: number; h: number }
    }
  }
} = {
  light: {
    background: {
      50: oklch('rgb(255, 255, 255)'),
      75: oklch('rgb(253, 253, 253)'),
      100: oklch('rgb(248, 248, 248)'),
      200: oklch('rgb(230, 230, 230)'),
      300: oklch('rgb(213, 213, 213)'),
      400: oklch('rgb(177, 177, 177)'),
      500: oklch('rgb(144, 144, 144)'),
      600: oklch('rgb(109, 109, 109)'),
      700: oklch('rgb(70, 70, 70)'),
      800: oklch('rgb(34, 34, 34)'),
      900: oklch('rgb(0, 0, 0)'),
    },
    brand: {
      100: oklch('rgb(255, 235, 231)'),
      200: oklch('rgb(255, 221, 214)'),
      300: oklch('rgb(255, 205, 195)'),
      400: oklch('rgb(255, 183, 169)'),
      500: oklch('rgb(255, 155, 136)'),
      600: oklch('rgb(255, 124, 101)'),
      700: oklch('rgb(247, 92, 70)'),
      800: oklch('rgb(234, 56, 41)'),
      900: oklch('rgb(211, 21, 16)'),
      1000: oklch('rgb(180, 0, 0)'),
      1100: oklch('rgb(147, 0, 0)'),
      1200: oklch('rgb(116, 0, 0)'),
      1300: oklch('rgb(89, 0, 0)'),
    },
  },
  dark: {
    background: {
      50: oklch('rgb(29, 29, 29)'),
      75: oklch('rgb(38, 38, 38)'),
      100: oklch('rgb(50, 50, 50)'),
      200: oklch('rgb(63, 63, 63)'),
      300: oklch('rgb(84, 84, 84)'),
      400: oklch('rgb(112, 112, 112)'),
      500: oklch('rgb(144, 144, 144)'),
      600: oklch('rgb(178, 178, 178)'),
      700: oklch('rgb(209, 209, 209)'),
      800: oklch('rgb(235, 235, 235)'),
      900: oklch('rgb(255, 255, 255)'),
    },
    brand: {
      100: oklch('rgb(123, 0, 0)'),
      200: oklch('rgb(141, 0, 0)'),
      300: oklch('rgb(165, 0, 0)'),
      400: oklch('rgb(190, 4, 3)'),
      500: oklch('rgb(215, 25, 19)'),
      600: oklch('rgb(234, 56, 41)'),
      700: oklch('rgb(246, 88, 67)'),
      800: oklch('rgb(255, 117, 94)'),
      900: oklch('rgb(255, 149, 129)'),
      1000: oklch('rgb(255, 176, 161)'),
      1100: oklch('rgb(255, 201, 189)'),
      1200: oklch('rgb(255, 222, 216)'),
      1300: oklch('rgb(255, 241, 238)'),
    },
  },
  darkest: {
    background: {
      50: oklch('rgb(0, 0, 0)'),
      75: oklch('rgb(14, 14, 14)'),
      100: oklch('rgb(29, 29, 29)'),
      200: oklch('rgb(48, 48, 48)'),
      300: oklch('rgb(75, 75, 75)'),
      400: oklch('rgb(106, 106, 106)'),
      500: oklch('rgb(141, 141, 141)'),
      600: oklch('rgb(176, 176, 176)'),
      700: oklch('rgb(208, 208, 208)'),
      800: oklch('rgb(235, 235, 235)'),
      900: oklch('rgb(255, 255, 255)'),
    },
    brand: {
      100: oklch('rgb(87, 0, 0)'),
      200: oklch('rgb(110, 0, 0)'),
      300: oklch('rgb(138, 0, 0)'),
      400: oklch('rgb(167, 0, 0)'),
      500: oklch('rgb(196, 7, 6)'),
      600: oklch('rgb(221, 33, 24)'),
      700: oklch('rgb(238, 67, 49)'),
      800: oklch('rgb(249, 99, 76)'),
      900: oklch('rgb(255, 129, 107)'),
      1000: oklch('rgb(255, 158, 140)'),
      1100: oklch('rgb(255, 183, 169)'),
      1200: oklch('rgb(255, 205, 195)'),
      1300: oklch('rgb(255, 223, 217)'),
    },
  },
}

export function getWeights() {
  const weights: {
    [mode: string]: {
      background: {
        [index: number]: { l: number; c: number; h: number }
      }
    }
  } = {}

  for (const mode in reference) {
    weights[mode] = { background: {} }
    const et = reference[mode].background[100]
    for (const color in reference[mode]) {
      weights[mode][color] = {}
      for (const num in reference[mode][color]) {
        const current = reference[mode][color][num]
        weights[mode][color][num] = {
          l: et.l - current.l,
          c: et.c - current.c,
          h: et.h - current.h,
        }

        weights[mode][color][num].l = !weights[mode][color][num].l ? 0 : weights[mode][color][num].l
        weights[mode][color][num].c = !weights[mode][color][num].c ? 0 : weights[mode][color][num].c
        weights[mode][color][num].h = !weights[mode][color][num].h ? 0 : weights[mode][color][num].h
      }
    }
  }

  return weights
}

export function gradient(color: string, mode: themeMode, type = 'background') {
  const weights = getWeights()
  const gradient: { [index: number]: { l: number; c: number; h: number } } = {}
  const p = oklch(color)

  for (const key in weights[mode][type]) {
    gradient[key] = {
      ...p,
      l: p.l - weights[mode][type][key].l,
    }
  }

  return gradient
}
