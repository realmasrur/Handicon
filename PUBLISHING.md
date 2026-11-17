# Publishing Handicon

Step by step, from a phone using Termux or from any computer. You only do steps 1 to 4 once.

`npm install handicon` works for other people only after the package is published to npm. Until then it fails.

## 1. Create an npm account

1. Go to https://www.npmjs.com/signup and create an account. Pick a username you like, because it becomes your public name on npm.
2. Verify your email. npm will not let you publish until you do.
3. Turn on two-factor login: profile picture, **Account**, **Two-Factor Authentication**, then **Enable 2FA**. Choose "Authorization and publishing" and scan the code with an authenticator app. Save the recovery codes.

## 2. Set up Termux (phone)

Install Termux from F-Droid. The Play Store version is outdated.

```bash
pkg update && pkg upgrade
pkg install nodejs git
node -v
npm -v
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 3. Get the code

The repository is private, so Git needs to know it is you. In Termux, sign in once with the GitHub tool:

```bash
pkg install gh
gh auth login
```

Choose GitHub.com, HTTPS, and "Login with a web browser". It shows a code and a link. Open the link on your phone, enter the code and approve. Then:

```bash
gh repo clone realmasrur/Handicon
cd Handicon
npm install
```

If you already have the folder, run `git pull` inside it. After `gh auth login`, `git pull` and `git push` work without asking again.

## 4. Check the package name

```bash
npm view handicon
```

- `404 Not Found` means the name is free. Continue.
- A package is printed means the name is taken. Use a scoped name instead, which always belongs to you: change `"name"` in `package/package.json` to `"@your-npm-username/handicon"`, and change the install command text in `src/components/InstallCommand.tsx`, `src/components/FooterInstall.tsx`, `src/components/IconDetail.tsx`, `src/lib/icons.ts`, and the examples in `src/app/page.tsx` and `package/README.md`. You will also add `--access public` when you publish (step 7).

## 5. Test before you publish

```bash
npm test
npm run pack:check
```

`npm test` builds the package and checks every icon in the ESM build, the CommonJS build, the types and the raw SVG files. `npm run pack:check` lists exactly which files would be uploaded. You should see `dist/`, `svg/`, `README.md`, `LICENSE` and `package.json`.

To try it as a real install, in a separate folder:

```bash
npm pack ./package
mkdir ~/handicon-test && cd ~/handicon-test
npm init -y
npm install react react-dom ~/Handicon/handicon-0.2.0.tgz
node -e "const h = require('handicon'); console.log(h.iconNames.length, 'icons')"
```

## 6. Log in

```bash
npm login
```

npm prints a web address. Open it in your phone browser, sign in, and approve. Back in Termux, check it worked:

```bash
npm whoami
```

If the browser flow gives you trouble, use `npm login --auth-type=legacy`, which asks for your username, password and a one-time code in the terminal.

## 7. Publish

```bash
cd ~/Handicon
npm run publish:pkg
```

This rebuilds the icons and runs `npm publish ./package`. npm asks for a one-time code from your authenticator app. For a scoped name, run it with the flag instead: `npm run icons && npm publish ./package --access public`.

Check it:

```bash
npm view handicon
```

Within a minute, `npm install handicon` works from anywhere. Your package page is at `https://www.npmjs.com/package/handicon`.

## 8. Release an update

1. Add or change icons in `icons/source.mjs`.
2. Add a note to `CHANGELOG.md`.
3. Raise the version. npm refuses to publish the same version twice.
   ```bash
   cd package && npm version minor --no-git-tag-version && cd ..
   ```
   Use `patch` for fixes (0.2.0 to 0.2.1), `minor` for new icons (0.2.0 to 0.3.0), and `major` for changes that break existing code.
4. `npm test`, then `npm run publish:pkg`.
5. Save it on GitHub (you stay signed in from step 3):
   ```bash
   git add -A
   git commit -m "Release 0.3.0"
   git tag v0.3.0
   git push && git push --tags
   ```

## 9. Put the website online (free)

1. Go to https://vercel.com and sign in with GitHub.
2. Choose **Add New**, then **Project**, and import `Handicon`. Private repositories work on Vercel's free Hobby plan when they belong to your personal account. If `Handicon` is not listed, open **Adjust GitHub App Permissions** and allow Vercel to see it.
3. Leave the settings as they are. Vercel detects Next.js, and `npm run build` already generates the icons first.
4. Click **Deploy**. You get a public address like `handicon.vercel.app`.
5. Put that address in the `homepage` field of `package/package.json` so it shows on your npm page, then release a patch.

## Making the package useful to developers

- Keep the README examples working. They are the first thing people read on npm.
- Keep icon names stable. Renaming an icon breaks everyone's imports, so treat it as a `major` change.
- Keep the changelog current so people know what a new version changes.
- Because the repository is private, the npm page has no link back to it. Put a way to reach you (your website or an email) in the package README if you want bug reports.
