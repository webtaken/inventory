"use client";

import React from "react";
import {
  Button,
  CardFooter,
  Checkbox,
  CheckboxGroup,
  Link,
} from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Features from "./Features";
import MainImage from "../assets/images/main.png";

const Main: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center text-foreground px-24 py-10">
      <h1 className="font-semibold text-6xl text-center">
        Manage your <span className="font-black">store inventory</span> with{" "}
        <span className="font-black">Notion</span>
      </h1>
      <p className="text-lg text-center">
        An easy-to-use powerful dashboard to manage your stock inventory.
      </p>
      <Button
        as={Link}
        href="https://luckly083.gumroad.com/l/inventory"
        isExternal
        size="lg"
        className="bg-foreground-900 text-foreground-50"
      >
        Get template
      </Button>
      <Image src={MainImage} alt="Main Image" />
      <Features />
      <div id="pricing" className="my-8 space-y-5">
        <h1 className="font-bold text-3xl text-center">Pay once use forever</h1>
        <p className="text-lg text-center">
          Unlock lifetime access with one-time payment & receive updates when
          new releases are launch.
        </p>
        <Card className="mx-auto w-72 my-2">
          <CardHeader className="flex-col gap-2">
            <p className="text-lg text-center font-bold">Inventory dashboard</p>
            <p className="text-5xl font-bold">$20</p>
          </CardHeader>
          <CardBody>
            <CheckboxGroup
              label="Features"
              defaultValue={[
                "tutorial",
                "examples",
                "support",
                "inventories",
                "updates",
              ]}
            >
              <Checkbox isReadOnly value="tutorial">
                Tutorial (full guidance)
              </Checkbox>
              <Checkbox isReadOnly value="examples">
                Examples for guidance
              </Checkbox>
              <Checkbox isReadOnly value="support">
                Lifetime support
              </Checkbox>
              <Checkbox isReadOnly value="inventories">
                Any number of inventories
              </Checkbox>
              <Checkbox isReadOnly value="updates">
                Updates
              </Checkbox>
            </CheckboxGroup>
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              target="_blank"
              href="https://luckly083.gumroad.com/l/inventory"
              className="mx-auto w-2/3 bg-foreground-900 text-foreground-50"
              endContent={<AiOutlineArrowRight />}
            >
              Buy now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Main;
