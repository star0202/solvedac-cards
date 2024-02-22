import sha256 from 'crypto-js/sha256'
import type { FastifyBaseLogger } from 'fastify'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const DEBUG = process.env.NODE_ENV === 'development'

export default class CacheManager {
  private logger: FastifyBaseLogger

  constructor(logger: FastifyBaseLogger) {
    this.logger = logger.child({ name: 'Cache' })
  }

  async cache(svg: string, hash: string) {
    this.logger.info(`Caching ${hash}`)

    await writeFile(join(__dirname, `../../cache/${hash}.svg`), svg)
  }

  async generateCachedCard<T>(
    params: T,
    generate: (params: T) => Promise<string>,
  ) {
    const hash = sha256(JSON.stringify(params)).toString()

    try {
      if (DEBUG) throw new Error()

      const svg = await readFile(
        join(__dirname, `../../cache/${hash}.svg`),
        'utf-8',
      )

      this.logger.info(`Using cache ${hash}`)

      return svg
    } catch (e) {
      const svg = await generate(params)
      await this.cache(svg, hash)

      return svg
    }
  }
}
