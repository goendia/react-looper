import React, { useEffect, useRef, useState } from 'react'
import Track from './components/Track'
import { Transport } from 'tone'

type Songs = {
  title: string
  tracks: Track[]
}[]

type Track = {
  svg: string
  audio: string
  volume?: number
  reverb?: number
}

const songs: Songs = [
  {
    title: 'Anemoney (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/svg_tracks/ANEMONEY_Track01.svg', audio: '/audio/tracks/ANEMONEY_Track01.mp3', reverb: 0.3},
      {svg: '/assets/svg_tracks/ANEMONEY_Track02.svg', audio: '/audio/tracks/ANEMONEY_Track02.mp3', reverb: 0.3},
      {svg: '/assets/svg_tracks/ANEMONEY_Track03.svg', audio: '/audio/tracks/ANEMONEY_Track03.mp3', reverb: 0.3},
      {svg: '/assets/svg_tracks/ANEMONEY_Track04.svg', audio: '/audio/tracks/ANEMONEY_Track04.mp3', reverb: 0.4},
    ]
  },
  {
    title: 'BENEBEDABABAU (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/svg_tracks/BENEBEDABABAU_Track01.svg', audio: '/audio/tracks/BENEBEDABABAU_Track01.mp3'},
      {svg: '/assets/svg_tracks/BENEBEDABABAU_Track02.svg', audio: '/audio/tracks/BENEBEDABABAU_Track02.mp3'},
      {svg: '/assets/svg_tracks/BENEBEDABABAU_Track03.svg', audio: '/audio/tracks/BENEBEDABABAU_Track03.mp3'},
    ]
  },
  {
    title: 'BIMBIBABIDIMM (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/svg_tracks/BIMBIBABIDIMM_Track01.svg', audio: '/audio/tracks/BIMBIBABIDIMM_Track01.mp3'},
      {svg: '/assets/svg_tracks/BIMBIBABIDIMM_Track02.svg', audio: '/audio/tracks/BIMBIBABIDIMM_Track02.mp3'},
      {svg: '/assets/svg_tracks/BIMBIBABIDIMM_Track03.svg', audio: '/audio/tracks/BIMBIBABIDIMM_Track03.mp3'},
      {svg: '/assets/svg_tracks/BIMBIBABIDIMM_Track04.svg', audio: '/audio/tracks/BIMBIBABIDIMM_Track04.mp3'},
    ]
  },
  {
    title: 'CHICKECHICK (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/svg_tracks/CHICKECHICK_Track01.svg', audio: '/audio/tracks/CHICKECHICK_Track01.mp3'},
      {svg: '/assets/svg_tracks/CHICKECHICK_Track03.svg', audio: '/audio/tracks/CHICKECHICK_Track03.mp3'},
      {svg: '/assets/svg_tracks/CHICKECHICK_Track04.svg', audio: '/audio/tracks/CHICKECHICK_Track04.mp3'},
    ]
  },
  {
    title: 'DEDEDADADIBDOM (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/svg_tracks/DEDEDADADIBDOM_Track01.svg', audio: '/audio/tracks/DEDEDADADIBDOM_Track01.mp3'},
      {svg: '/assets/svg_tracks/DEDEDADADIBDOM_Track02.svg', audio: '/audio/tracks/DEDEDADADIBDOM_Track02.mp3'},
      {svg: '/assets/svg_tracks/DEDEDADADIBDOM_Track03.svg', audio: '/audio/tracks/DEDEDADADIBDOM_Track03.mp3'},
    ]
  },
  {
    title: 'EBADADEDEDOU (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/svg_tracks/EBADADEDEDOU_Track01.svg', audio: '/audio/tracks/EBADADEDEDOU_Track01.mp3'},
      {svg: '/assets/svg_tracks/EBADADEDEDOU_Track02.svg', audio: '/audio/tracks/EBADADEDEDOU_Track02.mp3'},
      {svg: '/assets/svg_tracks/EBADADEDEDOU_Track04.svg', audio: '/audio/tracks/EBADADEDEDOU_Track04.mp3'},
    ]
  },
  {
    title: 'EYAYAE (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/svg_tracks/EYAYAE_Track01.svg', audio: '/audio/tracks/EYAYAE_Track01.mp3'},
      {svg: '/assets/svg_tracks/EYAYAE_Track02.svg', audio: '/audio/tracks/EYAYAE_Track02.mp3'},
      {svg: '/assets/svg_tracks/EYAYAE_Track03.svg', audio: '/audio/tracks/EYAYAE_Track03.mp3'},
    ]
  },
  {
    title: 'LAGGIE (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/svg_tracks/LAGGIE_Track01.svg', audio: '/audio/tracks/LAGGIE_Track01.mp3'},
      {svg: '/assets/svg_tracks/LAGGIE_Track02.svg', audio: '/audio/tracks/LAGGIE_Track02.mp3'},
    ]
  },
  {
    title: 'MRUNNRUNN (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/svg_tracks/MRUNNRUNN_Track01.svg', audio: '/audio/tracks/MRUNNRUNN_Track01.mp3'},
      {svg: '/assets/svg_tracks/MRUNNRUNN_Track02.svg', audio: '/audio/tracks/MRUNNRUNN_Track02.mp3'},
      {svg: '/assets/svg_tracks/MRUNNRUNN_Track03.svg', audio: '/audio/tracks/MRUNNRUNN_Track03.mp3'},
      {svg: '/assets/svg_tracks/MRUNNRUNN_Track04.svg', audio: '/audio/tracks/MRUNNRUNN_Track04.mp3'},
    ]
  },
  {
    title: 'WABBADOBO (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/svg_tracks/WABBADOBO_Track01.svg', audio: '/audio/tracks/WABBADOBO_Track01.mp3', reverb: 0.3},
      {svg: '/assets/svg_tracks/WABBADOBO_Track02.svg', audio: '/audio/tracks/WABBADOBO_Track02.mp3', reverb: 0.3},
      {svg: '/assets/svg_tracks/WABBADOBO_Track03.svg', audio: '/audio/tracks/WABBADOBO_Track03.mp3', reverb: 0.5},
      {svg: '/assets/svg_tracks/WABBADOBO_Track04.svg', audio: '/audio/tracks/WABBADOBO_Track04.mp3', volume: -7},
    ]
  },
]

