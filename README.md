# Personal Portfolio - Next.js App Router

This project has been refactored to use Next.js 15 with the App Router system.

## Project Structure

```
personal-portfolio-refactored/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── articles/page.tsx        # Articles listing page
│   ├── projects/page.tsx        # Projects page
│   ├── about/page.tsx           # About page
│   ├── admin/page.tsx           # Admin dashboard
│   ├── admin/create/page.tsx    # Create post page
│   ├── admin/edit/[id]/page.tsx # Edit post page (dynamic route)
│   └── post/[id]/page.tsx      # Individual blog post (dynamic route)
├── components/                   # React components
│   ├── ui/                      # UI components (shadcn/ui)
│   ├── Header.tsx              # Navigation header
│   ├── Hero.tsx                # Hero section
│   ├── BlogList.tsx            # Blog post list
│   ├── ArticlesPage.tsx        # Articles page component
│   ├── ProjectsPage.tsx        # Projects page component
│   ├── AboutPage.tsx           # About page component
│   ├── AdminPage.tsx           # Admin dashboard component
│   ├── CreatePostPage.tsx      # Create/edit post form
│   ├── BlogPostPage.tsx        # Individual blog post component
│   ├── Footer.tsx              # Footer component
│   └── constants/              # Data constants
│       ├── Projects.tsx        # Projects data
│       └── SamplePosts.tsx     # Sample blog posts data
├── app/globals.css             # Global styles
├── next.config.mjs             # Next.js configuration
├── package.json                 # Dependencies
└── tsconfig.json               # TypeScript configuration
```

## Key Changes Made

1. **Removed React Router**: Replaced with Next.js App Router file-based routing
2. **Updated Navigation**: Changed from `react-router-dom` to Next.js `Link` and `useRouter`
3. **File Structure**: Organized pages using Next.js App Router conventions
4. **Dependencies**: Removed Vite, React Router, and other unnecessary packages
5. **TypeScript**: Updated configuration for Next.js compatibility

## Routes

- `/` - Home page with hero and latest articles
- `/articles` - All articles listing with search and filters
- `/projects` - Projects showcase
- `/about` - About page
- `/admin` - Admin dashboard for managing posts
- `/admin/create` - Create new blog post
- `/admin/edit/[id]` - Edit existing blog post
- `/post/[id]` - Individual blog post view

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Features

- **Blog Management**: Create, edit, and delete blog posts
- **Responsive Design**: Mobile-first responsive layout
- **Search & Filtering**: Advanced article search and categorization
- **Admin Panel**: Full content management system
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## Technologies Used

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Motion (Framer Motion)
- Local Storage for data persistence
