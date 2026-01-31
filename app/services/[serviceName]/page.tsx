"use client";

import React, { JSX } from "react";
import { notFound, useParams } from "next/navigation";
import WebAppDev from "@/components/services/WebAppDev";
import VideoEditing from "@/components/services/VideoEditing";
import ApiBackendSystem from "@/components/services/ApiBackendSystem";
import LogoDesign from "@/components/services/LogoDesign";
import SocialMedia from "@/components/services/SocialMedia";

const Page = () => {
  const params = useParams();
  const serviceName = params.serviceName as string;

  const Services : Record<string, JSX.Element> = {
    "web-app-dev": <WebAppDev />,
    "video-editing": <VideoEditing />,
    "api-backend-dev": <ApiBackendSystem />,
    "logo-design": <LogoDesign />,
    "social-media": <SocialMedia />
  }

  const ServiceComponent  = Services[serviceName];

  if(!ServiceComponent ){
    notFound();
  }

  return (
    <div className="py-20">
      {ServiceComponent }
    </div>
  );
};

export default Page;
