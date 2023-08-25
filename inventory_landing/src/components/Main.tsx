"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import MainImage from "../assets/images/main.png";
import CatalogImage from "../assets/images/catalog.png";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const Main: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center text-foreground p-24">
      <h1 className="font-semibold text-6xl text-center">
        Manage your <span className="font-black">store inventory</span> with{" "}
        <span className="font-black">Notion</span>
      </h1>
      <p className="text-lg text-center">
        An easy-to-use powerful dashboard to manage your stock inventory.
      </p>
      <Button size="lg">Get template</Button>
      <Image src={MainImage} alt="Main Image" />

      <div className="w-full text-left mt-4 grid space-y-4">
        <h1 className="text-5xl font-semibold text-left">
          Easy to use features
        </h1>
        <p className="text-xl w-2/3">
          This Notion template helps you track your current inventory in an easy
          way,{" "}
          <span className="font-bold">
            no need to pay monthly subscriptions
          </span>{" "}
          for apps.
        </p>
        <div className="flex-col w-full space-y-4">
          <Card className="w-4/5 mx-auto">
            <CardHeader className="flex-col px-6">
              <h4 className="text-xl font-bold ">Catalog</h4>
              <p className="text-md text-foreground-500">
                The catalog is the back bone of your inventory, register here
                important data of your products.
              </p>
            </CardHeader>
            <CardBody className="overflow-visible py-0">
              <Image
                alt="Card background"
                className="w-full object-cover rounded-xl"
                src={CatalogImage}
              />
            </CardBody>
          </Card>
          <Card className="w-4/5 mx-auto">
            <CardHeader className="flex-col px-6">
              <h4 className="text-xl font-bold text-center">Sales</h4>
              <p className="text-md text-foreground-500">
                Record your sales and make accountability of your daily, monthly
                or yearly sales.
              </p>
            </CardHeader>
            <CardBody className="overflow-visible py-0">
              <Image
                alt="Card background"
                className="w-full object-cover rounded-xl"
                src={CatalogImage}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Main;
