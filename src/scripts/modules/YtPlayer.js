// import YTPlayer from 'yt-player';


export default class YtPlayer {
  constructor(elem) {
    this.body = elem
    this.playerList = {}
    this.init();
  }

  init() {
    this.setScriptTag()
    this.setPlayers()
  }
  setScriptTag() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubePlayerAPIReady = () => {
      this.setMovie()
    }
  }


  setPlayers() {

    const players = this.body.querySelectorAll('[data-yt-player]')

    for (let i = 0; i < players.length; i++) {

      const index = `player_${i + 1}`
      console.log(index)
      const container = players[i].querySelector('[data-yt-id]')
      const thumb = players[i].querySelector('[data-video-thumb]') || null


      this.playerList[index] = {
        id: container.dataset.ytId,
        player: null,
        wrap: players[i],
        container: container,
        thumb: thumb,
        onReady: false
      }

      if (thumb) this.videoControl(index)
    }
  }

  setMovie() {
    for (let index of Object.keys(this.playerList)) {
      const playerObj = this.playerList[index]

      playerObj.player = new YT.Player(playerObj.container, {
          height: '100%',
          width: '100%',
          videoId: playerObj.id,
          playerVars: {
            frameborder: 0,
            rel: 0
          },
          events: {
            'onReady': () => {
              playerObj.wrap.classList.add('is-loaded')
              playerObj.onReady = true
            }
          }
        }
      )
    }
  }

  videoControl(index) {
    const playerObj = this.playerList[index]

    playerObj.thumb.addEventListener('click', () => {
      if (playerObj.onReady) {
        playerObj.player.addEventListener('onStateChange', (evt) => {
          if (evt.data == 1) {
            playerObj.wrap.classList.add('is-loaded')
            playerObj.thumb.remove()
          }
        })
        playerObj.wrap.classList.remove('is-loaded')
        playerObj.wrap.classList.add('_start')
        playerObj.player.playVideo()
      }
    })
  }

}
// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;

// window.onYouTubeIframeAPIReady = function () {
//   player = new YT.Player('player', {
//     height: '360',
//     width: '640',
//     videoId: '1zr5yAh0KyE',
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }


// function onPlayerReady(event) {
//   // ready 之后自动播放
//   // event.target.playVideo();
// }


// var done = false;

// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }

// function stopVideo() {
//   player.stopVideo();
// }