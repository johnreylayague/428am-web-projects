import express, { Application } from "express";

export const applyBodyParsers = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
