import type { Class, Tier, TierNumber } from './types'

export const tierMapping = {
  0: {
    color: '#2d2d2d',
    name: 'Unrated',
  },
  1: {
    color: '#ad5600',
    name: 'Bronze V',
  },
  2: {
    color: '#ad5600',
    name: 'Bronze IV',
  },
  3: {
    color: '#ad5600',
    name: 'Bronze III',
  },
  4: {
    color: '#ad5600',
    name: 'Bronze II',
  },
  5: {
    color: '#ad5600',
    name: 'Bronze I',
  },
  6: {
    color: '#435f7a',
    name: 'Silver V',
  },
  7: {
    color: '#435f7a',
    name: 'Silver IV',
  },
  8: {
    color: '#435f7a',
    name: 'Silver III',
  },
  9: {
    color: '#435f7a',
    name: 'Silver II',
  },
  10: {
    color: '#435f7a',
    name: 'Silver I',
  },
  11: {
    color: '#ec9a00',
    name: 'Gold V',
  },
  12: {
    color: '#ec9a00',
    name: 'Gold IV',
  },
  13: {
    color: '#ec9a00',
    name: 'Gold III',
  },
  14: {
    color: '#ec9a00',
    name: 'Gold II',
  },
  15: {
    color: '#ec9a00',
    name: 'Gold I',
  },
  16: {
    color: '#27e2a4',
    name: 'Platinum V',
  },
  17: {
    color: '#27e2a4',
    name: 'Platinum IV',
  },
  18: {
    color: '#27e2a4',
    name: 'Platinum III',
  },
  19: {
    color: '#27e2a4',
    name: 'Platinum II',
  },
  20: {
    color: '#27e2a4',
    name: 'Platinum I',
  },
  21: {
    color: '#00b4fc',
    name: 'Diamond V',
  },
  22: {
    color: '#00b4fc',
    name: 'Diamond IV',
  },
  23: {
    color: '#00b4fc',
    name: 'Diamond III',
  },
  24: {
    color: '#00b4fc',
    name: 'Diamond II',
  },
  25: {
    color: '#00b4fc',
    name: 'Diamond I',
  },
  26: {
    color: '#ff0062',
    name: 'Ruby V',
  },
  27: {
    color: '#ff0062',
    name: 'Ruby IV',
  },
  28: {
    color: '#ff0062',
    name: 'Ruby III',
  },
  29: {
    color: '#ff0062',
    name: 'Ruby II',
  },
  30: {
    color: '#ff0062',
    name: 'Ruby I',
  },
  31: {
    color: '#b300e0',
    name: 'Master',
  },
} satisfies Record<TierNumber, Tier>

export const classColors = {
  0: '#2d2d2d',
  1: '#1d7edd',
  2: '#1ab3e2',
  3: '#16d671',
  4: '#23c91b',
  5: '#99d111',
  6: '#e5bb0c',
  7: '#ef9e0f',
  8: '#ff6700',
  9: '#ef165e',
  10: '#8f1ae2',
} satisfies Record<Class, string>
