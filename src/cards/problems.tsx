import { generate } from '.'
import { tierMapping } from '../constants'
import type { ProblemStat, User } from '../types'
import * as d3 from 'd3'

export const problemCard = async (params: {
  user: User
  stats: ProblemStat[]
  size: number
  isDark: boolean
}) => {
  const { user, stats, size, isDark } = params
  const sizeConv = size / 200

  const pie = d3
    .pie<ProblemStat>()
    .value((d) => d.solved)
    .sort((a, b) => a.level - b.level)
  const _stats = stats.filter(
    (d) => d.total > 0 && 0 < d.level && d.level < 31 && d.solved > 0,
  )
  const arcs = pie(_stats)

  return await generate(
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: isDark ? '#15202b' : '#f5f8fb',
        borderRadius: 20 * sizeConv,
        fontSize: 28 * sizeConv,
      }}
    >
      <svg
        style={{
          width: 160 * sizeConv,
          height: 160 * sizeConv,
          margin: 20 * sizeConv,
        }}
      >
        <g transform={`translate(${80 * sizeConv},${80 * sizeConv})`}>
          {arcs.map((arc, i) => (
            <path
              key={i}
              d={
                d3.arc()({
                  innerRadius: 35 * sizeConv,
                  outerRadius: 80 * sizeConv,
                  startAngle: arc.startAngle,
                  endAngle: arc.endAngle,
                  padAngle: 0,
                })!
              }
              fill={tierMapping.get(_stats[i].level)!.detailedColor}
              stroke={tierMapping.get(_stats[i].level)!.detailedColor}
            />
          ))}
        </g>
        <circle
          r={20 * sizeConv}
          cx={80 * sizeConv}
          cy={80 * sizeConv}
          stroke={tierMapping.get(user.tier)!.detailedColor}
          strokeWidth={8 * sizeConv}
        />
        <clipPath id="clip">
          <circle r={20 * sizeConv} cx={80 * sizeConv} cy={80 * sizeConv} />
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
          x={60 * sizeConv}
          y={60 * sizeConv}
        />
      </svg>
    </div>,
    size,
  )
}
