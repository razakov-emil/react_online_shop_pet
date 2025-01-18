export const handleError = (currentSrc, setCurrentSrc, retried, setRetried) => {
  if (!retried) {
    setCurrentSrc(`${currentSrc}?1`);
    setRetried(true);
  } else {
    setCurrentSrc(
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
    );
  }
};
