const copyButton = document.querySelector('#copy-citation');
copyButton.addEventListener('click', async () => {
  const text = document.querySelector('#bibtex').textContent;
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = 'Citation copied.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#bibtex'));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
  }
});

const demoVideo = document.querySelector('#demo video');
if (demoVideo && 'IntersectionObserver' in window) {
  let demoInView = false;
  const updateDemoPlayback = () => {
    if (demoInView && !document.hidden) {
      // Muted inline playback supports browser autoplay policies.
      demoVideo.play().catch(() => {
        // Native controls remain available if autoplay is blocked.
      });
    } else {
      demoVideo.pause();
    }
  };
  const demoObserver = new IntersectionObserver(([entry]) => {
    demoInView = entry.isIntersecting && entry.intersectionRatio >= 0.35;
    updateDemoPlayback();
  }, { threshold: [0, 0.35] });
  demoObserver.observe(demoVideo);
  document.addEventListener('visibilitychange', updateDemoPlayback);
}
