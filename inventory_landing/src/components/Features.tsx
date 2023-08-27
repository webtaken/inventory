"use client";

import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import CatalogImage from "../assets/images/catalog.png";
import CalendarSales from "../assets/images/calendar_sales.png";
import AccountabilitySales from "../assets/images/accountability.png";
import Dashboard from "../assets/images/dashboard.png";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Gallery from "../assets/images/gallery.png";

const Features: React.FC = () => {
  return (
    <div className="w-full text-left mt-4 space-y-8">
      <h1 className="text-5xl font-semibold text-left">Easy to use features</h1>
      <p className="text-xl w-2/3">
        This Notion template helps you track your current inventory in an easy
        way,{" "}
        <span className="font-bold">no need to pay monthly subscriptions</span>{" "}
        for related apps.
      </p>
      <div className="flex-col w-full space-y-4">
        <Card className="w-4/5 mx-auto">
          <CardHeader className="flex-col px-6">
            <h4 className="text-xl font-bold ">Dashboard</h4>
            <p className="text-md text-foreground-500">
              Manage all your inventories from one dashboard: Tutorials,
              Examples, Support & New Inventory Action
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-0">
            <Image
              alt="dashboard"
              className="w-full object-cover rounded-xl"
              src={Dashboard}
            />
          </CardBody>
        </Card>
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
              Record your sales and make accountability easy for your daily,
              monthly or yearly sales.
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-0">
            <Tabs aria-label="sales options">
              <Tab key="calendar" title="Calendar">
                <Image
                  src={CalendarSales}
                  className="w-full object-cover rounded-xl"
                  alt="calendar sales"
                />
              </Tab>
              <Tab key="accountability" title="Accountability">
                <Image
                  src={AccountabilitySales}
                  className="w-full object-cover rounded-xl"
                  alt="accountability sales"
                />
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
        <Card className="w-4/5 mx-auto">
          <CardHeader className="flex-col px-6">
            <h4 className="text-xl font-bold ">Gallery</h4>
            <p className="text-md text-foreground-500">
              The gallery stores additional information for your products,
              descriptions, images, videos, etc.
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-0">
            <Image
              alt="Card background"
              className="w-full object-cover rounded-xl"
              src={Gallery}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Features;
