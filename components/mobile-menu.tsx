"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SECTION, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { Menu } from "lucide-react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground lg:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100vw-2rem,22rem)] border-l border-border bg-background px-6">
        <SheetHeader className="border-b border-border pb-6 text-left">
          <SheetTitle className="font-heading text-xl font-medium text-foreground">
            {SITE_NAME}
          </SheetTitle>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {SITE_TAGLINE}
          </p>
        </SheetHeader>
        <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SECTION.contact}
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants(),
              "mt-8 rounded-sm border border-gold-600/30 bg-gold-500 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground hover:bg-gold-600"
            )}
          >
            Intro call
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
