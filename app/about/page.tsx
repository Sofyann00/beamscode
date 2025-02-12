import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - PT SINAR TEKNOLOGI SOLUSI',
  description: 'Learn about Beamscode, your trusted authorized Nike retailer in Indonesia',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            About Beamscode
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Your Trusted Nike Retailer in Indonesia
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Founded with a passion for authentic sneakers, Beamscode has grown to become one of Indonesia's most trusted authorized Nike retailers. Our journey began with a simple mission: to provide sneaker enthusiasts with guaranteed authentic products at competitive prices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Why Choose Us
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>100% Authentic Nike Products</li>
                <li>Competitive Pricing</li>
                <li>Fast Nationwide Shipping</li>
                <li>Excellent Customer Service</li>
                <li>Secure Payment Options</li>
                <li>Easy Returns Policy</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Commitment
              </h2>
              <p className="text-muted-foreground">
                At Beamscode, we are committed to providing our customers with the best shopping experience. Every product in our inventory is sourced directly from Nike, ensuring authenticity and quality. We take pride in our customer service and strive to make every interaction meaningful and satisfactory.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Store Location
              </h2>
              <div className="text-muted-foreground">
                <p>Visit our flagship store:</p>
                <div className="mt-2">
                  <p>PT SINAR TEKNOLOGI SOLUSI</p>
                  <p>Komplek Perkantoran Duta Merlin Blok F13</p>
                  <p>Jalan Gajah Mada, Petojo Utara</p>
                  <p>Gambir, Jakarta Pusat</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Kode Pos: 10130</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Business Hours
              </h2>
              <div className="text-muted-foreground grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Weekdays:</p>
                  <p>Monday - Friday</p>
                  <p>10:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Weekends:</p>
                  <p>Saturday - Sunday</p>
                  <p>11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>Get in touch with us:</p>
                <div className="mt-2 space-y-1">
                  <p>Customer Service: 1-800-123-4567</p>
                  <p>Email: support@Beamscode.com</p>
                  <p>Store Phone: (021) 50111528</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 