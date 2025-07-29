# BadWolf24PS Minecraft Server Website

## Overview

This is a full-stack web application for a Minecraft server called BadWolf24PS. The application provides server information, allows users to submit feedback, displays recent community feedback, and includes a Discord community section. It's built with a modern tech stack including React, TypeScript, Express.js, and uses Drizzle ORM with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **State Management**: TanStack Query for server state management
- **Deployment**: Production build with esbuild for server bundling

## Key Components

### Frontend Architecture
- **Component Library**: Uses shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Minecraft-themed design system
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Custom API client with fetch wrapper
- **Theme**: Dark Minecraft-inspired theme with custom CSS variables

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with Neon PostgreSQL serverless connection
- **API Structure**: RESTful endpoints for server status and feedback
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot reload with tsx, production bundling with esbuild

### Database Schema
The application uses three main tables:
- **users**: Basic user authentication (username, password)
- **feedback**: User feedback submissions with ratings and text
- **serverStatus**: Current Minecraft server status information

## Data Flow

1. **Client Requests**: React components use TanStack Query to fetch data
2. **API Layer**: Express routes handle HTTP requests and validate input with Zod
3. **Storage Layer**: DatabaseStorage class abstracts database operations
4. **Database**: Drizzle ORM executes SQL queries against PostgreSQL

### Key Data Flows:
- Server status updates every 30 seconds via polling
- Feedback submissions are validated client-side and server-side
- Recent feedback is displayed with real-time updates

## External Dependencies

### Core Dependencies:
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm**: Type-safe SQL query builder
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **wouter**: Lightweight routing

### Development Tools:
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first styling

## Deployment Strategy

The application is configured for a monorepo deployment:

1. **Development**: 
   - Frontend served by Vite dev server with HMR
   - Backend runs with tsx for hot reload
   - Database migrations handled by Drizzle Kit

2. **Production**:
   - Frontend built to `dist/public` directory
   - Backend bundled with esbuild to `dist/index.js`
   - Static files served by Express in production
   - Environment variables required: `DATABASE_URL`

3. **Database**:
   - Uses Drizzle migrations stored in `./migrations`
   - Schema defined in `shared/schema.ts`
   - Push schema changes with `npm run db:push`

### Key Configuration Files:
- `vite.config.ts`: Frontend build configuration
- `drizzle.config.ts`: Database migration configuration
- `tsconfig.json`: TypeScript configuration for monorepo
- `tailwind.config.ts`: Tailwind CSS configuration

The application emphasizes type safety with shared schemas between client and server, uses modern React patterns with hooks and context, and implements a clean separation of concerns with distinct layers for API, business logic, and data access.

## Recent Changes

### January 29, 2025
- Added Discord community section with invite link (https://discord.gg/Cbvrq283)
- Integrated Discord branding with SiDiscord icons from react-icons/si
- Enhanced footer with Discord community link
- Server displays real-time information for IP: ip-badwolf24ps.aternos:57180
- Server operates daily from 8 AM to 12 PM as specified