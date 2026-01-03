# nextflix
Just another Netflix clone made with NextJS, TailwindCSS, Supabase and TMDb API ✨

## Features
- Authentication with Supabase
- Browse movies and TV shows using TMDb API
- Responsive design with TailwindCSS
- Automated Supabase keep-alive with GitHub Actions

## GitHub Actions

### Keep Supabase Alive
This project includes a GitHub Action that automatically pings your Supabase instance every 24 hours to prevent it from going to sleep (useful for free tier projects).

**Setup:**
1. Go to your repository Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_API_KEY`: Your Supabase anon/public key

The action runs automatically every day at midnight UTC, or you can trigger it manually from the Actions tab.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file with your environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_API_KEY=your_supabase_anon_key
   ```
4. Run the development server:
   ```
   npm run dev
   ```

## Package Updates

Packages have been upgraded to the latest compatible versions within their major version ranges to ensure stability without breaking changes.
