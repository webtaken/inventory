"use client";

import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "@nextui-org/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground-100 p-20">
      <div className="grid grid-cols-2 place-items-center">
        <div className="col-span-1">
          <p className="text-foreground-600">
            © Saul Rojas 2023. All Rights reserved. Privacy policy.
          </p>
        </div>
        <div className="col-span-1 text-center">
          <p className="font-bold text-foreground-900 my-2">Connect</p>
          <ul>
            <li>
              <Link
                href="https://github.com/webtaken"
                color="foreground"
                className="flex items-center gap-1"
              >
                <AiFillGithub /> Github
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/node_srojas1"
                color="foreground"
                className="flex items-center gap-1"
              >
                <AiFillTwitterCircle /> Twitter (X)
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/saul-rojas-6885b1188/"
                color="foreground"
                className="flex items-center gap-1"
              >
                <AiFillLinkedin /> LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
