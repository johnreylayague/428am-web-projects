"use client";

import React from "react";

interface NotFoundPageProps {}

const ErrorPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div>
      <h1>Something went wrong.</h1>
      <p>Please try again later.</p>
    </div>
  );
};

export default ErrorPage;
