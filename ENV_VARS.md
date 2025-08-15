Environment variables
=====================

Create a `.env.local` file in `portfolio/` with:

```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
# Optional (more secure writes in API route):
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

In Supabase, create a table `contacts`:

```
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  source text,
  created_at timestamp with time zone default now()
);
```


