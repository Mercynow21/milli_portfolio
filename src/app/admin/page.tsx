import { createClient } from "@supabase/supabase-js";

async function getContacts() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return [] as Array<{ id: string; name: string; email: string; message: string; created_at: string }>;
  }
  const supabase = createClient(supabaseUrl, serviceKey);
  const { data } = await supabase
    .from("contacts")
    .select("id, name, email, message, created_at")
    .order("created_at", { ascending: false })
    .limit(100);
  return (data ?? []) as Array<{ id: string; name: string; email: string; message: string; created_at: string }>;
}

export default async function AdminPage() {
  const rows = await getContacts();
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Admin · Messages</h1>
      <p className="mt-2 text-sm text-black/60 dark:text-white/60">Protected by Basic Auth via middleware.</p>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left border-b border-black/10 dark:border-white/15">
            <tr>
              <th className="py-2 pr-4">When</th>
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Email</th>
              <th className="py-2 pr-4">Message</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-black/5 dark:border-white/10">
                <td className="py-2 pr-4 whitespace-nowrap">{new Date(r.created_at).toLocaleString()}</td>
                <td className="py-2 pr-4">{r.name}</td>
                <td className="py-2 pr-4">{r.email}</td>
                <td className="py-2 pr-4 max-w-[540px] break-words">{r.message}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="py-4 text-black/60 dark:text-white/60">No data or env vars not set.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


