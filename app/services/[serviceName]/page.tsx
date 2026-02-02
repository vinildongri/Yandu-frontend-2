"use client";

import React, { JSX } from "react";
import { notFound, useParams } from "next/navigation";
import WebAppDev from "@/components/services/WebAppDev";
import VideoEditing from "@/components/services/VideoEditing";
import ApiBackendSystem from "@/components/services/ApiBackendSystem";
import LogoDesign from "@/components/services/LogoDesign";
import SocialMedia from "@/components/services/SocialMedia";
import DatabaseManagement from "@/components/services/DatabaseManagement";
import UiUxDesign from "@/components/services/UiUxDesign"
import GraphicDesign from "@/components/services/GraphicDesign";
import OptimizationSecurity from "@/components/services/OptimizationSecurity";
const Page = () => {
  const params = useParams();
  const serviceName = params.serviceName as string;

  const Services : Record<string, JSX.Element> = {
    "web-app-dev": <WebAppDev />,
    "video-editing": <VideoEditing />,
    "api-backend-dev": <ApiBackendSystem />,
    "logo-design": <LogoDesign />,
    "social-media": <SocialMedia />,
    "database": <DatabaseManagement />,
    "ui-ux-design": <UiUxDesign />,
    "graphic-design": <GraphicDesign />,
    "optimization-security": <OptimizationSecurity />
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
