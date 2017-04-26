
export default function handleBookmark() {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const bookmark = document.getElementById(hash.replace('#', ''));

      if (bookmark) {
        bookmark.scrollIntoView();
      }
    }, 0);
  }
}

