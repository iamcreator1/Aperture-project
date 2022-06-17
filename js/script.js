onscroll = function () {
  const scrollTop = document.documentElement.scrollTop

  if (scrollTop > 0.9 * innerHeight) {
    wwd.classList.remove('fade')
  }
}

