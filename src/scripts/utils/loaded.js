import imagesLoaded from 'imagesLoaded'

export default function loaded(self, callback) {
  const _body = document.getElementsByClassName('body')
  imagesLoaded(_body, { background: true }, () => callback())
}
