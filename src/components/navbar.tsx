"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import Image from "next/image";
import {
  Menu,
  Home,
  Tv,
  Instagram,
  Github,
  HandCoins,
  Book,
  MoreVertical,
  ScrollText,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "~/components/mode-toggle";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { cn } from "~/lib/utils";

interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const MobileLink: React.FC<MobileLinkProps> = ({
    href,
    children,
    onOpenChange,
    className,
    ...props
  }) => {
    return (
      <Link
        href={href}
        onClick={() => {
          router.push(href.toString());
          onOpenChange?.(false);
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Navbar */}
      <header className="sticky top-5 z-40 mx-auto flex w-[90%] items-center justify-between rounded-2xl border border-secondary bg-card bg-opacity-15 p-2 shadow-inner md:w-[70%] lg:w-[75%] lg:max-w-screen-xl xl:hidden">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-y-1 px-4 py-2 text-lg font-bold"
          >
            <div className="relative size-6">
              <Image fill src="/logo.png" alt="gemini logo" />
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-evenly">
          <ModeToggle />

          <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
            <Link
              aria-label="View on GitHub"
              href="https://github.com/avalynndev/anonypost"
              target="_blank"
            >
              <Github className="size-5" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center py-0 font-bold"
              >
                <span className="sr-only">Toggle Menu</span>
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <MobileLink
                href="/"
                className="flex items-center"
                onOpenChange={setOpen}
              >
                <Home className="mr-2 h-4 w-4" />
                <span className="font-bold">Home</span>
              </MobileLink>

              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pr-6">
                <div className="flex flex-col space-y-3">
                  <MobileLink href="/projects" onOpenChange={setOpen}>
                    Projects
                  </MobileLink>
                  <MobileLink
                    href="https://www.instagram.com/projectconnectforum"
                    onOpenChange={setOpen}
                  >
                    Instagram
                  </MobileLink>
                  <MobileLink
                    href="https://ko-fi.com/s/17bd54cbf0"
                    onOpenChange={setOpen}
                  >
                    Passion Project Guide
                  </MobileLink>
                  <MobileLink
                    href="https://ko-fi.com/projectconnect"
                    onOpenChange={setOpen}
                  >
                    Passion Project Counseling
                  </MobileLink>

                  <MobileLink
                    href="https://palorahcapital.com/"
                    onOpenChange={setOpen}
                  >
                    Palorah Capital
                  </MobileLink>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <header className="sticky top-5 z-40 mx-auto hidden w-[90%] items-center justify-between rounded-2xl border border-secondary bg-card bg-opacity-15 p-2 shadow-inner md:w-[70%] lg:w-[75%] lg:max-w-screen-xl xl:flex">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-y-1 px-4 py-2 text-lg font-bold"
          >
            <div className="relative size-6">
              <Image fill src="/logo.png" alt="gemini logo" />
            </div>
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <Home className="h-4 w-4" />
                      <div className="px-2"> Home </div>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <ScrollText className="h-4 w-4" />
                      <div className="px-2"> Projects </div>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="https://www.instagram.com/projectconnectforum"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <Instagram className="h-4 w-4" />
                      <div className="px-2"> Instagram </div>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <MoreVertical className="h-4 w-4" />
                      <span>More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link
                        href="https://ko-fi.com/s/17bd54cbf0"
                        target="_blank"
                      >
                        <Book className="mr-2 h-4 w-4" />
                        Passion Project Guide
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="https://ko-fi.com/projectconnect"
                        target="_blank"
                      >
                        <Tv className="mr-2 h-4 w-4" />
                        Passion Project Counseling
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="https://palorahcapital.com/" target="_blank">
                        <HandCoins className="mr-2 h-4 w-4" />
                        Palorah Capital
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex">
          <ModeToggle />

          <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
            <Link
              href="https://github.com/avalynndev/anonypost"
              target="_blank"
            >
              <Github className="size-5" />
            </Link>
          </Button>
        </div>
      </header>
    </>
  );
};
