"use client";

import React from "react";
import { useParams } from "next/navigation";
const Page = () => {
  const params = useParams();
  const serviceName = params.serviceName as string;

  return (
    <div className="py-22">
      <h1 className="text-3xl font-bold capitalize">
        {serviceName}
      </h1>
    </div>
  );
};

export default Page;
