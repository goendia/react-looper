import { useEffect, useRef, useState } from "react";
import Track from "./components/Track";
import { Transport, context } from "tone";
import songs from "./songs";
import styles from "./style";

Transport.loop = true;
Transport.loopStart = 0;

const App = () => {
  const [song, setSong] = useState<number>(0),
    [unmutedTracks, setUnmutedTracks] = useState<number[]>([]),
    progressRef = useRef(null);

  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key >= "1" && e.key <= songs[song].tracks.length.toString()) {
        const track = parseInt(e.key) - 1,
          tracks = unmutedTracks.includes(track)
            ? unmutedTracks.filter((t) => t !== track)
            : [...unmutedTracks, track];

        setUnmutedTracks(tracks);
        startOrStop(tracks);
      } else if (e.key === " ")
        Transport.state === "started" ? Transport.stop() : Transport.start();
    };
    document.addEventListener("keydown", keyDown);
    return () => document.removeEventListener("keydown", keyDown);
  }, [unmutedTracks]);

  useEffect(() => {
    setInterval(
      () =>
        progressRef.current &&
        // @ts-ignore
        (progressRef.current.style.left = `${Transport.progress * 100}%`),
      40
    );
  }, [progressRef]);

  const switchTo = (song: number) => {
    if (Transport.state === "started") Transport.stop();

    Transport.position = 0;
    Transport.loopStart = 0;
    setUnmutedTracks([]);
    setSong(song);
  };

  const duration = (seconds: number) => (Transport.loopEnd = seconds);

  const clicked = (track: number) => {
    const tracks = unmutedTracks.includes(track)
      ? unmutedTracks.filter((id: number) => id !== track)
      : [...unmutedTracks, track];

    startOrStop(tracks);
    setUnmutedTracks(tracks);
  };

  const startOrStop = (tracks: number[]) => {
    if (tracks.length >= 1 && Transport.state !== "started") {
      context.resume();
      Transport.start();
    } else if (tracks.length === 0) Transport.stop();
  };

  return (
    <>
      <div style={styles.container}>
        <div ref={progressRef} style={styles.progress} />
        {songs[song].tracks.map((song, i) => (
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
        ))}
      </div>
      <select
        onChange={(event) => switchTo(parseInt(event.currentTarget.value))}
        style={styles.select}
      >
        {songs.map((song, i) => (
          <option key={`song${i}`} value={i}>
            {song.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default App;
