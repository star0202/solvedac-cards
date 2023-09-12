import { generate } from '.'
import { classMapping, tierMapping } from '../constants'
import type { User } from '../types'

export const profileCard = async (data: User) => {
  const tier = tierMapping.get(data.tier)!
  const nextTier = tierMapping.get(data.tier !== 31 ? data.tier + 1 : 31)!
  const progress =
    data.tier === 31
      ? 100
      : Math.floor(
          ((data.rating - tier.rating) / (nextTier.rating - tier.rating)) * 100,
        )

  return await generate(
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#15202b',
        borderRadius: 10,
      }}
    >
      <img
        src={
          data.profileImageUrl ||
          'https://static.solved.ac/misc/360x360/default_profile.png'
        }
        style={{
          flexShrink: 0,
          width: 76,
          height: 76,
          margin: 12,
          borderRadius: 12,
          boxShadow: `0px 0px 5px 2px ${tier.color}`,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          flexShrink: 1,
          flexDirection: 'column',
          marginLeft: 3,
          marginRight: 15,
          color: 'white',
        }}
      >
        <div style={{ display: 'flex' }}>
          {data.handle} -
          <div
            style={{
              display: 'flex',
              marginLeft: 4,
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
        <div style={{ display: 'flex', fontSize: 12 }}>
          Rating:
          <div
            style={{
              display: 'flex',
              marginLeft: 4,
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
        <div style={{ display: 'flex', fontSize: 12 }}>
          Solved:
          <div
            style={{
              display: 'flex',
              color: '#b8bcbf',
              marginLeft: 4,
            }}
          >
            {data.solvedCount}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 12,
          }}
        >
          Class:
          <div
            style={{
              display: 'flex',
              color: classMapping.get(data.class)!,
              marginLeft: 4,
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
            height: 10,
            borderRadius: 5,
            marginTop: 5,
            backgroundColor: '#000000',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              borderRadius: 5,
              width: `${progress}%`,
              background: tier.gradient,
            }}
          />
        </div>
      </div>
    </div>,
  )
}
