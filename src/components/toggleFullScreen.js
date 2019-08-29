export const toggleFullScreen = (id) => {
    const element = document.getElementById(id);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen();
    }
  }