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
      <SheetContent side="right" className="w-[min(100vw-2rem,22rem)] border-l border-[#D4EAFA] bg-white px-6 backdrop-blur-xl">
        <SheetHeader className="border-b border-border pb-6 text-left">
          <SheetTitle className="font-heading text-xl font-medium text-foreground">
            {SITE_NAME}
          </SheetTitle>
          <p className="mt-2 text-[11px] font-light uppercase tracking-[0.2em] text-[#6B8599]">
            {SITE_TAGLINE}
          </p>
        </SheetHeader>
        <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[#D4EAFA]/80 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[#2A3A4A] transition-colors hover:text-[#4B9CC0]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SECTION.contact}
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants(),
              "mt-8 rounded-full border border-[#7BC4E2]/70 bg-white py-3 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-[#1E5F8A] hover:bg-[#EBF6FC]"
            )}
          >
            Book a Session
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
