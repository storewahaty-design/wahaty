# Wahaty — Go Live Guide (GitHub Pages + your domain)

This guide takes your site from files to a live website on your own domain, for free.
Follow it top to bottom. It assumes no prior experience.

--------------------------------------------------------------------
## PART A — Put the site on GitHub Pages (free hosting)
--------------------------------------------------------------------

### 1. Make a free GitHub account
- Go to https://github.com and click "Sign up". Verify your email.

### 2. Create a repository (a folder for your website)
- Top right, click the "+" > "New repository".
- Repository name: `wahaty`  (lowercase, no spaces)
- Set it to **Public**.
- Click "Create repository".

### 3. Upload your website files
- On the new repo page, click "uploading an existing file" (a link in the middle).
- Open the site folder on your computer and drag in EVERYTHING:
  - `index.html`
  - `store.js`
  - the `stores` folder (with all 7 store folders inside)
  - the `fonts` folder (if present)
  - `google-apps-script.gs` (optional, harmless)
- Wait for the upload, then click "Commit changes" (green button).

### 4. Turn on GitHub Pages
- In the repo, click "Settings" (top menu) > "Pages" (left menu).
- Under "Branch", choose `main` and folder `/ (root)`, then "Save".
- Wait 1–2 minutes. A link appears like:
  `https://YOURNAME.github.io/wahaty/`
- Open it — your site is live! The 7 store frames open `/stores/care/`, etc.

--------------------------------------------------------------------
## PART B — Connect YOUR domain
--------------------------------------------------------------------

You bought a domain (e.g. `wahaty.com`). Two things to do:

### 1. Tell GitHub your domain
- Repo > Settings > Pages > "Custom domain" box.
- Type your domain, e.g. `wahaty.com`, click "Save".
- Tick "Enforce HTTPS" once it becomes available (may take an hour).

### 2. Point your domain to GitHub (at the company you bought it from)
Log in where you bought the domain (GoDaddy, Namecheap, etc.), find "DNS settings",
and add these records:

  Type: A     Name: @    Value: 185.199.108.153
  Type: A     Name: @    Value: 185.199.109.153
  Type: A     Name: @    Value: 185.199.110.153
  Type: A     Name: @    Value: 185.199.111.153
  Type: CNAME Name: www  Value: YOURNAME.github.io

- Save. DNS can take 30 minutes to a few hours to activate.
- After that, `https://wahaty.com` shows your site.

### About the 7 stores' addresses
With this setup the stores live at friendly folder URLs:
  wahaty.com/stores/care/    wahaty.com/stores/beauty/   ... etc.
This is the free, simple option you chose. (Real subdomains like
care.wahaty.com are possible later but need 7 separate repos + DNS entries.)

--------------------------------------------------------------------
## PART C — Turn on Google Sheets order logging
--------------------------------------------------------------------

1. Open `google-apps-script.gs` in this folder and follow the steps at the top of that file.
2. It gives you a Web App URL ending in `/exec`.
3. Open `store.js`, find this near the top:
       const SHEET_ORDER_URL = "";
   Put your URL inside the quotes:
       const SHEET_ORDER_URL = "https://script.google.com/macros/s/XXXX/exec";
4. Re-upload `store.js` to GitHub (repo > click store.js > pencil icon > paste > Commit).
5. Place a test order on the site — a new row appears in your Sheet.

Orders always still open WhatsApp too, so nothing breaks if the Sheet is off.

--------------------------------------------------------------------
## Updating the site later
--------------------------------------------------------------------
- To change anything (prices, products, categories): edit the file on your computer,
  then in GitHub open that file > pencil icon > paste the new version > "Commit changes".
- The live site updates within a minute.

Questions or stuck on a step? Tell me which step number and I'll walk you through it.
