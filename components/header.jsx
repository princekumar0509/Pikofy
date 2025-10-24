"use client";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, Menu, X } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const { isLoading } = useStoreUser();
  const path = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full border-b-2 bg-background/80 backdrop-blur-xl z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-10">
          <Image
            src={"/logos/logo.png"}
            alt="Equinex Logo"
            width={280}
            height={100}
            className="h-16 w-auto object-contain transition-transform hover:scale-105"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Navigation Links */}
        {path === "/" && (
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-semibold hover:text-primary transition-colors relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-semibold hover:text-primary transition-colors relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </div>
        )}

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Authenticated>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 font-semibold hover:bg-primary hover:text-primary-foreground transition-all border-2 hard-shadow"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border-2 border-border hover:border-primary transition-colors",
                  userButtonPopoverCard: "shadow-2xl border-2",
                  userPreviewMainIdentifier: "font-bold",
                },
              }}
              afterSignOutUrl="/"
            />
          </Authenticated>
          <Unauthenticated>
            <SignInButton>
              <Button 
                variant="ghost" 
                className="font-semibold hover:bg-accent transition-colors"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="gradient font-bold text-white border-2 border-foreground hard-shadow hover:shadow-lg">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b-2 shadow-xl animate-slide-in-up">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {/* Mobile Navigation Links */}
            {path === "/" && (
              <>
                <Link
                  href="#features"
                  className="text-base font-semibold hover:text-primary transition-colors py-2 px-4 hover:bg-accent rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-base font-semibold hover:text-primary transition-colors py-2 px-4 hover:bg-accent rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <div className="border-t my-2" />
              </>
            )}

            {/* Mobile Auth Buttons */}
            <Authenticated>
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full justify-center items-center gap-2 font-semibold border-2 hard-shadow"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <span className="text-sm font-medium text-muted-foreground">
                  Account
                </span>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 border-2 border-border",
                      userButtonPopoverCard: "shadow-2xl border-2",
                      userPreviewMainIdentifier: "font-bold",
                    },
                  }}
                  afterSignOutUrl="/"
                />
              </div>
            </Authenticated>
            <Unauthenticated>
              <SignInButton>
                <Button 
                  variant="outline" 
                  className="w-full font-semibold border-2"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="w-full gradient font-bold text-white border-2 border-foreground hard-shadow">
                  Get Started
                </Button>
              </SignUpButton>
            </Unauthenticated>
          </div>
        </div>
      )}

      {/* Loading Bar */}
      {isLoading && (
        <div className="absolute bottom-0 left-0 right-0">
          <BarLoader width={"100%"} color="hsl(var(--primary))" height={3} />
        </div>
      )}
    </header>
  );
}
