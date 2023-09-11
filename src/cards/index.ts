import { readFile } from 'fs/promises'
import { join } from 'path'
import type { ReactNode } from 'react'
import satori from 'satori'

export const generate = async (element: ReactNode) => {
  return await satori(element, {
    height: 100,
    fonts: [
      {
        name: 'Pretendard-SemiBold',
        data: await readFile(
          join(__dirname, '../../fonts/Pretendard-SemiBold.otf'),
        ),
      },
    ],
  })
}
