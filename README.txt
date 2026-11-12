POCKET NOTES - INSTALLATION

A private notes app for Android, iPhone, and desktop. Notes are stored only in this browser on this device, using localStorage. No account and no cloud sync.

INSTALL ON ANDROID (CHROME)
1. Upload ALL files in this folder to the root of a GitHub repository.
2. Open repository Settings > Pages > Build and deployment.
3. Set source to 'Deploy from a branch', branch 'main', folder '/ (root)', then Save.
4. Open the GitHub Pages URL on your phone in Chrome (https://YOURNAME.github.io/REPOSITORY/).
5. In the Chrome three-dot menu, tap 'Install app' or 'Add to Home screen'.
6. Open the new Pocket Notes icon on your home screen.

You can also use another HTTPS static host. PWA installation and offline caching require HTTPS or localhost. Opening index.html directly lets you try it out but does not install the offline PWA.

FEATURES
- Handwrite or sketch on a lined page with finger or stylus; tap Handwriting within any note
- Pen colours, thickness, eraser, undo and redo, clear page, and PNG export
- Handwriting saves with each note and is included in JSON backups
- Existing notes remain intact when upgrading over the same GitHub Pages address
- Create, edit, delete, pin and search typed/handwritten notes
- Organise notes in folders
- Automatic save and offline support after first visit
- Export and import JSON backups (imports merge on note ID)
- Responsive phone/desktop layout, PWA home screen icon

IMPORTANT
- Notes are only stored on this device and in the browser/app storage. Clearing site storage, reinstalling, or switching browsers may delete them.
- Export regular backups and store them somewhere safe.
- This app is NOT encrypted or password protected; anyone with access to the unlocked device/browser profile may read its notes.
- If you change the app code, update CACHE in sw.js so existing installations get new static files.
