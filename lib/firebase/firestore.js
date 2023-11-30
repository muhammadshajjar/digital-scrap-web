import {
  doc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

import { db } from "./config";
import { revalidatePath } from "next/cache";
import { unstable_noStore as noStore } from "next/cache";

export const addNewListing = async (data) => {
  await addDoc(collection(db, "listings"), data);
};

export const getAllListings = async () => {
  console.log("LISTIGN FETCHING....");

  try {
    const querySnapshot = await getDocs(collection(db, "listings"));
    const listingData = [];
    querySnapshot.forEach((doc) => {
      listingData.push({ ...doc.data(), id: doc.id });
    });
    return listingData;
  } catch (e) {
    console.error(e.message);
    console.log("in the error message");
    throw new Error(e.message);
  }
};

export const deleteListing = async (id) => {
  await deleteDoc(doc(db, "listings", id));
};
//test function to delay events.

export const test = async () => {
  console.log("DATA IS FETCHING.....");

  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("DATA FEThed.....");
  // throw new Error("Something went wrong");
};
