"use client";
import { revalidatePath } from "next/cache";

const Test = () => {
  const buttonClickHandler = () => {
    console.log("Some thing is runin");
    revalidatePath("/dashboard/facilities");
  };
  return <button onClick={buttonClickHandler}>Test</button>;
};

export default Test;
