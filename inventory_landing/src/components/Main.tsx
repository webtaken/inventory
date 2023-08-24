"use client";

import React from "react";
import { Button } from "@nextui-org/react";

const Main: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-semibold text-6xl">
        Manage your <span className="font-black">store inventory</span> with
        Notion
      </h1>
      <Button>Get template</Button>
    </main>
  );
};

export default Main;
