export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Payment Risk Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Stripe Suspensions
          <br />
          <span className="text-[#58a6ff]">Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Real-time monitoring of your chargeback rates, dispute ratios, and transaction patterns.
          Get alerted the moment your account approaches Stripe&apos;s risk thresholds — not after the ban.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Monitoring — $99/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ["< 1%", "Chargeback Threshold"],
            ["Real-time", "Webhook Alerts"],
            ["24/7", "Risk Monitoring"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$99</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Per Stripe account. Cancel anytime.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Chargeback & dispute rate tracking",
              "Real-time webhook event monitoring",
              "Email + Slack alerts at risk thresholds",
              "ML-powered suspension risk score",
              "Transaction pattern anomaly detection",
              "Monthly risk health reports",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">&#10003;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-center text-xs text-[#8b949e] mt-4">14-day money-back guarantee</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Stripe account?",
              a: "You provide a restricted Stripe API key with read-only access. We never store card data or initiate charges. Setup takes under 2 minutes.",
            },
            {
              q: "What metrics does it monitor?",
              a: "Chargeback rates, dispute ratios, refund rates, transaction velocity, high-risk card patterns, and geographic anomalies — all compared against Stripe's published risk thresholds.",
            },
            {
              q: "How early will I get warned?",
              a: "Alerts fire when you reach 50%, 75%, and 90% of Stripe's risk limits, giving you days or weeks to act before any account action is taken.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Stripe Business Risk Scanner. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  );
}
