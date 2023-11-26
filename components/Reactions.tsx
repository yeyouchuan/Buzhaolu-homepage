'use client'

import {
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import { prettifyNumber } from '../lib/math'

const moodToReactions = [
    {
        id: 1,
        image: 'https://s2.loli.net/2023/11/26/rjgRlz8VY7BPToy.png',
    },
    {
        id: 2,
        image: 'https://s2.loli.net/2023/11/26/k8CJOcjEghdDKPy.png',
    },
    {
        id: 3,
        image: 'https://s2.loli.net/2023/11/26/hczrPWoj34RngHE.png',
    },
    {
        id: 4,
        image: 'https://s2.loli.net/2023/11/26/VQykNximXUMEhI4.png',
    },
    {
        id: 5,
        image: 'https://s2.loli.net/2023/11/27/uCb71kKqw9OZHpj.png',
    },
    {
        id: 6,
        image: 'https://s2.loli.net/2023/11/27/2kQ4zbiR15G6gMY.png',
    },
]

export function BlogReactions({ _id, reactions }) {
  React.useEffect(() => {
    async function fetchReactions() {
      const res = await fetch(`/api/reactions?id=${_id}`);
      const data = await res.json();
      setCachedReactions(data);
    }
  
    fetchReactions();
  }, [_id]);  
  const [cachedReactions, setCachedReactions] = React.useState(
    reactions ?? [0, 0, 0, 0, 0, 0]
  )
  const mouseY = useMotionValue(Infinity)
  const onMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      mouseY.set(e.clientY)
    },
    [mouseY]
  )
  const onClick = React.useCallback(
    async (index: number) => {
      // Optimistic update
      setCachedReactions((prev) => {
        const next = [...prev]
        next[index]++
        return next
      })

      const res = await fetch(`/api/reactions?id=${_id}&index=${index}`, {
        method: 'PATCH',
      })
      const { data } = (await res.json()) as { data: number[] }
      setCachedReactions(data)
    },
    [_id]
  )

  return (
    <motion.div
      className="pointer-events-auto md:flex flex-row md:flex-col w-full md:w-32 md:h-[600px] max-h-[600px] items-center justify-center gap-6 md:gap-12 px-1 pb-8 pt-4 md:border-l border-[#303030] backdrop-blur-lg hidden shrink-0"
      onMouseMove={onMouseMove}
      onMouseLeave={() => mouseY.set(Infinity)}
    >
      {moodToReactions.map((image, idx) => (
        <ReactIcon
          key={idx}
          y={mouseY}
          image={image.image}
          count={cachedReactions[idx]}
          onClick={() => onClick(idx)}
        />
      ))}
    </motion.div>
  )
}

function ReactIcon({
  y,
  image,
  count = 0,
  onClick,
}: {
  y: MotionValue
  image: string
  count?: number
  onClick?: () => void
}) {
  const ref = React.useRef<HTMLButtonElement>(null)

  const distance = useTransform(y, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 }

    return val - bounds.y - bounds.height / 2
  })

  const heightSync = useTransform(distance, [-120, 0, 120], [24, 56, 24])
  const height = useSpring(heightSync, {
    mass: 0.1,
    stiffness: 180,
    damping: 15,
  })

  return (
    <motion.button
      ref={ref}
      type="button"
      style={{ height }}
      className="relative aspect-square h-8"
      whileTap={{
        scale: 1.2,
      }}
      onClick={onClick}
    >
      <Image
        src={image}
        alt=""
        className="inline-block md:scale-150"
        priority
        fetchPriority="high"
        fill
        unoptimized
      />
      <span className="absolute -bottom-6 left-0 flex w-full items-center justify-center whitespace-nowrap text-[14px] font-semibold text-gray-200">
        {prettifyNumber(count, true)}
      </span>
    </motion.button>
  )
}