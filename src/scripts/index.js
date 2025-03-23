import { injectBookmarks } from "./bookmarks.js"
import { updateVariant } from "./variants.js"

const bookmarks = [
  {
    label: "a*tism",
    items: {
      "anilist": "https://anilist.co/home",
      "seedbox": "https://yuckyface.pan.usbx.me/rutorrent/",
      "letterboxd": "https://letterboxd.com",
      "mahjong soul": "https://mahjongsoul.game.yo-star.com",
    },
  },
  {
    label: "torrents",
    items: {
      "ext.to": "http://ext.to",
      "nyaa.si": "https://nyaa.si",
      "rutracker.org": "https://rutracker.org/forum/tracker.php",
      "avistaz.to": "https://avistaz.to",
    },
  },
  {
    label: "google",
    items: {
      gmail: "https://mail.google.com/mail/u/0/#inbox",
      googledrive: "https://drive.google.com/drive/u/0/my-drive",
    },
  },
  {
    label: "stream",
    items: {
      "twitch": "https://twitch.tv",
      "youtube": "https://youtube.com",
      },
  },
]

injectBookmarks(bookmarks)

// Select a random variant
updateVariant()
// Or set a static variant
// updateVariant("momo-1")

// For debugging
/*
function iterateVariants() {
  updateVariant()
  setTimeout(iterateVariants, 5000)
}
iterateVariants()
*/
