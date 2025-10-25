import { Linkedin, Github } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adrian-kok",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/adriantzkok" },
  ];

  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Adrian K</h3>
            <p className="text-muted-foreground max-w-md">
              AI & Data Consultant diving deeper into the world of analytics,
              machine learning, and cross cultural solutions.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Adrian K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
