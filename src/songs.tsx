type Songs = {
  title: string
  description: string
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
      title: 'ANEMONEY',
      description: 'ANEMONEY (2014 - recorded on Android with Loopstack App)',
      tracks: [
        {svg: '/assets/svg_tracks/ANEMONEY_Track01.svg', audio: '/audio/tracks/ANEMONEY_Track01.mp3', reverb: 0.3},
        {svg: '/assets/svg_tracks/ANEMONEY_Track02.svg', audio: '/audio/tracks/ANEMONEY_Track02.mp3', reverb: 0.3},
        {svg: '/assets/svg_tracks/ANEMONEY_Track03.svg', audio: '/audio/tracks/ANEMONEY_Track03.mp3', reverb: 0.3},
        {svg: '/assets/svg_tracks/ANEMONEY_Track04.svg', audio: '/audio/tracks/ANEMONEY_Track04.mp3', reverb: 0.4},
      ]
    },
    {
      title: 'BENEBEDABABAU',
      description: 'BENEBEDABABAU (2014 - recorded on Android with Loopstack App)',
      tracks: [
        {svg: '/assets/svg_tracks/BENEBEDABABAU_Track01.svg', audio: '/audio/tracks/BENEBEDABABAU_Track01.mp3'},
        {svg: '/assets/svg_tracks/BENEBEDABABAU_Track02.svg', audio: '/audio/tracks/BENEBEDABABAU_Track02.mp3'},
        {svg: '/assets/svg_tracks/BENEBEDABABAU_Track03.svg', audio: '/audio/tracks/BENEBEDABABAU_Track03.mp3'},
      ]
    },
    {
      title: 'BIMBIBABIDIMM',
      description: 'BIMBIBABIDIMM (2014 - recorded on Android with Loopstack App)',
      tracks: [
        {svg: '/assets/svg_tracks/BIMBIBABIDIMM_Track01.svg', audio: '/audio/tracks/BIMBIBABIDIMM_Track01.mp3'},
        {svg: '/assets/svg_tracks/BIMBIBABIDIMM_Track02.svg', audio: '/audio/tracks/BIMBIBABIDIMM_Track02.mp3'},
        {svg: '/assets/svg_tracks/BIMBIBABIDIMM_Track03.svg', audio: '/audio/tracks/BIMBIBABIDIMM_Track03.mp3'},
        {svg: '/assets/svg_tracks/BIMBIBABIDIMM_Track04.svg', audio: '/audio/tracks/BIMBIBABIDIMM_Track04.mp3'},
      ]
    },
    {
      title: 'CHICKECHICK',
      description: 'CHICKECHICK (2014 - recorded on Android with Loopstack App)',
      tracks: [
        {svg: '/assets/svg_tracks/CHICKECHICK_Track01.svg', audio: '/audio/tracks/CHICKECHICK_Track01.mp3'},
        {svg: '/assets/svg_tracks/CHICKECHICK_Track03.svg', audio: '/audio/tracks/CHICKECHICK_Track03.mp3'},
        {svg: '/assets/svg_tracks/CHICKECHICK_Track04.svg', audio: '/audio/tracks/CHICKECHICK_Track04.mp3'},
      ]
    },
    {
      title: 'DEDEDADADIBDOM',
      description: 'DEDEDADADIBDOM (2014 - recorded on Android with Loopstack App)',
      tracks: [
        {svg: '/assets/svg_tracks/DEDEDADADIBDOM_Track01.svg', audio: '/audio/tracks/DEDEDADADIBDOM_Track01.mp3'},
        {svg: '/assets/svg_tracks/DEDEDADADIBDOM_Track02.svg', audio: '/audio/tracks/DEDEDADADIBDOM_Track02.mp3'},
        {svg: '/assets/svg_tracks/DEDEDADADIBDOM_Track03.svg', audio: '/audio/tracks/DEDEDADADIBDOM_Track03.mp3'},
      ]
    },
    {
      title: 'EBADADEDEDOU',
      description: 'EBADADEDEDOU (2014 - recorded on Android with Loopstack App)',
      tracks: [
        {svg: '/assets/svg_tracks/EBADADEDEDOU_Track01.svg', audio: '/audio/tracks/EBADADEDEDOU_Track01.mp3'},
        {svg: '/assets/svg_tracks/EBADADEDEDOU_Track02.svg', audio: '/audio/tracks/EBADADEDEDOU_Track02.mp3'},
        {svg: '/assets/svg_tracks/EBADADEDEDOU_Track04.svg', audio: '/audio/tracks/EBADADEDEDOU_Track04.mp3'},
      ]
    },
    {
      title: 'EYAYAE',
      description: 'EYAYAE (2014 - recorded on Android with Loopstack App)',
      tracks: [
        {svg: '/assets/svg_tracks/EYAYAE_Track01.svg', audio: '/audio/tracks/EYAYAE_Track01.mp3'},
        {svg: '/assets/svg_tracks/EYAYAE_Track02.svg', audio: '/audio/tracks/EYAYAE_Track02.mp3'},
        {svg: '/assets/svg_tracks/EYAYAE_Track03.svg', audio: '/audio/tracks/EYAYAE_Track03.mp3'},
      ]
    },
    {
      title: 'LAGGIE',
      description: 'LAGGIE (2014 - recorded on Android with Loopstack App)',
      tracks: [
        {svg: '/assets/svg_tracks/LAGGIE_Track01.svg', audio: '/audio/tracks/LAGGIE_Track01.mp3'},
        {svg: '/assets/svg_tracks/LAGGIE_Track02.svg', audio: '/audio/tracks/LAGGIE_Track02.mp3'},
      ]
    },
    {
      title: 'MRUNNRUNN',
      description: 'MRUNNRUNN (2014 - recorded on Android with Loopstack App)',
      tracks: [
        {svg: '/assets/svg_tracks/MRUNNRUNN_Track01.svg', audio: '/audio/tracks/MRUNNRUNN_Track01.mp3'},
        {svg: '/assets/svg_tracks/MRUNNRUNN_Track02.svg', audio: '/audio/tracks/MRUNNRUNN_Track02.mp3'},
        {svg: '/assets/svg_tracks/MRUNNRUNN_Track03.svg', audio: '/audio/tracks/MRUNNRUNN_Track03.mp3'},
        {svg: '/assets/svg_tracks/MRUNNRUNN_Track04.svg', audio: '/audio/tracks/MRUNNRUNN_Track04.mp3'},
      ]
    },
    {
      title: 'WABBADOBO',
      description: 'WABBADOBO (2014 - recorded on Android with Loopstack App)',
      tracks: [
        {svg: '/assets/svg_tracks/WABBADOBO_Track01.svg', audio: '/audio/tracks/WABBADOBO_Track01.mp3', reverb: 0.3},
        {svg: '/assets/svg_tracks/WABBADOBO_Track02.svg', audio: '/audio/tracks/WABBADOBO_Track02.mp3', reverb: 0.3},
        {svg: '/assets/svg_tracks/WABBADOBO_Track03.svg', audio: '/audio/tracks/WABBADOBO_Track03.mp3', reverb: 0.5},
        {svg: '/assets/svg_tracks/WABBADOBO_Track04.svg', audio: '/audio/tracks/WABBADOBO_Track04.mp3', volume: -7},
      ]
    },
    {
      title: 'Treppenhaustest',
      description: 'Treppenhaustest (2019 - recorded on iOS with Loopy App)',
      tracks: [
        {svg: '/assets/svg_tracks/WABBADOBO_Track01.svg', audio: '/audio/tracks/Treppenhaustest_Track0.mp3'},
        {svg: '/assets/svg_tracks/WABBADOBO_Track02.svg', audio: '/audio/tracks/Treppenhaustest_Track2.mp3'},
        {svg: '/assets/svg_tracks/WABBADOBO_Track03.svg', audio: '/audio/tracks/Treppenhaustest_Track3.mp3'},
        {svg: '/assets/svg_tracks/WABBADOBO_Track04.svg', audio: '/audio/tracks/Treppenhaustest_Track4.mp3'},
      ]
    },
  ]

export default songs