# Next Top Loading Bar 🚀

Ever watched that slick loading bar at the top of YouTube and thought, "Damn, I want that for my Next.js app"? Well, good news! You're in the right place!

**Next Top Loading Bar** gives your Next.js application that sweet, sweet loading indicator that spans across the top of the viewport whenever a page navigation happens. It's not just a static bar - it animates to give users that satisfying feeling of progress (even if it's just for show... shhh, don't tell your users! 🤫).

## Installation 📦

Choose your weapon:

```bash
# npm
npm install next-top-page-loading-bar

# yarn
yarn add next-top-page-loading-bar

# pnpm
pnpm add next-top-page-loading-bar

# bun
bun add next-top-page-loading-bar
```

## Compatibility ⚠️

Before you dive in, let's be crystal clear about compatibility:

- ✅ Works with **Next.js 14 or higher**
- ✅ **ONLY** works with the **App Router**
- ❌ Does **NOT** work with the Pages Router

If you're still rocking the Pages Router, we can't help you... it's 2024, time to upgrade! (Just kidding... sort of 😉)

## Usage 🛠️

Using this library is as easy as pie, but there are three essential pieces you need to implement:

### 1. Add the RouteChangeHandler

First, add the `RouteChangeHandler` component to your app's main layout. The best place is inside the `<body>` tag, right at the end (after all your other content):

```tsx
// app/layout.tsx
import { RouteChangeHandler } from 'next-top-page-loading-bar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <RouteChangeHandler />
      </body>
    </html>
  );
}
```

This component is like a ninja 🥷 - you won't see it, but it's doing important work tracking page transitions.

### 2. Use the provided Link component

Replace Next.js's default `Link` component with our enhanced version:

```tsx
// Before 😢
import Link from 'next/link';

// After 🎉
import { Link } from 'next-top-page-loading-bar';

// Usage remains the same
<Link href="/about">About</Link>
```

### 3. Use the provided useRouter hook

Similarly, replace Next.js's `useRouter` with our enhanced version:

```tsx
// Before 😢
import { useRouter } from 'next/navigation';

// After 🎉
import { useRouter } from 'next-top-page-loading-bar';

// Usage remains the same
const router = useRouter();
router.push('/dashboard');
```

### 4. Add the loading bar component

Finally, add the `NextTopLoadingBar` component wherever you want the loading bar to appear. Most people put it at the top of the page or just below the navbar:

```tsx
// app/layout.tsx or any component that's present on all pages
import { NextTopLoadingBar } from 'next-top-page-loading-bar';

export default function MyLayout({ children }) {
  return (
    <>
      <nav>{/* Your navigation */}</nav>
      <NextTopLoadingBar />
      <main>{children}</main>
    </>
  );
}
```

## Customization 🎨

Want to make the loading bar match your brand? No problem! The `NextTopLoadingBar` component accepts props to customize its appearance:

```tsx
<NextTopLoadingBar
  height={3} // Height in pixels (default: 5.38)
  color="#ff0000" // Any valid CSS color (default: #000000)
/>
```

You can use any valid CSS color value, including:
- Hex codes: `#ff0000`
- RGB: `rgb(255, 0, 0)`
- HSL: `hsl(0, 100%, 50%)`
- Named colors: `red`
- CSS variables: `var(--your-brand-color)`

Go wild with it! Make it as subtle or as flashy as you want. It's your app, after all!

## Important Note ⚠️

If you don't use our custom `Link` component and `useRouter` hook, the loading bar won't know when to show up! It's like inviting someone to a party but not telling them the address - they want to come, but they just can't find their way.

## Why This Library? 🤔

- 🔥 **Zero configuration** - it just works!
- 🎨 **Looks awesome** - impress your users with smooth animations
- 🧠 **Smart detection** - knows exactly when page transitions happen
- 🪶 **Lightweight** - won't bloat your bundle size
- ✨ **Customizable** - make it match your brand with custom height and color

## Contributing 🤝

Found a bug? Want to add a feature? We're all ears! Open an issue or submit a PR.

## License 📄

MIT - go wild!

---

Made with ❤️ by developers who got tired of users complaining about not knowing if the page was loading.
