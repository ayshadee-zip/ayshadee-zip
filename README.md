# Parent Resource Corner ✨

A cheerful little webpage for sharing hand-picked resources with fellow parents —
kids' podcasts, educational worksheets, lovely products and screen-free summer fun.
Bright, playful styling inspired by printable shops like BlogPixie.

## 📂 What's in here

| File | What it does | Do you edit it? |
| --- | --- | --- |
| `resources.js` | **Your list of links** | ✅ **Yes — this is the one!** |
| `index.html` | The page itself (titles, intro, footer) | Only to change wording |
| `styles.css` | Colours and styling | Only if you want a new look |
| `app.js` | Builds the cards from your list | No need to touch |

## ➕ How to add a resource

1. Open **`resources.js`**.
2. Find the category you want (Podcasts, Worksheets, Products or Summer Fun).
3. Copy a block like this and paste it inside that category's `items: [ ... ]`:

   ```js
   {
     title: "The name of the thing",
     description: "One friendly sentence about why it's great.",
     url: "https://the-link-goes-here.com",
     source: "Where it's from",
   },
   ```

4. Save the file and refresh the page. That's it! 🎉

To **remove** a resource, delete its `{ ... }` block. To **reorder**, drag blocks
up or down. The cards rebuild automatically.

## 👀 Preview it on your computer

Just double-click `index.html` to open it in your web browser — no installation needed.

## 🌐 Put it online (free, with GitHub Pages)

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   choose your branch and the `/ (root)` folder, then **Save**.
4. After a minute your site is live at
   `https://<your-username>.github.io/<repo-name>/`.

You can then link to it from your main website as your "Parent Resources" section.
