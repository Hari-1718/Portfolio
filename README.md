# Hari Prasad Chinimilli Portfolio

Welcome to the source code for my personal portfolio website!  
This project showcases my skills, projects, and achievements as a Data Scientist, AI Enthusiast, and Web Developer.

---

## 🚀 Project Overview

This portfolio is built with modern web technologies to provide a fast, responsive, and visually appealing showcase of my work and background.

**Live Demo:**  
_Deploy your site and add the link here!_

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) (for animations)
- [Radix UI](https://www.radix-ui.com/) (for accessible UI primitives)

---

## 📂 Project Structure

```
hari-prasad-portfolio-showcase-main/
│
├── public/                # Static assets (favicon, images, etc.)
├── src/
│   ├── components/        # UI components (grouped by type)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Main pages (Index, NotFound)
│   ├── App.tsx            # App entry point
│   └── main.tsx           # React root rendering
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── ...                    # Other config and lock files
```

---

## 🧑‍💻 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Hari-1718/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

---

## 🌐 Deployment

You can deploy this project to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.):

- Build the project: `npm run build`
- Deploy the contents of the `dist` folder.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE) (add a LICENSE file if you want).

---

## 🙋‍♂️ Contact

- [LinkedIn](https://www.linkedin.com/in/haripch/)
- [GitHub](https://github.com/Hari-1718)
- [Email](mailto:hariprasadchinimilli18@gmail.com)

---

Feel free to fork, star, or open issues and pull requests!

---

Absolutely! Here’s a **checklist and fixes** for the most common Vercel + Vite build errors, based on your project and the best practices for React/Vite/TypeScript deployments:

---

## ✅ 1. **Check `vite.config.ts`**

Your `vite.config.ts` should look like this (minimal, no unnecessary plugins):

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```
- **Remove `lovable-tagger`** if you are not using it, as it can cause build issues on Vercel.

---

## ✅ 2. **Check `tsconfig.json` and Path Aliases**

Make sure your `tsconfig.json` and `tsconfig.app.json` have the correct path alias:

```json
"compilerOptions": {
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```
- This matches your current setup, so you’re good here.

---

## ✅ 3. **Check for Missing Files or Incorrect Imports**

- Make sure all imports using `@/` actually point to files that exist.
- If you renamed or deleted files during cleanup, check for any leftover imports in your codebase.

**To check:**
```bash
npm run build
```
- If you see errors like "Cannot find module '@/components/ui/button'", update the import to the correct grouped file (e.g., `@/components/ui/MiscUI`).

---

## ✅ 4. **Check Environment Variables**

- If you use `import.meta.env.VITE_*` anywhere, make sure those variables are set in Vercel’s dashboard under Project Settings > Environment Variables.

---

## ✅ 5. **Check for TypeScript/ESLint Errors**

- Run a local build:
  ```bash
  npm run build
  ```
- If you see type errors, fix them locally before deploying.
- If you want to force the build (not recommended for production), you can run:
  ```bash
  npm run build -- --force
  ```

---

## ✅ 6. **Check for Unused or Extra Files**

- You already cleaned up extra files in `src/components/ui/`.
- Make sure there are no leftover imports to deleted files.

---

## ✅ 7. **Check for Correct Entry Point**

- Your `index.html` should have:
  ```html
  <script type="module" src="/src/main.tsx"></script>
  ```
- Your `src/main.tsx` should render your `<App />` component.

---

## What to do next:

1. **Run `npm run build` locally.**  
   - If it fails, fix the error shown in your terminal.
   - If it succeeds, try deploying to Vercel again.

2. **If Vercel still fails:**  
   - Copy the full error message after "transforming..." and paste it here.
   - I will give you the exact fix for that error.

---

### Would you like a script to check for broken imports or missing files automatically?  
Or, if you paste the error log after "transforming...", I’ll give you the precise fix!

---

**Summary:**  
- Double-check your `vite.config.ts` and remove unused plugins.
- Make sure all imports are correct and files exist.
- Run a local build to catch errors before deploying.
- Set any required environment variables in Vercel.
- Share the full error log if you get one after "transforming...".

Let me know if you want a custom script or if you have the error log!

---

**Your build error:**
```
Could not load .../src/components/ui/button (imported by src/components/ui/Feedback.tsx): ENOENT: no such file or directory, open '.../src/components/ui/button'
```
**What this means:**  
Your code is trying to import `@/components/ui/button` in `Feedback.tsx`, but you deleted `button.tsx` during your UI consolidation.  
**You must update all imports of `@/components/ui/button` to import from the correct grouped file, which is now `@/components/ui/MiscUI`.**

---

## **How to Fix**

### 1. **Update the Import in `Feedback.tsx`**

**Find this line in `src/components/ui/Feedback.tsx`:**
```ts
import { Button } from "@/components/ui/button";
```
**Change it to:**
```ts
import { Button } from "@/components/ui/MiscUI";
```

---

### 2. **Check for Other Old Imports**

- Search your codebase for any other `@/components/ui/button` imports and update them to `@/components/ui/MiscUI`.

---

### 3. **Rebuild**

After fixing the import, run:
```bash
npm run build
```
Your build should now succeed.

---

## **Why did this happen?**
You deleted the standalone `button.tsx` file after merging it into `MiscUI.tsx`, but some files (like `Feedback.tsx`) still import from the old path.

---

## **Summary of Fix**
- Update all imports of `@/components/ui/button` to `@/components/ui/MiscUI`.
- Save and rebuild.

---

**If you want, I can automatically scan and fix all such imports for you. Let me know if you want a script or want to check for other missing files!**