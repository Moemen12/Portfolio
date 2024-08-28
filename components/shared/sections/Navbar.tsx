"use client";
import { navLinks } from "@/constants";
import { styles } from "@/lib/utils";
import {
  logo,
  menu,
  close,
  share,
  linkdln,
  watsapp,
  telegram,
} from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
      <div className="w-full flex special-screen:justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center gap-2 flex-1"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <span className="text-white text-[18px] font-bold cursor-pointer flex">
            Saadeh
          </span>
        </Link>
        <ul className="list-none hidden special-screen:flex flex-row gap-10">
          {navLinks.map((link) => (
            <RoughNotation
              key={link.id}
              type="box"
              show={link.title === "Packages" ? true : false}
              color="yellow"
              strokeWidth={1}
              animationDuration={800}
            >
              <li
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
            </RoughNotation>
          ))}
        </ul>

        <Popover>
          <PopoverTrigger className="mr-5 special-screen:mr-0 special-screen:ml-5">
            <Image src={share} alt="share" loading="lazy" />
          </PopoverTrigger>
          <PopoverContent
            asChild
            className="p-0 w-60 h-52 bg-[#1F2937] border-none rounded-xl"
          >
            <div className="flex flex-col">
              <p className="bg-[#374151] text-sm rounded-t-xl grid place-items-center py-3 font-semibold text-white">
                Share!
              </p>
              <div className="p-8 flex items-center gap-1 flex-wrap">
                <Link
                  className="border-white hover:border rounded-xl border-solid"
                  target="_blank"
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://saadeh-portfolio.onrender.com/`}
                >
                  <Image
                    loading="lazy"
                    src={linkdln}
                    alt="linkdln share"
                    className="w-12 h-12 cursor-pointer"
                  />
                </Link>

                <Link
                  className="border-white hover:border rounded-xl border-solid"
                  href={`https://api.whatsapp.com/send?text=https://saadeh-portfolio.onrender.com/`}
                  target="_blank"
                >
                  <Image
                    loading="lazy"
                    src={watsapp}
                    alt="whatsapp share"
                    className="w-12 h-12 cursor-pointer"
                  />
                </Link>
                <Link
                  className="border-white hover:border rounded-xl border-solid"
                  href={`https://telegram.me/share/url?url=https://saadeh-portfolio.onrender.com/`}
                  target="_blank"
                >
                  <Image
                    loading="lazy"
                    src={telegram}
                    alt="telegram share"
                    className="w-12 h-12 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <div className="flex special-screen:hidden items-center">
          <Sheet>
            <SheetTrigger>
              <Image src={menu} alt="menu" loading="lazy" />
            </SheetTrigger>
            <SheetContent className="bg-[#050816] flex items-center justify-center">
              <SheetTitle className="hidden">SideBar Menu</SheetTitle>
              <SheetHeader>
                <SheetDescription asChild>
                  <ul className="list-none flex flex-col gap-10">
                    {navLinks.map((link) => (
                      <RoughNotation
                        key={link.id}
                        type="box"
                        show={link.title === "Packages" ? true : false}
                        color="yellow"
                        strokeWidth={1}
                        animationDuration={800}
                      >
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
                      </RoughNotation>
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
