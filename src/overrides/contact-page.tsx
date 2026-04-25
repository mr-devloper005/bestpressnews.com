import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { siteIdentity } from '@/config/site.identity'
import { SITE_CONFIG } from '@/lib/site-config'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  const domain = siteIdentity.domain
  const pressEmail = `press@${domain}`
  const generalEmail = `contact@${domain}`

  return (
    <div className="min-h-screen bg-[#f6f2ea] text-[#10202e]">
      <NavbarShell />
      <header className="press-hero-mesh border-b border-white/5 py-12 text-[#f8f4ed] sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s get your next release right</h1>
          <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">
            Editorial questions, account setup, and timing—route through the right lane so the desk can respond with useful next steps.
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <h2 className="font-display text-lg font-semibold text-[#102e50]">Ways to reach {SITE_CONFIG.name}</h2>
            <a
              href={`mailto:${pressEmail}?subject=Press%20inquiry`}
              className="press-card flex items-start gap-3 p-4 no-underline transition"
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#e78b48]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#4a5568]">Editorial & sourcing</p>
                <p className="mt-1 text-base font-semibold text-[#102e50]">{pressEmail}</p>
                <p className="mt-1 text-sm text-muted-foreground">Wires, corrections, embargoes, and journalist sign-ups.</p>
              </div>
            </a>
            <a
              href={`mailto:${generalEmail}?subject=General%20enquiry`}
              className="press-card flex items-start gap-3 p-4 no-underline transition"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#e78b48]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#4a5568]">Account & product</p>
                <p className="mt-1 text-base font-semibold text-[#102e50]">{generalEmail}</p>
                <p className="mt-1 text-sm text-muted-foreground">Invoices, access, and demo scheduling for communicators.</p>
              </div>
            </a>
            <div className="press-card flex items-start gap-3 p-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#e78b48]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#4a5568]">Coverage hours</p>
                <p className="mt-1 text-sm text-[#2d3a45]">Monday–Friday, 7:00–20:00 ET. Critical advisories: follow your escalation path in the dashboard when enabled.</p>
              </div>
            </div>
            <div className="press-card flex items-start gap-3 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e78b48]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#4a5568]">Headquarters</p>
                <p className="mt-1 text-sm text-[#2d3a45]">U.S. news desk · distributed team across time zones to match release windows.</p>
              </div>
            </div>
          </div>
          <div className="press-card p-0">
            <div className="border-b border-border/60 bg-gradient-to-r from-[#f5c45e]/20 to-transparent px-6 py-4">
              <h2 className="font-display text-xl font-semibold text-[#102e50]">Write to the team</h2>
              <p className="mt-1 text-sm text-muted-foreground">Fields below post through your default mail client. No new backend required.</p>
            </div>
            <form
              className="space-y-4 p-6"
              action={`mailto:${generalEmail}`}
              method="post"
              encType="text/plain"
            >
              <p className="text-xs text-muted-foreground">This opens your mail client. Some browsers will prompt before launching.</p>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#4a5568]">Topic</label>
                <input className="mt-1.5 h-11 w-full rounded-lg border border-[#d4cdc0] bg-white px-3 text-sm" name="subject" placeholder="E.g. demo, billing, or correction" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#4a5568]">Message</label>
                <textarea
                  className="mt-1.5 min-h-[160px] w-full rounded-lg border border-[#d4cdc0] bg-white px-3 py-2 text-sm"
                  name="body"
                  required
                  placeholder="Organization, what you are announcing, and ideal timing."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#102e50] py-3 text-sm font-semibold text-[#f5c45e] transition hover:bg-[#1a4a6e] sm:w-auto sm:px-6"
              >
                <Send className="h-4 w-4" aria-hidden />
                Open in email
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
