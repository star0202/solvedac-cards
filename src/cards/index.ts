import { readFile } from 'fs/promises'
import { join } from 'path'
import type { ReactNode } from 'react'
import satori from 'satori'

export const generate = async (element: ReactNode, size: number) => {
  return await satori(element, {
    height: size,
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
