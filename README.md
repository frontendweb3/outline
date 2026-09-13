# Outline Ghost CMS Theme

A stylish, modern, and content-focused theme for Ghost CMS 6. Outline is designed to be easy to use, highly performant, and simple to customize, providing a great reading experience for your audience.

🖥️ **Live Screenshots Demo**: [https://frontendweb3.github.io/outline/screenshots/](https://frontendweb3.github.io/outline/screenshots/)

---

## Features

- **Flexible Card Layouts**: Choose between **Featured** (large highlight card + grid) and **Simple** (uniform grid) post card styles.
- **2 & 3 Column Post Grids**: Easily switch post listings between 2-column or 3-column grid layouts.
- **Customizable Homepage Hero**: Hero section with custom headline title, description text, or option to hide it completely.
- **Dual Pagination Styles**: Switch post pagination between **Basic** (numbered pagination with icons) and **Simple** (Prev/Next buttons).
- **Header Customization**: Toggle visibility of the site title logo, as well as **Sign In** and **Sign Up** membership buttons in the header.
- **Dark & Light Mode**: Built-in sleek dark and light theme styling powered by design tokens.
- **Code Block Copy Button**: Clean article code block syntax highlighting with a single-click copy button.
- **Fully Responsive Design**: Optimized, content-focused reading experience across desktop, tablet, and mobile viewports.

---

## How to Download & Install Theme on Ghost CMS 6

If you want to use this theme on your Ghost website without setting up code or development tools, follow these step-by-step instructions:

### Step 1: Download Theme Zip File

1. Open the latest releases page in your browser:  
   👉 **[https://github.com/frontendweb3/outline/releases/latest](https://github.com/frontendweb3/outline/releases/latest)**
2. Scroll down to the **Assets** section at the bottom of the latest release.
3. Click on `outline.zip` (or `outline-1.0.0.zip`) to save it to your computer.

> 💡 **Important**: Do **NOT** unzip or extract the downloaded file. Ghost CMS requires the theme file as a compressed `.zip` file.

### Step 2: Upload & Activate in Ghost CMS 6

1. Log into your Ghost Admin Dashboard (e.g., `https://yourdomain.com/ghost`).
2. Click the **Settings** icon (⚙️ gear icon located in the bottom-left corner of the sidebar).
3. Select **Site design** (or **Design**).
4. Click **Change theme** located at the bottom-left of the design sidebar.
5. Click the **Upload theme** button in the top-right corner.
6. Drag and drop your downloaded `outline.zip` file into the upload box (or click to browse and select the file from your computer).
7. Click **Activate** to apply the Outline theme to your Ghost site.

---

## Contribution

Contributions are welcome! Follow these steps to contribute:

1. **Fork & Clone** the repository:

   ```bash
   git clone https://github.com/frontendweb3/outline.git
   cd outline
   ```

2. **Install Dependencies**:

   ```bash
   pnpm install
   ```

3. **Start Development Server**:

   ```bash
   pnpm dev
   ```

4. **Validate Theme**:

   ```bash
   pnpm test
   ```

5. **Submit a Pull Request**:
   Create a branch for your changes and submit a PR to `main`.

---

## Scripts

- `pnpm dev` — Starts Vite HMR dev server on port 5173 for live reloading.
- `pnpm build` — Compiles production assets and generates `outline.zip`.
- `pnpm test` — Validates Ghost CMS 6 compatibility using `gscan`.
- `pnpm screenshot` — Captures full-page screenshots of all routes across mobile, tablet, and desktop viewports.

---

## License

Released under the [MIT License](file:///home/officialrajdeepsingh/frontendweb/ghost-theme/outline/LICENSE.md).
