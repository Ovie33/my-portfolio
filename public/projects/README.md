# Project Screenshots

Place your project screenshots in this folder (`public/projects/`).

Recommended filenames:
- `foodhutz.png` (or `.jpg`, `.webp`)
- `cavabar.png`
- `shopfeedme.png`
- `yanoschools.png`
- `fixfinder.png`
- `iconiq.png`
- `applehome.png`
- `conversion-landing.png`

Then update the `coverImage` field in `lib/data.ts`:
```ts
coverImage: "/projects/foodhutz.png",
```

You can also add multiple screenshots to the case study gallery page:
```ts
images: [
  "/projects/foodhutz-1.png",
  "/projects/foodhutz-2.png",
],
```
