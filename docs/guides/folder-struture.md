# Folder Structure Documentation

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Routing](#routing)
- [Components](#components)
- [Lib](#lib-folder)
- [Hooks](#hooks-folder)
- [Providers](#providers-folder)
- [Utils](#utils-folder)
- [Images](#images)

---

## Overview

This is a guide for developer Ezex to implement based on conventions and best
practices. It outlines the folder structure and recommended approaches for
organizing a Next.js application, ensuring maintainability, scalability, and
clear code organization.

[↑ Back to Top](#folder-structure-documentation)

---

## Folder Structure

```
📦 src
┣ 📂 app
┃ ┣ 📂 (landing)
┃ ┣ 📂 dashboard
┃ ┃ ┣ 📂 _components
┃ ┃ ┣ 📂 _utils
┃ ┃ ┣ 📂 _lib
┃ ┃ ┗ 📜 page.tsx
┃ ┣ 📜 favicon.ico
┃ ┣ 📜 globals.css
┃ ┣ 📜 layout.tsx
┃ ┗ 📜 page.tsx
┣ 📂 components
┣ 📂 hooks
┃ ┣ 📂 use-boolean
┃ ┃ ┗ 📜 use-boolean.ts
┣ 📂 layouts
┣ 📂 lib
┃ ┣ 📂 axios
┃ ┃ ┗ 📜 gateway.ts
┃ ┣ 📜 api.ts
┃ ┗ 📜 auth.ts
┣ 📂 providers
┃ ┣ 📂 react-query
┃ ┃ ┗ 📜 react-query-provider.tsx
┃ ┗ 📜 providers.tsx
┣ 📂 stores
┣ 📂 utils
┃ ┣ 📂 string-utils
┃ ┃ ┗ 📜 string-utils.ts
┃ ┗ 📜 cn.ts
```

[↑ Back to Top](#folder-structure-documentation)

---

## Routing

We use the Next.js app router for handling application routes.

**Example:**

```
app/auth/email/page.tsx  => {baseURL}/auth/email
```

For best practices, refer to the official Next.js documentation on routing:  
[Next.js Routing Documentation](https://nextjs.org/docs/app/building-your-application/routing)

[↑ Back to Top](#folder-structure-documentation)

---

## Components

### Component Types

Components are categorized into three types:

1. **Route-specific components**: These components are unique to a specific
   route and placed inside the corresponding route folder.

    ```
    app/{...your_route}/_components/{component-name}.tsx
    ```

    **Example:**

    ```
    app/dashboard/_components/sidebar.tsx
    ```

2. **Shared components across multiple routes**: These components are used in
   multiple routes but are not globally shared.

    ```
    📦 src
    ┣ 📂 app
    ┃ ┣ 📂 auth
    ┃ ┃ ┣ 📜 auth-form.tsx
    ┃ ┃ ┣ 📂 signin
    ┃ ┃ ┃ ┣ 📜 email
    ┃ ┃ ┃ ┗ 📜 otp
    ```

    Here, `auth-form.tsx` is shared between `email` and `otp` pages.

3. **Globally shared components**: Components that are used across different
   routes and pages are placed inside `src/components`.
    ```
    📦 src
    ┣ 📂 components
    ┃ ┣ 📂 atoms
    ┃ ┣ 📂 molecules
    ┃ ┣ 📂 organisms
    ┃ ┗ 📂 templates
    ```

### Atomic Folder Structure

The component structure follows the Atomic Design principles:

- **Atoms**: Small, reusable UI elements (e.g., buttons, inputs, labels).
- **Molecules**: Groupings of atoms that form more complex UI components (e.g.,
  a search bar with an input and a button).
- **Organisms**: More advanced UI elements that combine molecules and atoms
  (e.g., a complete navbar or card section).
- **Templates**: Page-level layouts that bring together organisms for
  structuring views.

For further best practices, refer to:  
[Atomic Design Folder Structure](https://medium.com/@prathiba2796/react-native-best-practices-for-organizing-code-with-atomic-folder-structure-131858653eb1)

### Naming Conventions

- **Use kebab-case for all filenames**, including component files.
    - **Example**: `user-profile.tsx`, `auth-form.tsx`, `dashboard-sidebar.tsx`.
    - This ensures consistency and readability across the project.

[↑ Back to Top](#folder-structure-documentation)

---

## Lib Folder

### Purpose

The `lib` folder is used for application-specific logic, such as API clients,
authentication handlers, and third-party integrations.

### Special Libraries in Route Pages

If you need to use a specific library inside a route page, you can include it
within the `_lib` folder inside the corresponding route.

**Example:**

```
📂 app
┣ 📂 dashboard
┃ ┣ 📂 _lib
┃ ┃ ┗ 📜 special-lib.ts
```

**Usage inside `page.tsx`:**

```tsx
import specialLib from "./_lib/special-lib";

export default function DashboardPage() {
    specialLib();
    return <div>Dashboard</div>;
}
```

This ensures that special libraries related to a route are scoped correctly.

[↑ Back to Top](#folder-structure-documentation)

---

## Hooks Folder

### Purpose

The `hooks` folder is used for custom React hooks that encapsulate reusable
logic across the application.

### Examples

- **`use-boolean/`** → A hook for toggling boolean values (`true/false`).
- **`use-countdown/`** → A countdown timer hook.
- **`use-counter/`** → A simple counter hook.
- **`use-interval/`** → A hook for handling interval-based logic.
- **`use-isomorphic-layout-effect.ts`** → A wrapper around `useLayoutEffect` for
  SSR compatibility.

[↑ Back to Top](#folder-structure-documentation)

---

## Providers Folder

### Purpose

The `providers` folder is used for context providers and global state management
wrappers.

### Examples

- **`react-query-provider.tsx`** → Configures React Query for managing server
  state.
- **`providers.tsx`** → Aggregates multiple providers in a single entry point
  for clean composition.

[↑ Back to Top](#folder-structure-documentation)

---

## Utils Folder

### Purpose

The `utils` folder is used for pure utility functions that are reusable across
the application.

### Examples

- **`string-utils/`** → Functions for string manipulation (`capitalize`,
  `slugify`).
- **`time-utils/`** → Functions for handling time and dates.
- **`cn.ts`** → A utility for handling conditional classNames (e.g., using
  `clsx`).

### Example `cn.ts`

```ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
    return twMerge(clsx(inputs));
}
```

[↑ Back to Top](#folder-structure-documentation)

---

## Images

### Image Storage Guidelines

We categorize image storage into:

1. **Frequently used images**: Stored in `public/images/{category}/`
    - **Example**: `public/images/icons/logo.svg`
    - Used for branding, UI elements frequently appearing in the app.
2. **Rarely used or specialized images**: Stored in
   `src/assets/images/{category}/`
    - **Example**: `src/assets/images/illustrations/hero.png`
    - Used for less commonly displayed images, like onboarding illustrations.

### Directory Structure

```
📦 src
┣ 📂 assets
┃ ┗  📂 images
┃   ┗ 📂 {category}
┃     ┣ 📜 image-1.png
┃     ┗ 📜 image-2.svg
┃
📦 public
┗ 📂 images
  ┗ 📂 {category}
    ┣ 📜 image-1.png
    ┗ 📜 image-2.svg
```

For images used in most views, place them in `public/images/{category}/`. For
unique or rare images, use `src/assets/images/{category}/`.

[↑ Back to Top](#folder-structure-documentation)

---

This structure ensures better maintainability, optimized performance, and
adherence to best practices.
