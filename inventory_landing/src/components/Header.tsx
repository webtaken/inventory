"use client";
import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as NextUILink,
} from "@nextui-org/react";
import Logo from "../assets/icons/package_icon.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Pricing", "Get Template"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image priority src={Logo} alt="Logo" />
          <p className="font-bold text-lg">inventory</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <NextUILink color="foreground" href="#pricing">
            Pricing
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={NextUILink}
            isExternal
            showAnchorIcon
            color="default"
            href="https://google.com"
          >
            Get Template
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextUILink
              color="foreground"
              className="w-full"
              href={item === "Pricing" ? "#pricing" : "https://google.com"}
              target={item === "Pricing" ? "_self" : "_blank"}
              size="md"
            >
              {item}
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
