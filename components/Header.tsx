"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "./ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const currentPath = pathname;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-muted-foreground transition-colors"
        >
          Adrian K
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-sm transition-colors ${
              isActive("/")
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>
          {/* Articles removed - this site showcases projects only */}
          <Link
            href="/projects"
            className={`text-sm transition-colors ${
              isActive("/projects")
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-colors ${
              isActive("/about")
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <div className="p-4 border-b">
                <SheetTitle asChild>
                  <Link href="/" className="text-lg font-semibold">
                    Adrian K
                  </Link>
                </SheetTitle>
              </div>
              <nav className="p-2">
                <ul className="flex flex-col">
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className={`block px-4 py-3 ${
                          isActive("/")
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Home
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/projects"
                        className={`block px-4 py-3 ${
                          isActive("/projects")
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Projects
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/about"
                        className={`block px-4 py-3 ${
                          isActive("/about")
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        About
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
