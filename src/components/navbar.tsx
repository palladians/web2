"use client";

import { useState } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { AlignRightIcon, XIcon } from "lucide-react";

const Buttons = ({
  mobile,
  callback,
}: {
  mobile?: boolean;
  callback?: () => void;
}) => {
  return (
    <>
      <Button
        variant={mobile ? "ghost" : "secondary"}
        onClick={callback}
        asChild
      >
        <a href="/#about">About</a>
      </Button>
      <Button
        variant={mobile ? "ghost" : "secondary"}
        onClick={callback}
        asChild
      >
        <a href="/#products">Products</a>
      </Button>
      <Button
        variant={mobile ? "ghost" : "secondary"}
        onClick={callback}
        asChild
      >
        <NextLink href="/blog">Blog</NextLink>
      </Button>
      <Button onClick={callback} asChild>
        <NextLink href="mailto:team@palladians.xyz">Contact</NextLink>
      </Button>
    </>
  );
};

export const Navbar = () => {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  return (
    <nav className="bg-background sticky left-0 right-0 top-0 z-10 py-4">
      <div className="container flex items-center justify-between">
        <NextLink href="/" onClick={() => setMobileExpanded(false)}>
          <NextImage
            src="/logo.svg"
            width={200}
            height={64}
            alt="logo"
            className="w-[10rem] lg:w-[12rem]"
          />
        </NextLink>
        <div className="hidden items-center gap-4 lg:flex">
          <Buttons />
        </div>
        <div className="flex lg:hidden">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setMobileExpanded(!mobileExpanded)}
          >
            {mobileExpanded ? <XIcon /> : <AlignRightIcon />}
          </Button>
        </div>
      </div>
      {mobileExpanded && (
        <div className="flex flex-col items-center gap-4 p-4">
          <Buttons callback={() => setMobileExpanded(false)} mobile />
        </div>
      )}
    </nav>
  );
};
