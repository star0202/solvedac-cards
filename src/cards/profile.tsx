import { generate } from '.'
import { classMapping, tierMapping } from '../constants'
import type { User } from '../types'

export const profileCard = async (params: { data: User; size: number }) => {
  const { data, size } = params

  const tier = tierMapping.get(data.tier)!
  const nextTier = tierMapping.get(data.tier !== 31 ? data.tier + 1 : 31)!
  const progress =
    data.tier === 31
      ? 100
      : Math.floor(
          ((data.rating - tier.rating) / (nextTier.rating - tier.rating)) * 100,
        )
  const displayProgress = progress === 0 ? 0 : progress < 10 ? 10 : progress
  const sizeConv = size / 100

  return await generate(
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#15202b',
        borderRadius: 10 * sizeConv,
        fontSize: 14 * sizeConv,
      }}
    >
      <img
        src={
          data.profileImageUrl ||
          'https://static.solved.ac/misc/360x360/default_profile.png'
        }
        style={{
          flexShrink: 0,
          width: 76 * sizeConv,
          height: 76 * sizeConv,
          margin: 12 * sizeConv,
          borderRadius: 12 * sizeConv,
          boxShadow: `0px 0px ${5 * sizeConv}px ${2 * sizeConv}px ${
            tier.color
          }`,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          flexShrink: 1,
          flexDirection: 'column',
          marginLeft: 3 * sizeConv,
          marginRight: 15 * sizeConv,
          color: 'white',
        }}
      >
        <div style={{ display: 'flex' }}>
          {data.handle} -
          <div
            style={{
              display: 'flex',
              marginLeft: 4 * sizeConv,
              ...(data.tier === 31
                ? {
                    background:
                      'linear-gradient(0deg, #ff7ca8, #b491ff, #7cf9ff)',
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }
                : {
                    color: tier.color,
                  }),
            }}
          >
            {tier.name}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 12 * sizeConv }}>
          Rating:
          <div
            style={{
              display: 'flex',
              marginLeft: 4 * sizeConv,
              ...(data.tier === 31
                ? {
                    background:
                      'linear-gradient(0deg, #ff7ca8, #b491ff, #7cf9ff)',
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }
                : {
                    color: tier.color,
                  }),
            }}
          >
            {data.rating}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 12 * sizeConv }}>
          Solved:
          <div
            style={{
              display: 'flex',
              color: '#b8bcbf',
              marginLeft: 4 * sizeConv,
            }}
          >
            {data.solvedCount}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 12 * sizeConv,
          }}
        >
          Class:
          <div
            style={{
              display: 'flex',
              color: classMapping.get(data.class)!,
              marginLeft: 4 * sizeConv,
            }}
          >
            {data.class}
            {'+'.repeat(
              data.classDecoration === 'none'
                ? 0
                : data.classDecoration === 'silver'
                ? 1
                : 2,
            )}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            height: 10 * sizeConv,
            borderRadius: 5 * sizeConv,
            marginTop: 5 * sizeConv,
            backgroundColor: '#0b131b',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              borderRadius: 5 * sizeConv,
              width: `${displayProgress}%`,
              background: tier.gradient,
            }}
          />
        </div>
      </div>
    </div>,
    size,
  )
}
