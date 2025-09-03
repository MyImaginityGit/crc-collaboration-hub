import { Card, CardContent } from "@/components/ui/card";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Terms of Use</h1>
          <p className="text-lg text-muted-foreground">
            Effective Date: January 1, 2025
          </p>
        </div>

        <Card className="shadow-medium">
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using the Center for Research & Collaboration (CRC) website, 
                  you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily download one copy of the materials on CRC's 
                  website for personal, non-commercial transitory viewing only. This is the grant 
                  of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The materials on CRC's website are provided on an 'as is' basis. CRC makes no 
                  warranties, expressed or implied, and hereby disclaims and negates all other 
                  warranties including without limitation, implied warranties or conditions of 
                  merchantability, fitness for a particular purpose, or non-infringement of 
                  intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall CRC or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business 
                  interruption) arising out of the use or inability to use the materials on 
                  CRC's website, even if CRC or an authorized representative has been notified 
                  orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Donations and Financial Contributions</h2>
                <p className="text-muted-foreground mb-4">
                  Donations made through our website are processed by third-party payment processors. 
                  By making a donation, you agree that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>All donations are voluntary and non-refundable unless required by law</li>
                  <li>You have the legal capacity to make the donation</li>
                  <li>The funds being donated are legally obtained</li>
                  <li>You understand that donations may be tax-deductible subject to applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. User Conduct</h2>
                <p className="text-muted-foreground mb-4">
                  When using our website, you agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Impersonate any person or entity</li>
                  <li>Transmit any harmful or malicious code</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Harvest or collect information about other users</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  The content on this website, including but not limited to text, graphics, logos, 
                  images, and software, is the property of CRC or its content suppliers and is 
                  protected by copyright and other intellectual property laws. You may not reproduce, 
                  distribute, or create derivative works from this content without express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Privacy Policy</h2>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy, which also 
                  governs your use of the website, to understand our practices regarding your 
                  personal information and how we will treat it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your access to our website at any 
                  time, without prior notice, for conduct that we believe violates these Terms of 
                  Use or is harmful to other users, us, or third parties, or for any other reason.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with the 
                  laws of Pennsylvania, United States, and you irrevocably submit to the exclusive 
                  jurisdiction of the courts in that state or location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  CRC reserves the right to revise these terms of service at any time without notice. 
                  By using this website, you are agreeing to be bound by the then current version 
                  of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Use, please contact us at:
                </p>
                <div className="bg-secondary/30 p-4 rounded-lg mt-4">
                  <p className="text-muted-foreground">
                    <strong>Center for Research & Collaboration (CRC)</strong><br />
                    Email: info@donatecfrc.org<br />
                    Location: Blue Bell, PA, USA
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfUse;