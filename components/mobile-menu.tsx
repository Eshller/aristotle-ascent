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
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
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
            className="text-foreground md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-72 border-navy-800 bg-navy-950">
        <SheetHeader>
          <SheetTitle className="text-left text-foreground">{SITE_NAME}</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-navy-800 hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants(),
              "mt-4 bg-gold-500 font-semibold text-navy-950 hover:bg-gold-400"
            )}
          >
            Book a Session
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
