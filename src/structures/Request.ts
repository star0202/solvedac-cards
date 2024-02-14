import type { User } from '../types'
import axios from 'axios'
import type { AxiosError, AxiosInstance } from 'axios'
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

  async getUser(handle: string) {
    this.logger.info(`Fetching user ${handle}`)

    const { data } = await this.rest
      .get<User>(`/user/show?handle=${handle}`)
      .catch((err: AxiosError | Error) => {
        console.log(err)

        if (!axios.isAxiosError(err)) throw err

        if (err.response?.status === 404) return { data: null }

        throw err
      })

    return data
  }
}
