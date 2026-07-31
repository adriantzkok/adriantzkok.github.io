# Personal Portfolio

This is a personal portfolio website I've created to showcase my work across various projects.

## Routes

- `/` - Home page
- `/about` - About page
- `/projects` - Projects showcase page
- `/blog` - Blog index and posts

## Project structure

```text
app/                 # Next.js routes and route-owned components
	about/_components/
	blog/_components/
	projects/_components/
components/
	home/              # Home page sections and composition
	layout/            # Site-wide header and footer
	providers/         # React context providers
	shared/            # Reusable layout and media components
	ui/                # Low-level UI primitives
data/                # Static, typed content
lib/                 # Data access, utilities, and shared helpers
public/              # Static assets
```

Keep components used by only one route in that route's `_components` folder.
Move a component into `components` only when it is shared across routes, and
group it there by responsibility rather than by file type.

## Features

- **Project Showcase**: Display and highlight various projects
- **Responsive Design**: Mobile-first responsive layout
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Dark/Light Theme**: Theme switching with next-themes
- **Animations**: Smooth animations with Motion (Framer Motion)
- **TypeScript**: Full type safety throughout the application
