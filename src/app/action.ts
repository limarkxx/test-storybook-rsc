"use server"
import "server-only";
import { setTimeout } from "timers/promises";

export async function homeAction(){
  await setTimeout(5000);
}