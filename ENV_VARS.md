Environment variables
=====================

Create a `.env.local` file in `portfolio/` with:

```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
# Optional (more secure writes in API route):
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Basic auth for /admin
BASIC_AUTH_USER=admin
BASIC_AUTH_PASS=choose-a-strong-password
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

Row Level Security (recommended):

```
alter table public.contacts enable row level security;

-- Allow anonymous inserts from your API route
create policy "allow_anon_insert_contacts"
on public.contacts for insert
to anon using (true) with check (true);
```


