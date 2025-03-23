import { injectBookmarks } from "./bookmarks.js"
import { updateVariant } from "./variants.js"

const bookmarks = [
  {
    label: "reddit",
    items: {
      "anilist": "https://anilist.co/home",
      "seedbox": "https://yuckyface.pan.usbx.me/rutorrent/",
      "letterboxd": "https://letterboxd.com",
      "robinhood": "https://robinhood.com",
    },
  },
  {
    label: "tools",
    items: {
      "img > compress": "https://compressimage.io/",
      "img > upscale": "https://bigjpg.com/",
      "css > shadows": "https://www.joshwcomeau.com/shadow-palette/",
      "js > bundlephobia": "https://bundlephobia.com/",
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
    label: "ressources",
    items: {
      "react > bulletproof": "https://github.com/alan2207/bulletproof-react",
      "js > patterns": "https://www.patterns.dev/#patterns",
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
