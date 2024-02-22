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
  top: boolean
  text: boolean
}) => {
  const { user, stats, size, isDark, top, text: textNotation } = params
  const sizeConv = size / 200
  const { base, mantle, text } = themeMapping.get(isDark)!

  const _stats = top
    ? stats.sort((a, b) => b.rating - a.rating).slice(0, 8)
    : stats
        .filter((d) => TAGS.includes(d.tag.key))
        .sort((a, b) => TAGS.indexOf(a.tag.key) - TAGS.indexOf(b.tag.key))

  const tags = top ? _stats.map((d) => d.tag.key) : TAGS
  const max = Math.max(..._stats.map((d) => d.rating))

  const area = d3
    .areaRadial<TagRatingStat>()
    .curve(d3.curveLinearClosed)
    .angle((d) => tags.indexOf(d.tag.key) * ((2 * Math.PI) / tags.length))
    .radius((d) => d.rating * (70 / max) * sizeConv)

  const areaArcs = area(_stats)

  const toPoint = (name: string, radius: number) => {
    const coord = d3.pointRadial(
      tags.indexOf(name) * ((2 * Math.PI) / tags.length),
      radius,
    )

    return {
      name,
      x: coord[0],
      y: coord[1],
    }
  }

  const points = _stats.map((d) =>
    toPoint(d.tag.key, d.rating * (70 / max) * sizeConv),
  )
  const textPoints = textNotation
    ? points.map((d) => toPoint(d.name, 80 * sizeConv))
    : []

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
          width: 170 * sizeConv,
          height: 170 * sizeConv,
          margin: 15 * sizeConv,
          backgroundColor: mantle,
          borderRadius: 20 * sizeConv,
        }}
      >
        <svg
          style={{
            width: 170 * sizeConv,
            height: 170 * sizeConv,
          }}
        >
          <g transform={`translate(${85 * sizeConv},${85 * sizeConv})`}>
            <path
              d={areaArcs!}
              stroke={tierMapping.get(user.tier)!.detailedColor}
              strokeWidth={2 * sizeConv}
              fill={tierMapping.get(user.tier)!.detailedColor}
              fillOpacity={0.5}
            />
            {points.map((point, i) => (
              <g key={i}>
                <circle
                  r={3 * sizeConv}
                  cx={point.x}
                  cy={point.y}
                  fill={tierMapping.get(user.tier)!.detailedColor}
                />
              </g>
            ))}
            {textPoints.map((point, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: point.x + 85 * sizeConv,
                  top: point.y + 85 * sizeConv,
                  color: text,
                  fontSize: 10 * sizeConv,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {point.name}
              </div>
            ))}
          </g>
          <circle
            r={20 * sizeConv}
            cx={85 * sizeConv}
            cy={85 * sizeConv}
            stroke={tierMapping.get(user.tier)!.detailedColor}
            strokeWidth={4 * sizeConv}
          />
          <clipPath id="clip">
            <circle r={20 * sizeConv} cx={85 * sizeConv} cy={85 * sizeConv} />
          </clipPath>
          <image
            href={
              (user.profileImageUrl ||
                'https://static.solved.ac/misc/360x360/default_profile.png') +
              `?timestamp=${Date.now()}` // prevent image caching in satori. issue: https://github.com/vercel/satori/issues/592
            }
            clipPath="url(#clip)"
            height={40 * sizeConv}
            width={40 * sizeConv}
            x={65 * sizeConv}
            y={65 * sizeConv}
          />
        </svg>
      </div>
    </div>,
    size,
  )
}
