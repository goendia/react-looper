import { useEffect, useMemo, useState } from 'react'
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
        new Tone.ToneAudioBuffer(audio,
          // Set a callback which fires when the audio buffer is loaded
          (buffer: Tone.ToneAudioBuffer) => onDuration(buffer.duration)
        )
      )
      , player = useMemo(() => {
          // Initialize the player
          const player = new Tone.Player({
            url: buffer,
            loop: true,
            mute: true,
            volume
          }).toDestination().sync().start(0)

          // Activate reverb if reverb is set
          if (reverb)
            player.chain(new Tone.Reverb({
              wet: reverb,
              decay: 1.5,
              preDelay: 0.01
            }), Tone.Destination)

          return player
        }, [audio, volume])
      
  // Pass through mute state
  useEffect(() => { player.mute = muted }, [muted, player])
  
  // Dispose player when component is unmounted
  useEffect(() => () => { player.dispose() }, [])

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