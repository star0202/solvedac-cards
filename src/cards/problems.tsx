import { generate } from '.'
import { themeMapping, tierMapping } from '../constants'
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
  const { base, mantle } = themeMapping.get(isDark)!

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
            {arcs.map((arc, i) => (
              <path
                key={i}
                d={
                  d3.arc()({
                    innerRadius: 35 * sizeConv,
                    outerRadius: 70 * sizeConv,
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
