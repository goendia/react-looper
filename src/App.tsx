import React, { useEffect, useRef, useState } from 'react'
import Track from './components/Track'
import { Transport } from 'tone'

type Songs = {
  title: string
  tracks: {
    svg: string
    audio: string
    volume?: number
    reverb?: boolean
  }[]
}[]

const songs: Songs = [
  {
    title: 'Anemoney (2014 - recorded on Android with Loopstack App)',
    tracks: [
      {svg: '/assets/anemoney_track01_5_03_white.svg', audio: '/audio/Anemoney/ANEMONEY_Track01.mp3', volume: -20},
      {svg: '/assets/anemoney_track02_5_03_white.svg', audio: '/audio/Anemoney/ANEMONEY_Track02.mp3'},
      {svg: '/assets/anemoney_track03_5_03_white.svg', audio: '/audio/Anemoney/ANEMONEY_Track03.mp3'},
      {svg: '/assets/anemoney_track04_5_03_white.svg', audio: '/audio/Anemoney/ANEMONEY_Track04.mp3'},
    ]
  },
  {
    title: 'BENEBEDABABAU',
    tracks: [
      {svg: '/assets/anemoney_track01_5_03_white.svg', audio: '/audio/other-loop-tracks/BENEBEDABABAU_Track01.mp3'},
      {svg: '/assets/anemoney_track02_5_03_white.svg', audio: '/audio/other-loop-tracks/BENEBEDABABAU_Track02.mp3'},
      {svg: '/assets/anemoney_track03_5_03_white.svg', audio: '/audio/other-loop-tracks/BENEBEDABABAU_Track03.mp3'},
    ]
  }
]

Transport.loop = true
Transport.loopStart = 0
Transport.loopEnd = 7.619

const App = () => {
  const [song] = useState<number>(0)
      , [unmutedTracks, setUnmutedTracks] = useState<number[]>([])
      , progressRef = useRef(null)
  
  useEffect(() => {
    const keyUp = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '4') {
        // Console log information about the key pressed
        console.log(`Track ${e.key} was pressed`)
        const track = Number(e.key) - 1
        if (unmutedTracks.includes(track)) {
          setUnmutedTracks(unmutedTracks.filter(t => t !== track))
        } else {
          setUnmutedTracks([...unmutedTracks, track])
        }
      }
    }
    document.addEventListener('keyup', keyUp)
  }, [])

  useEffect(() => {
    progressRef.current && setInterval(() =>
      // @ts-ignore
      progressRef.current.style.left = `${Transport.progress*100}%`
    , 40)
  }, [progressRef])

  const clicked = (track: number) => {
    console.log(0)
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
            key={song.audio}
            onPress={() => clicked(i)}
            muted={!unmutedTracks.includes(i)}
            svg={song.svg}
            audio={song.audio}
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