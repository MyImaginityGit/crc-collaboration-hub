import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl">Center for Research & Collaboration</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering individuals and organizations through workforce development, 
              cross-sector collaboration, and connecting research to real-world impact.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:info@donatecfrc.org" 
                  className="hover:text-accent transition-fast"
                >
                  info@donatecfrc.org
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Blue Bell, PA, USA</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link 
                to="/privacy-policy" 
                target="_blank"
                className="block hover:text-primary transition-fast"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-use" 
                target="_blank"
                className="block hover:text-primary transition-fast"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-primary-foreground/80">© 2025 Center for Research & Collaboration</p>
          <p className="text-primary-foreground/80 mt-2 md:mt-0">
            Website Developed by:{" "}
            <a 
              href="https://www.myimaginity.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-fast"
            >
              MyImaginity
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;