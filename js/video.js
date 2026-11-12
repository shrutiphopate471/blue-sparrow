/* ==========================================================================
   THE NEST — video.js
   Handles: custom play button overlay for the project tour video
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const frame = document.getElementById('nestVideoFrame');
  const video = document.getElementById('nestVideo');
  const playBtn = document.getElementById('nestVideoPlay');
  if (!frame || !video || !playBtn) return;

  const startPlayback = () => {
    frame.classList.add('playing');
    video.play().catch(() => {
      // Autoplay/play blocked (e.g. no user gesture yet) — leave native controls visible
      frame.classList.remove('playing');
    });
  };

  playBtn.addEventListener('click', startPlayback);

  video.addEventListener('play', () => frame.classList.add('playing'));
  video.addEventListener('pause', () => frame.classList.remove('playing'));
  video.addEventListener('ended', () => frame.classList.remove('playing'));

});
