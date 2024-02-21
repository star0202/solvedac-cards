import type { Tier } from './types'

export const tierMapping = new Map<number, Tier>([
  [
    0,
    {
      color: '#2d2d2d',
      detailedColor: '#2d2d2d',
      name: 'Unrated',
      rating: 0,
      gradient:
        'linear-gradient(to right, rgb(185, 188, 195) 0%, rgb(233, 237, 241) 100%)',
    },
  ],
  [
    1,
    {
      color: '#ad5600',
      detailedColor: '#9d4900',
      name: 'Bronze V',
      rating: 30,
      gradient:
        'linear-gradient(to right, rgb(173, 86, 0) 0%, rgb(232, 77, 11) 100%)',
    },
  ],
  [
    2,
    {
      color: '#ad5600',
      detailedColor: '#a54f00',
      name: 'Bronze IV',
      rating: 60,
      gradient:
        'linear-gradient(to right, rgb(173, 86, 0) 0%, rgb(232, 77, 11) 100%)',
    },
  ],
  [
    3,
    {
      color: '#ad5600',
      detailedColor: '#ad5600',
      name: 'Bronze III',
      rating: 90,
      gradient:
        'linear-gradient(to right, rgb(173, 86, 0) 0%, rgb(232, 77, 11) 100%)',
    },
  ],
  [
    4,
    {
      color: '#ad5600',
      detailedColor: '#b55d0a',
      name: 'Bronze II',
      rating: 120,
      gradient:
        'linear-gradient(to right, rgb(173, 86, 0) 0%, rgb(232, 77, 11) 100%)',
    },
  ],
  [
    5,
    {
      color: '#ad5600',
      detailedColor: '#c67739',
      name: 'Bronze I',
      rating: 150,
      gradient:
        'linear-gradient(to right, rgb(173, 86, 0) 0%, rgb(232, 77, 11) 100%)',
    },
  ],
  [
    6,
    {
      color: '#435f7a',
      detailedColor: '#38546e',
      name: 'Silver V',
      rating: 200,
      gradient:
        'linear-gradient(to right, rgb(93, 122, 149) 0%, rgb(117, 168, 215) 100%)',
    },
  ],
  [
    7,
    {
      color: '#435f7a',
      detailedColor: '#3d5a74',
      name: 'Silver IV',
      rating: 300,
      gradient:
        'linear-gradient(to right, rgb(93, 122, 149) 0%, rgb(117, 168, 215) 100%)',
    },
  ],
  [
    8,
    {
      color: '#435f7a',
      detailedColor: '#435f7a',
      name: 'Silver III',
      rating: 400,
      gradient:
        'linear-gradient(to right, rgb(93, 122, 149) 0%, rgb(117, 168, 215) 100%)',
    },
  ],
  [
    9,
    {
      color: '#435f7a',
      detailedColor: '#496580',
      name: 'Silver II',
      rating: 500,
      gradient:
        'linear-gradient(to right, rgb(93, 122, 149) 0%, rgb(117, 168, 215) 100%)',
    },
  ],
  [
    10,
    {
      color: '#435f7a',
      detailedColor: '#4e6a86',
      name: 'Silver I',
      rating: 650,
      gradient:
        'linear-gradient(to right, rgb(93, 122, 149) 0%, rgb(117, 168, 215) 100%)',
    },
  ],
  [
    11,
    {
      color: '#ec9a00',
      detailedColor: '#d28500',
      name: 'Gold V',
      rating: 800,
      gradient:
        'linear-gradient(to right, rgb(236, 154, 0) 0%, rgb(255, 208, 0) 100%)',
    },
  ],
  [
    12,
    {
      color: '#ec9a00',
      detailedColor: '#df8f00',
      name: 'Gold IV',
      rating: 950,
      gradient:
        'linear-gradient(to right, rgb(236, 154, 0) 0%, rgb(255, 208, 0) 100%)',
    },
  ],
  [
    13,
    {
      color: '#ec9a00',
      detailedColor: '#ec9a00',
      name: 'Gold III',
      rating: 1100,
      gradient:
        'linear-gradient(to right, rgb(236, 154, 0) 0%, rgb(255, 208, 0) 100%)',
    },
  ],
  [
    14,
    {
      color: '#ec9a00',
      detailedColor: '#f9a518',
      name: 'Gold II',
      rating: 1250,
      gradient:
        'linear-gradient(to right, rgb(236, 154, 0) 0%, rgb(255, 208, 0) 100%)',
    },
  ],
  [
    15,
    {
      color: '#ec9a00',
      detailedColor: '#ffb028',
      name: 'Gold I',
      rating: 1400,
      gradient:
        'linear-gradient(to right, rgb(236, 154, 0) 0%, rgb(255, 208, 0) 100%)',
    },
  ],
  [
    16,
    {
      color: '#27e2a4',
      detailedColor: '#00c78b',
      name: 'Platinum V',
      rating: 1600,
      gradient:
        'linear-gradient(to right, rgb(39, 226, 164) 0%, rgb(39, 217, 226) 100%)',
    },
  ],
  [
    17,
    {
      color: '#27e2a4',
      detailedColor: '#00d497',
      name: 'Platinum IV',
      rating: 1750,
      gradient:
        'linear-gradient(to right, rgb(39, 226, 164) 0%, rgb(39, 217, 226) 100%)',
    },
  ],
  [
    18,
    {
      color: '#27e2a4',
      detailedColor: '#27e2a4',
      name: 'Platinum III',
      rating: 1900,
      gradient:
        'linear-gradient(to right, rgb(39, 226, 164) 0%, rgb(39, 217, 226) 100%)',
    },
  ],
  [
    19,
    {
      color: '#27e2a4',
      detailedColor: '#3ef0b1',
      name: 'Platinum II',
      rating: 2000,
      gradient:
        'linear-gradient(to right, rgb(39, 226, 164) 0%, rgb(39, 217, 226) 100%)',
    },
  ],
  [
    20,
    {
      color: '#27e2a4',
      detailedColor: '#51fdbd',
      name: 'Platinum I',
      rating: 2100,
      gradient:
        'linear-gradient(to right, rgb(39, 226, 164) 0%, rgb(39, 217, 226) 100%)',
    },
  ],
  [
    21,
    {
      color: '#00b4fc',
      detailedColor: '#009ee5',
      name: 'Diamond V',
      rating: 2200,
      gradient:
        'linear-gradient(to right, rgb(0, 180, 252) 0%, rgb(0, 104, 252) 100%)',
    },
  ],
  [
    22,
    {
      color: '#00b4fc',
      detailedColor: '#00a9f0',
      name: 'Diamond IV',
      rating: 2300,
      gradient:
        'linear-gradient(to right, rgb(0, 180, 252) 0%, rgb(0, 104, 252) 100%)',
    },
  ],
  [
    23,
    {
      color: '#00b4fc',
      detailedColor: '#00b4fc',
      name: 'Diamond III',
      rating: 2400,
      gradient:
        'linear-gradient(to right, rgb(0, 180, 252) 0%, rgb(0, 104, 252) 100%)',
    },
  ],
  [
    24,
    {
      color: '#00b4fc',
      detailedColor: '#2bbfff',
      name: 'Diamond II',
      rating: 2500,
      gradient:
        'linear-gradient(to right, rgb(0, 180, 252) 0%, rgb(0, 104, 252) 100%)',
    },
  ],
  [
    25,
    {
      color: '#00b4fc',
      detailedColor: '#41caff',
      name: 'Diamond I',
      rating: 2600,
      gradient:
        'linear-gradient(to right, rgb(0, 180, 252) 0%, rgb(0, 104, 252) 100%)',
    },
  ],
  [
    26,
    {
      color: '#ff0062',
      detailedColor: '#e0004c',
      name: 'Ruby V',
      rating: 2700,
      gradient: 'linear-gradient(to right, #ff0062 0%, #ff0000 100%)',
    },
  ],
  [
    27,
    {
      color: '#ff0062',
      detailedColor: '#ea0053',
      name: 'Ruby IV',
      rating: 2800,
      gradient: 'linear-gradient(to right, #ff0062 0%, #ff0000 100%)',
    },
  ],
  [
    28,
    {
      color: '#ff0062',
      detailedColor: '#f5005a',
      name: 'Ruby III',
      rating: 2850,
      gradient: 'linear-gradient(to right, #ff0062 0%, #ff0000 100%)',
    },
  ],
  [
    29,
    {
      color: '#ff0062',
      detailedColor: '#ff0062',
      name: 'Ruby II',
      rating: 2900,
      gradient: 'linear-gradient(to right, #ff0062 0%, #ff0000 100%)',
    },
  ],
  [
    30,
    {
      color: '#ff0062',
      detailedColor: '#ff3071',
      name: 'Ruby I',
      rating: 2950,
      gradient: 'linear-gradient(to right, #ff0062 0%, #ff0000 100%)',
    },
  ],
  [
    31,
    {
      color: '#b300e0',
      detailedColor: '#b300e0',
      name: 'Master',
      rating: 3000,
      gradient:
        'linear-gradient(to right, rgb(255, 124, 168) 0%, rgb(180, 145, 255) 50%, rgb(124, 249, 255) 100%)',
    },
  ],
])

export const classMapping = new Map<number, string>([
  [0, '#2d2d2d'],
  [1, '#1d7edd'],
  [2, '#1ab3e2'],
  [3, '#16d671'],
  [4, '#23c91b'],
  [5, '#99d111'],
  [6, '#e5bb0c'],
  [7, '#ef9e0f'],
  [8, '#ff6700'],
  [9, '#ef165e'],
  [10, '#8f1ae2'],
])
