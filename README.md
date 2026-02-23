# 🌐 Framer i18n Plugin

> Add multi-language support to your Framer projects. Create, manage, and export translations for internationalization.

[![Framer Plugin](https://img.shields.io/badge/Plugin-View-blue)](https://www.framer.com/marketplace/)

## The Problem

You're building a website that needs to reach international audiences. But managing translations in Framer is painful:

- Scattered text across all your pages
- No easy way to track what needs translation
- Exporting/importing translations is manual and error-prone
- Hard to maintain consistency across languages

## The Solution

**Framer i18n** gives you a centralized dashboard to manage all your translations in one place.

### What It Does

- **Language Management** — Add unlimited languages with one click
- **Translation Keys** — Organize text by feature/section (e.g., `hero.title`, `nav.home`)
- **Side-by-Side Editing** — Edit one language, preview others
- **JSON Export** — Download ready-to-use translation files
- **JSON Import** — Bring in existing translations

## Who It's For

| User | Use Case |
|------|----------|
| **Freelancers** | Multi-region client projects |
| **Agencies** | Sites targeting international markets |
| **SaaS Founders** | Localization for product launches |
| **Bloggers** | Content in multiple languages |

## Installation

### Step 1: Download
Download `plugin.zip` from this repository's Releases section.

### Step 2: Upload to Framer
1. Go to [Framer Marketplace Dashboard](https://www.framer.com/marketplace/dashboard/plugins/)
2. Click **Add Plugin**
3. Select `plugin.zip` from your computer
4. Wait for upload to complete

### Step 3: Activate
1. Open your Framer project
2. Click the **+** button in the plugins panel
3. Search for "i18n" and add it

## User Guide

### Adding Languages

1. Open the plugin in Framer
2. Click **+ Add** in the Languages section
3. Choose from presets (English, Spanish, French, German, etc.) or enter custom language codes
4. Languages appear as tabs in the editor

```
Supported preset languages:
🇺🇸 English (en)
🇪🇸 Spanish (es)
🇫🇷 French (fr)
🇩🇪 German (de)
🇮🇹 Italian (it)
🇵🇹 Portuguese (pt)
🇯🇵 Japanese (ja)
🇰🇷 Korean (ko)
🇨🇳 Chinese (zh)
🇳🇱 Dutch (nl)
```

### Creating Translation Keys

Keys organize your translations. Use dot notation for hierarchy:

```
# Good key structure
hero.title
hero.subtitle
cta.button
nav.home
nav.about
footer.copyright

# Avoid
title1
title2
buttonText
```

**Best Practices:**
- Use lowercase with dots
- Group by page/section
- Keep keys descriptive but concise

### Editing Translations

1. Click **Edit Translations**
2. Select a language from the tabs at the top
3. Click **+ Add Key** to create new keys
4. Type translations in the text area
5. See previews of other languages below each field

### Exporting Translations

1. Click **Export JSON**
2. A JSON file downloads automatically
3. Add to your Framer project

**Example output:**
```json
{
  "hero.title": "Welcome to our site",
  "hero.subtitle": "We make amazing things",
  "cta.button": "Get Started",
  "nav.home": "Home",
  "nav.about": "About"
}
```

### Importing Translations

1. Click **Import JSON**
2. Select your translation file
3. Keys merge with existing (existing keys preserved)

## Features

### Core Features
- ✅ **Unlimited Languages** — Add as many as you need
- ✅ **Key Management** — Create, edit, delete translation keys
- ✅ **Side-by-Side View** — Preview all languages while editing
- ✅ **JSON Export** — Download for use in your project
- ✅ **JSON Import** — Bring in existing translations
- ✅ **Search** — Find keys quickly

### UI Features
- ✅ **Dark/Light Theme** — Automatic based on Framer settings
- ✅ **Keyboard Shortcuts** — Faster navigation
- ✅ **Auto-save** — Never lose work

## Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| Languages | Supported locales | EN, ES, FR, DE |
| Keys | Translation identifiers | User-defined |
| Export Format | JSON structure | Flat key-value |

## Troubleshooting

### "My translations aren't showing up"

1. Check the JSON format is correct
2. Verify key names match exactly
3. Ensure the JSON file is added to your Framer project

### "How do I use translations in Framer?"

After exporting, add the JSON to your project and reference keys in your text layers or code. The plugin exports a simple key-value format that's easy to consume.

### "Can I update translations later?"

Yes! Just re-export after making changes. The JSON format is designed for easy version control.

## Technical Details

- **Storage:** Local (plugin data stays in Framer)
- **Export Format:** JSON (universal, easy to parse)
- **No External API:** Works offline
- **Privacy:** Your translations stay in your project

## Roadmap

Want to see these features? Open an issue!

- 🔄 **AI Translation** — Auto-translate with OpenAI/Claude
- 📱 **Mobile Preview** — Test translations on phone mockup
- 🔗 **CMS Integration** — Sync with content management systems
- 📊 **Translation Progress** — Track completion % per language

## Support

- **Bugs:** Open an issue on GitHub
- **Questions:** Use GitHub Discussions
- **Feature Requests:** Open an issue with "feature" label

---

**Version:** 0.1.0  
**Author:** [Levi Tijerina](https://github.com/levi-openclaw)  
**License:** MIT

---

*Built with ❤️ for the Framer community*
