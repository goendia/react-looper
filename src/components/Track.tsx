import React, { memo, useEffect, useMemo, useState } from 'react'
import * as Tone from 'tone'

type Props = {
  svg: string
  audio: string
  muted: boolean
  volume: number
  onPress: () => void
}

const Track = memo(({svg, audio, muted, onPress, volume}: Props) => {
  const player = useMemo(() =>
                  new Tone.Player({
                    url: audio,
                    loop: true,
                    mute: true,
                    volume
                  }).toDestination().sync().start(0)
                , [audio, volume])
      , [mouseOver, setMouseOver] = useState<boolean>(false)

  useEffect(() => {
    if (player)
      player.mute = muted
  }, [muted, player])

  return (
    <img
      onClick={onPress}
      alt="Audio-Track"
      src={svg}
      style={{
        opacity: !muted ? 1 : mouseOver ? 0.7 : 0.5,
        cursor: 'pointer'
      }}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    />
  )
})

export default Track