Transport.loop = true
Transport.loopStart = 0

const App = () => {
  const [song, setSong] = useState<number>(0)
      , [unmutedTracks, setUnmutedTracks] = useState<number[]>([])
      , progressRef = useRef(null)
  
  useEffect(() => {
    const keyUp = (e: KeyboardEvent) => {
      e.preventDefault()
      if (e.key >= '1' && e.key <= songs[song].tracks.length.toString()) {
        const track = parseInt(e.key) - 1
            , tracks = unmutedTracks.includes(track) ?
                        unmutedTracks.filter(t => t !== track) :
                        [...unmutedTracks, track]

        setUnmutedTracks(tracks)
        startOrStop(tracks)
      } else if (e.key === ' ')
        Transport.state === 'started' ? Transport.stop() : Transport.start()
    }
    document.addEventListener('keyup', keyUp)
    return () => document.removeEventListener('keyup', keyUp)
  }, [unmutedTracks])

  useEffect(() => {
    setInterval(() =>
      progressRef.current &&
      // @ts-ignore
      (progressRef.current.style.left = `${(Transport.progress%1)*100}%`)
    , 40)
  }, [progressRef])

  const switchTo = (song: number) => {
    if (Transport.state === 'started')
      Transport.stop()
    
    Transport.position = 0
    Transport.loopStart = 0
    setUnmutedTracks([])
    setSong(song)
  }
  const name = 'foobar'
  const duration = (seconds: number) =>
    Transport.loopEnd = seconds

  const clicked = (track: number) => {
    const tracks = unmutedTracks.includes(track) ?
      unmutedTracks.filter((id: number) => id !== track) :
      [...unmutedTracks, track]
    
    startOrStop(tracks)
    setUnmutedTracks(tracks)
  }

  const startOrStop = (tracks: number[]) => {
    if (tracks.length === 1 && Transport.state !== 'started')
      Transport.start()
    else if (tracks.length === 0)
      Transport.stop()
  }

  return (
    <>
      <div style={styles.container}>
        <div ref={progressRef} style={styles.progress}/>
        {songs[song].tracks.map((song, i) =>
          <Track
            key={song.audio + i}
            onPress={() => clicked(i)}
            onDuration={(seconds: number) => duration(seconds)}
            muted={!unmutedTracks.includes(i)}
            svg={song.svg}
            audio={song.audio}
            reverb={song.reverb || 0}
            volume={song.volume || 0}
          />
        )}

        <select
          onChange={(event) => switchTo(parseInt(event.currentTarget.value))}
          style={styles.select}
        >
          {songs.map((song, i) =>
            <option key={`song${i}`} value={i}>
              {song.title}
            </option>
          )}
        </select>
      </div>
      <label>
        {songs[song].title}
      </label>
    </>
  )
}

const styles = {
  container: {
    position: 'relative' as 'relative'
  },
  progress: {
    width: 3,
    top: 0,
    bottom: 0,
    left: '0%',
    position: 'absolute' as 'absolute',
    backgroundColor: 'rgb(248, 0, 0)'
  },
  button: {
    position: 'absolute' as 'absolute',
    right: 10,
    top: 10
  },
  select: {
    position: 'absolute' as 'absolute',
    right: 10,
    top: 10
  }
}

export default App