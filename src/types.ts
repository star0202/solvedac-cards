export type User = {
  handle: string
  bio: string
  badgeId: string | null
  backgroundId: string
  profileImageUrl: string | null
  solvedCount: number
  voteCount: number
  tier: number
  rating: number
  ratingByProblemsSum: number
  ratingByClass: number
  ratingBySolvedCount: number
  ratingByVoteCount: number
  class: number
  classDecoration: 'none' | 'silver' | 'gold'
  rivalCount: number
  reverseRivalCount: number
  maxStreak: number
  coins: number
  stardusts: number
  joinedAt: string
  bannedUntil: string
  proUntil: string
  rank: number
}

export type Tier = {
  color: `#${string}`
  detailedColor: `#${string}`
  name: string
  rating: number
  gradient: string
}

export type ProblemStat = {
  level: number
  solved: number
  tried: number
  partial: number
  total: number
}
