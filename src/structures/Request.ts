import type { User } from '../types'
import axios, { AxiosInstance } from 'axios'
import type { FastifyBaseLogger } from 'fastify'

export default class RequestManager {
  private rest: AxiosInstance

  private logger: FastifyBaseLogger

  constructor(logger: FastifyBaseLogger) {
    this.logger = logger.child({ name: 'Request' })

    this.rest = axios.create({
      baseURL: 'https://solved.ac/api/v3',
      headers: {
        Acccpt: 'application/json',
      },
    })
  }

  async getUser(handle: string): Promise<User> {
    this.logger.info(`Fetching user ${handle}`)

    const { data } = await this.rest.get(`/user/show?handle=${handle}`)

    return data
  }
}
