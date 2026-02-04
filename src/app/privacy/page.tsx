import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | True North Roofing & Construction",
  description: "Privacy Policy for True North Roofing & Construction. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-slate-400">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl prose prose-invert prose-slate prose-lg">
            <h2>Information We Collect</h2>
            <p>
              True North Roofing & Construction, LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects information 
              you provide directly to us when you:
            </p>
            <ul>
              <li>Request a free inspection or estimate</li>
              <li>Contact us through our website or phone</li>
              <li>Subscribe to our newsletter</li>
              <li>Engage our services for roofing work</li>
            </ul>

            <h2>Types of Information</h2>
            <p>The personal information we collect may include:</p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Property address and service location</li>
              <li>Photos of your roof or property</li>
              <li>Insurance information (when applicable)</li>
              <li>Payment information for services rendered</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our roofing services</li>
              <li>Schedule and conduct inspections</li>
              <li>Communicate with you about your project</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Process insurance claims on your behalf</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except as described in this policy. We may share information with:
            </p>
            <ul>
              <li>Insurance companies (with your consent, for claims processing)</li>
              <li>Subcontractors who assist in providing our services</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no 
              method of transmission over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can set your 
              browser to refuse cookies, but some features of our site may not function properly.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any 
              changes by posting the new policy on this page with an updated revision date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: Office@truenorth-tx.co</li>
              <li>Phone: (817) 204-4432</li>
              <li>Serving the Greater Texas Area</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
