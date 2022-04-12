import React, { useEffect, useMemo, useState } from 'react'
import * as Tone from 'tone'

type Props = {
  svg: string
  audio: string
  muted: boolean
  volume: number
  reverb: number
  onPress: () => void
  onDuration: (seconds: number) => void
}

const Track = ({svg, audio, muted, onPress, onDuration, volume, reverb}: Props) => {
  const [mouseOver, setMouseOver] = useState<boolean>(false)
      , [buffer] = useState<Tone.ToneAudioBuffer>(
        new Tone.ToneAudioBuffer(audio, (buffer: Tone.ToneAudioBuffer) => onDuration(buffer.duration))
      )
      , player = useMemo(() => {
          const player = new Tone.Player({
            url: buffer,
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
      
  
  useEffect(() => {
    if (player)
      player.mute = muted
  }, [muted, player])
  useEffect(() => () => { player.mute = true }, [])

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