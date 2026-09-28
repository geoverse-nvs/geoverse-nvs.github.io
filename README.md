# GeoVerse project website

Project page for **GeoVerse: World-Consistent Novel View Synthesis in Geometric Latent Space**.

A static, dependency-free page with a title and author block, TL;DR, demonstration video, method figure, and qualitative comparison figure. The typography and palette are inspired by [AHa-3D](https://kevinxu02.github.io/real2sim-indoor-site/); the implementation is original to this page.

## Edit and preview

- Update the title, authors, TL;DR, and figure captions in `index.html`.
- Adjust the layout and colors in `site.css`.
- Run `python3 -m http.server 8080`, then open `http://localhost:8080`.
- Publish with GitHub Pages using the `main` branch and `/` (root) directory.

## Asset provenance

- `assets/method.pdf` and `assets/qualitative.pdf`: original manuscript figures from GeoVerse Overleaf commit `9c6536f`, exported without changing their contents. Their PNG versions are rasterized for browser display.
- `assets/demo.mp4`: the supplied 30.4-second GeoVerse demo, transcoded to H.264/AAC with fast-start metadata for browser playback.
- `assets/demo-poster.jpg`: a frame from the same demo at 2 seconds.
- Author order, affiliations, and corresponding-author markers follow the author-version Overleaf project `6ab9d8d84f3863fedbffdcd8`, commit `e4b8045`; names retain the source spelling, including `Hunag Mu`.

No AI-generated teaser images are used.
