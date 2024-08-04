"use client";
import { navLinks } from "@/constants";
import { styles } from "@/lib/utils";
import { logo, menu, close } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Saadeh
            {/* &nbsp;
            <span className="sm:block hidden"> | FullStack Developer</span> */}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === `#${link.id}` ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link
                href={`#${link.id}`}
                onClick={() => setActive(`#${link.id}`)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Sheet>
            <SheetTrigger>
              <Image src={menu} alt="menu" />
            </SheetTrigger>
            <SheetContent className="black-gradient">
              <SheetHeader>
                <SheetDescription>
                  <ul className="list-none flex flex-col gap-10">
                    {navLinks.map((link) => (
                      <li
                        key={link.id}
                        className={`${
                          active === `#${link.id}`
                            ? "text-white"
                            : "text-secondary"
                        } hover:text-white text-[18px] font-medium cursor-pointer`}
                      >
                        <Link
                          href={`#${link.id}`}
                          onClick={() => setActive(`#${link.id}`)}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
