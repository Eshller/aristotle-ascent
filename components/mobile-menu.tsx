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
      <SheetContent side="right" className="w-80 border-border bg-background">
        <SheetHeader>
          <SheetTitle className="text-left font-heading text-lg text-foreground">
            {SITE_NAME}
          </SheetTitle>
          <p className="text-left text-xs text-muted-foreground">{SITE_TAGLINE}</p>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SECTION.contact}
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants(),
              "mt-4 rounded-full bg-navy-950 font-semibold text-white hover:bg-navy-900"
            )}
          >
            Intro call
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
