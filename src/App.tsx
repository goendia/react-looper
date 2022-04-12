import React, { useEffect, useRef, useState } from 'react'
import Track from './components/Track'
import { Transport } from 'tone'

type Songs = {
  title: string
  tracks: {
    svg: string
    audio: string
    volume?: number
    reverb?: number
  }[]
}[]

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
      {svg: '/assets/svg_tracks/WABBADOBO_Track01.svg', audio: '/audio/tracks/WABBADOBO_Track01.mp3'},
      {svg: '/assets/svg_tracks/WABBADOBO_Track02.svg', audio: '/audio/tracks/WABBADOBO_Track02.mp3'},
      {svg: '/assets/svg_tracks/WABBADOBO_Track03.svg', audio: '/audio/tracks/WABBADOBO_Track03.mp3'},
      {svg: '/assets/svg_tracks/WABBADOBO_Track04.svg', audio: '/audio/tracks/WABBADOBO_Track04.mp3'},
    ]
  },
]

Transport.loop = true
Transport.loopStart = 0

const App = () => {
  const [song] = useState<number>(1)
      , [unmutedTracks, setUnmutedTracks] = useState<number[]>([])
      , progressRef = useRef(null)
  
  useEffect(() => {
    const keyUp = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= songs[song].tracks.length.toString()) {
        console.log(`Track ${e.key} was pressed`)
        const track = parseInt(e.key) - 1
            , tracks = unmutedTracks.includes(track) ?
                        unmutedTracks.filter(t => t !== track) :
                        [...unmutedTracks, track]

        setUnmutedTracks(tracks)
        if (tracks.length === 0)
          Transport.stop()
        else if (tracks.length === 1 && Transport.state !== 'started')
          Transport.start()
      }
    }
    document.addEventListener('keyup', keyUp)
    return () => document.removeEventListener('keydown', keyUp)
  }, [unmutedTracks])

  useEffect(() => {
     setInterval(() =>
     progressRef.current &&
     // @ts-ignore
    (progressRef.current.style.left = `${Transport.progress*100}%`)
    , 40)
  }, [progressRef])

  const duration = (seconds: number) =>
    Transport.loopEnd = seconds

  const clicked = (track: number) => {
    const tracks = unmutedTracks.includes(track) ?
      unmutedTracks.filter((id: number) => id !== track) :
      [...unmutedTracks, track]
    
    if (tracks.length === 1 && Transport.state !== 'started')
      Transport.start()
    else if (tracks.length === 0)
      Transport.stop()

    setUnmutedTracks(tracks)
  }

  return (
    <>
      <div>
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
      </div>
      <label>
        {songs[song].title}
      </label>
    </>
  )
}

const styles = {
  progress: {
    width: 3,
    height: '100%',
    left: '0%',
    position: 'absolute' as 'absolute',
    backgroundColor: 'rgb(248, 0, 0)'
  },
  button: {
    position: 'absolute' as 'absolute',
    right: 10,
    top: 10
  }
}

export default App