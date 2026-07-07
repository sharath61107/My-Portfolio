# Sharath S — Portfolio Website

## 1. Add your own images
Drop your files into the `images/` folder using these exact names (or update the `src=` in `index.html` if you rename them):

| File name | Used for |
|---|---|
| `profile-photo.jpg` | Your photo on the ID card in the hero |
| `college-logo.png` | Small college logo on the ID card |
| `project-1.jpg` | Skill Dragon Community Website thumbnail |
| `project-2.jpg` | Mozhi Maiyyam thumbnail |
| `project-3.jpg` | Prime Fitness Studio thumbnail |

Until you add real files, each spot shows a clean placeholder ("Add your photo" / "Add project image") so the layout never breaks.

Also add your resume as `resume.pdf` in the main folder — the "Download Resume" button links to it.

## 2. Update your real links
Open `index.html` and search for:
- `YOUR-LINKEDIN`, `YOUR-GITHUB`, `YOUR-INSTAGRAM` — replace with your usernames (appears twice: hero + footer)
- `YOUR-FORM-ID` in the contact `<form action="...">` — see step 4 below for how to get this

## 3. Preview it locally
Just double-click `index.html` to open it in your browser — no install needed.

## 4. Make the contact form actually send you emails (free)
The form currently points to Formspree, a free service:
1. Go to https://formspree.io and sign up (free tier is enough).
2. Create a new form, it gives you a URL like `https://formspree.io/f/abc12345`.
3. In `index.html`, replace `YOUR-FORM-ID` in the form's `action` attribute with that ID.
4. Formspree emails you every submission — no backend needed.

## 5. Host it for free — GitHub Pages (recommended)
1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository, e.g. `sharath-portfolio`.
3. Upload all files in this folder (`index.html`, `css/`, `js/`, `images/`, `resume.pdf`) to that repository — you can drag-and-drop them in the GitHub web UI (Add file → Upload files).
4. Go to the repo's **Settings → Pages**.
5. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** and folder to **/(root)**, then Save.
6. After ~1 minute your site is live at:
   `https://YOUR-GITHUB-USERNAME.github.io/sharath-portfolio/`

### Alternative free hosts (drag-and-drop, no Git needed)
- **Netlify Drop**: go to https://app.netlify.com/drop and drag this whole folder in. Live in seconds, with a free `.netlify.app` URL.
- **Vercel**: https://vercel.com — import the GitHub repo, or use their CLI to deploy the folder directly.

Any of these three work well and cost nothing.

## What's already built in
- Floating ID card animation in the hero, replays every time the page loads
- Minimal scroll-reveal fade/rise animation on every section (respects "reduced motion" accessibility setting)
- Fully responsive: works down to mobile, with a collapsible nav menu
- Sections: Hero, About, Skills, Projects, Education & Experience, Contact form, Footer
