import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 11, fontFamily: "Helvetica" },
  h1: { fontSize: 18, fontWeight: 700 },
  h2: { fontSize: 13, marginTop: 14, fontWeight: 700 },
  small: { color: "#555" },
  item: { marginTop: 6 },
});

function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.h1}>Mehiret Abdissa</Text>
          <Text style={styles.small}>Junior AI Developer & Prompt Engineer</Text>
          <Text style={{ marginTop: 4 }}>
            Email: <Link src="mailto:mercyabdi7@gmail.com">mercyabdi7@gmail.com</Link>  |  GitHub: <Link src="https://github.com/Mercynow21">github.com/Mercynow21</Link>  |  LinkedIn: <Link src="https://www.linkedin.com/in/mehiret-abdissa21">linkedin.com/in/mehiret-abdissa21</Link>
          </Text>
        </View>

        <View>
          <Text style={styles.h2}>Summary</Text>
          <Text style={styles.item}>Entry‑level AI developer focused on LLM integration, prompt engineering, and shipping clean, accessible web apps.</Text>
        </View>

        <View>
          <Text style={styles.h2}>Skills</Text>
          <Text style={styles.item}>TypeScript, JavaScript, Python; React, Next.js, Tailwind; OpenAI API, Supabase; Vercel, Git/GitHub.</Text>
        </View>

        <View>
          <Text style={styles.h2}>Projects</Text>
          <Text style={styles.item}>AI‑Powered Portfolio Generator — 60% faster content creation. Live: milli-portfolio-5s47.vercel.app</Text>
          <Text style={styles.item}>AI Chatbot Knowledge Assistant — 50% less research time for testers.</Text>
          <Text style={styles.item}>AI Blog Post Generator — From ~3 hours to &lt;15 minutes per article.</Text>
        </View>
      </Page>
    </Document>
  );
}

export async function GET() {
  const pdfStream = await renderToStream(<ResumePDF />);

  return new NextResponse(pdfStream as unknown as ReadableStream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=Mehiret_Abdissa_Resume.pdf",
      "Cache-Control": "no-store",
    },
  });
}


