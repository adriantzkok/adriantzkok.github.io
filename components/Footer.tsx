import { Linkedin, Github } from "lucide-react";
import { PageContainer } from "./PageContainer";

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
    <footer className="border-t border-border/70 py-12">
      <PageContainer>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Adrian K
            </h3>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              AI & Data Consultant exploring analytics, machine learning, and
              cross-cultural solutions with a calm, practical perspective.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/80 text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© 2025 Adrian K. All rights reserved.</p>
        </div>
      </PageContainer>
    </footer>
  );
}
