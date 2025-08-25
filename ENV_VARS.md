Environment variables
=====================

Create a `.env.local` file in `portfolio/` with:

```
RESEND_API_KEY=your-resend-api-key
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL="Portfolio <onboarding@resend.dev>"

# Basic auth for /admin
BASIC_AUTH_USER=admin
BASIC_AUTH_PASS=choose-a-strong-password
```

Remove Supabase variables and table setup; contact form now sends an email via Resend. Get an API key at `https://resend.com` and add it here. Set `CONTACT_TO_EMAIL` to where you want to receive messages.


