import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "./config";

export const addNewListing = async (data) => {
  console.log(data);
  const docRef = await addDoc(collection(db, "listings"), {
    name: "final",
  });
  // console.log(docRef);
  // throw new Error("Something went Wrong...");
};

//test function to delay events.

export const test = async () => {
  await new Promise((resolve) => setTimeout(resolve(), 200));
  throw new Error("Something went wrong");
};
