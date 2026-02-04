import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | True North Roofing & Construction",
  description: "Terms of Service for True North Roofing & Construction. Read our terms and conditions for roofing services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Terms of Service</h1>
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
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the services of True North Roofing & Construction, LLC 
              (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not use our services.
            </p>

            <h2>Services</h2>
            <p>
              True North Roofing & Construction provides professional roofing services including 
              but not limited to:
            </p>
            <ul>
              <li>Residential and commercial roofing installation</li>
              <li>Roof repair and maintenance</li>
              <li>Storm damage restoration</li>
              <li>Emergency tarping services</li>
              <li>Roof inspections and assessments</li>
              <li>Insurance claim assistance</li>
            </ul>

            <h2>Free Inspections</h2>
            <p>
              We offer complimentary roof inspections to assess the condition of your roof. 
              These inspections are provided at no cost and with no obligation. The inspection 
              report remains our property until services are contracted.
            </p>

            <h2>Estimates and Pricing</h2>
            <p>
              All estimates provided are valid for 30 days from the date of issuance. Prices 
              may vary based on:
            </p>
            <ul>
              <li>Material costs and availability</li>
              <li>Scope of work discovered during the project</li>
              <li>Permit requirements and fees</li>
              <li>Weather-related delays</li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
              Payment terms are specified in individual contracts. Generally:
            </p>
            <ul>
              <li>A deposit may be required before materials are ordered</li>
              <li>Progress payments may be required for larger projects</li>
              <li>Final payment is due upon project completion</li>
              <li>We accept major credit cards, checks, and financing options</li>
            </ul>

            <h2>Warranties</h2>
            <p>
              All workmanship is backed by our craftsmanship warranty. Manufacturer warranties 
              apply to materials as specified by each manufacturer. Extended warranty options 
              may be available.
            </p>

            <h2>Insurance Claims</h2>
            <p>
              We assist with insurance claims as a courtesy service. We are not insurance adjusters 
              and cannot guarantee claim approval or amounts. The property owner is ultimately 
              responsible for payment regardless of insurance coverage.
            </p>

            <h2>Scheduling and Access</h2>
            <p>
              Property owners must provide reasonable access to the property for inspections and 
              work. Weather conditions may affect scheduling. We will communicate any delays 
              promptly.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              True North Roofing & Construction shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages resulting from your use of our services 
              or any related matter.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our services shall be resolved through 
              good-faith negotiation. If negotiation fails, disputes shall be resolved through 
              binding arbitration in accordance with Texas law.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of 
              the State of Texas, without regard to its conflict of law provisions.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to our website. Your continued use of our services 
              constitutes acceptance of the modified terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, contact us at:
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
