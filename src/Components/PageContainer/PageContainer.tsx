import { inter } from "@/app/Fonts/fonts";
import { StyledPageContainer } from "./PageContainer.styled";
import React from "react";

interface PageContainerProps {
    children: React.ReactNode;             
}

function    PageContainer({ children }: PageContainerProps) {
  return (
    <StyledPageContainer>{children}</StyledPageContainer>
  );
}

export default PageContainer;