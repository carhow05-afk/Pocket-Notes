Pocket Notes Pro — phone-installable offline notes PWA
=====================================================

Installation (GitHub Pages):
1. Export a backup from your EXISTING Pocket Notes first.
2. Extract this ZIP and upload all seven files into the SAME GitHub Pages folder/repository as your old Pocket Notes app.
3. Wait for GitHub Pages to deploy. Refresh the website twice in Chrome; if the old interface appears, close and reopen it.
4. Chrome (Android) → menu → Install app / Add to Home screen.

Data compatibility: Continues using the original 'pocket-notes-v1' localStorage key and imports old strokes into page 1. Do not change the site origin or path. Keep regular JSON backups. Photos and PDFs use storage space quickly, and localStorage is capacity-limited.

Included: lined/grid/dotted/blank papers, multicolour pens, transparent highlighter, separated eraser layer, lasso-stroke selection/move/delete, multiple pages, typed text and handwriting in the same note, add text to paper, add and annotate photos on handwriting pages, checklists, tags, folder/type/date searching, PIN/password-protected notes using AES-GCM and PBKDF2, PNG page export, complete notes PDF via print → Save as PDF, PDF attachments, offline PWA.

Important limits:
* PDF attachments can be opened and retained locally, but actual drawing on the pages of an imported PDF is NOT implemented. It would require bundling a robust PDF renderer.
* Handwriting-to-text uses the experimental browser-native Handwriting Recognition API when supported; on most Android browsers this is NOT currently available. There is no cloud OCR fallback.
* Export to PDF uses the browser's print / Save as PDF and includes typed notes, checklist, photos and handwritten pages; original attached PDFs are separate.
* The lasso operates on pen strokes, not arbitrary parts of strokes or raster photos.
* Images are compressed to help storage, but very large notebooks may exceed the browser's storage allowance. Export backups frequently.
* Passwords cannot be recovered, so keep them safe. Lock notes again before leaving the editor. When unlocked, the current note remains in memory until you lock it or switch notes.
