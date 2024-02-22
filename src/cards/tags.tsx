import { generate } from '.'
import { themeMapping, tierMapping } from '../constants'
import type { TagRatingStat, User } from '../types'
import * as d3 from 'd3'

const TAGS = [
  'math',
  'implementation',
  'greedy',
  'string',
  'data_structures',
  'graphs',
  'dp',
  'geometry',
]

export const tagCard = async (params: {
  user: User
  stats: TagRatingStat[]
  size: number
  isDark: boolean
}) => {
  const { user, stats, size, isDark } = params
  const sizeConv = size / 200
  const { base, mantle } = themeMapping.get(isDark)!

  const _stats = stats
    .filter((d) => TAGS.includes(d.tag.key))
    .sort((a, b) => TAGS.indexOf(a.tag.key) - TAGS.indexOf(b.tag.key))

  const max = Math.max(..._stats.map((d) => d.rating))

  const area = d3
    .areaRadial<TagRatingStat>()
    .curve(d3.curveLinearClosed)
    .angle((d) => TAGS.indexOf(d.tag.key) * ((2 * Math.PI) / TAGS.length))
    .radius((d) => d.rating * (70 / max) * sizeConv)

  const arcs = area(_stats)

  return await generate(
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: base,
        borderRadius: 20 * sizeConv,
        fontSize: 28 * sizeConv,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 160 * sizeConv,
          height: 160 * sizeConv,
          margin: 20 * sizeConv,
          backgroundColor: mantle,
          borderRadius: 20 * sizeConv,
        }}
      >
        <svg
          style={{
            width: 160 * sizeConv,
            height: 160 * sizeConv,
          }}
        >
          <g transform={`translate(${80 * sizeConv},${80 * sizeConv})`}>
            <path
              d={arcs ?? undefined}
              stroke={tierMapping.get(user.tier)!.detailedColor}
              strokeWidth={2 * sizeConv}
            />
          </g>
        </svg>
      </div>
    </div>,
    size,
  )
}