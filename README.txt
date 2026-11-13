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
* Handwriting-to-text now uses a REAL on-device TrOCR neural network model with Transformers.js / ONNX, not a browser experimental API or cloud OCR. First conversion REQUIRES INTERNET and downloads the model and runtime (roughly 65-100 MB depending on files, potentially more). After successful download the browser caches assets and subsequent recognition can work offline. Retain the same app origin and do not clear Chrome site data. The model is NOT INCLUDED in this ZIP; this is a one-time on-device download. The app remains fully offline for normal note taking. The cache may be evicted under storage pressure. Works best for clear English handwriting written on separate lines; review and correct recognition before saving. Recognition on Pixel 10 Pro is NOT device-tested or guaranteed; large pages may be slow or memory-intensive. The model and library load from Hugging Face and jsDelivr; NO user handwriting is sent to them. If those sites are blocked on your managed device, setup will fail.
* Export to PDF uses the browser's print / Save as PDF and includes typed notes, checklist, photos and handwritten pages; original attached PDFs are separate.
* The lasso operates on pen strokes, not arbitrary parts of strokes or raster photos.
* Images are compressed to help storage, but very large notebooks may exceed the browser's storage allowance. Export backups frequently.
* Passwords cannot be recovered, so keep them safe. Lock notes again before leaving the editor. When unlocked, the current note remains in memory until you lock it or switch notes.


Recognition guide:
  1. Open a handwritten page in Pocket Notes. Write clear English with distinct lines.
  2. While connected to Wi-Fi, tap 'Recognise handwriting' once.
  3. Let the model and runtime download. Chrome caches them locally.
  4. Edit the transcribed text in the review popup, then tap 'Add to typed note'.
  5. On subsequent visits, test recognition with airplane mode enabled (after the model has fully downloaded and the PWA has loaded).
Model: Xenova/trocr-small-handwritten (MIT), Transformers.js 2.17.2.
