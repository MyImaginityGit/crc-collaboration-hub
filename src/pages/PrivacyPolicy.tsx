import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Effective Date: January 1, 2025
          </p>
        </div>

        <Card className="shadow-medium">
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a donation, contact us, or sign up for our newsletter. This may include your name, 
                  email address, postal address, phone number, and payment information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Process donations and provide receipts</li>
                  <li>Send you updates about our programs and impact</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share information with 
                  trusted service providers who assist us in operating our website and conducting our 
                  activities, provided they agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  Our website may use cookies to enhance your experience. You can choose to accept or 
                  decline cookies through your browser settings. Most web browsers automatically accept 
                  cookies, but you can modify your browser setting to decline cookies if you prefer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Opt out of receiving marketing communications</li>
                  <li>Request deletion of your personal information</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. We are not responsible for the 
                  privacy practices or content of these external sites. We encourage you to review the 
                  privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for children under the age of 13. We do not knowingly 
                  collect personal information from children under 13. If we become aware that we have 
                  collected personal information from a child under 13, we will take steps to delete 
                  such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the effective date at the 
                  top of this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-secondary/30 p-4 rounded-lg mt-4">
                  <p className="text-muted-foreground">
                    <strong>CResCo</strong><br />
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

export default PrivacyPolicy;