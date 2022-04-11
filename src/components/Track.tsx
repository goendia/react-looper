import React, { useEffect, useMemo, useState } from 'react'
import * as Tone from 'tone'

type Props = {
  svg: string
  audio: string
  muted: boolean
  volume: number
  reverb: number
  onPress: () => void
}

const Track = ({svg, audio, muted, onPress, volume, reverb}: Props) => {
  const player = useMemo(() => {
        const player = new Tone.Player({
          url: audio,
          loop: true,
          mute: true,
          volume
        }).toDestination().sync().start(0)

        if (reverb)
          player.chain(new Tone.Reverb({
            wet: reverb,
            decay: 1.5,
            preDelay: 0.01
          }), Tone.Destination)

        return player
      }, [audio, volume])
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
}

export default Track