import type { User } from '../types'
import sha256 from 'crypto-js/sha256'
import type { FastifyBaseLogger } from 'fastify'
import { appendFile, readFile } from 'fs/promises'
import { join } from 'path'

type Data = User | undefined

export default class CacheManager {
  private logger: FastifyBaseLogger

  constructor(logger: FastifyBaseLogger) {
    this.logger = logger.child({ name: 'Cache' })
  }

  async cache(svg: string, hash: string) {
    this.logger.info(`Caching ${hash}`)

    await appendFile(join(__dirname, `../../cache/${hash}.svg`), svg)
  }

  async generateCachedCard<T extends Data>(
    data: T,
    generate: (data: T) => Promise<string>,
  ) {
    const hash = sha256(JSON.stringify(data)).toString()

    readFile(join(__dirname, `../../cache/${hash}.svg`))
      .then(() => {
        this.logger.info(`Using cache ${hash}`)

        return readFile(join(__dirname, `../../cache/${hash}.svg`), 'utf-8')
      })
      .catch(async () => {
        this.logger.info(`Caching ${hash}`)

        const svg = await generate(data)
        await this.cache(svg, hash)

        return svg
      })
  }
}
