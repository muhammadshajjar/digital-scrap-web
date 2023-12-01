import {
  doc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "./config";

export const addNewListing = async (data) => {
  await addDoc(collection(db, "listings"), data);
};

export const getAllListings = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "listings"));
    const listingData = [];
    querySnapshot.forEach((doc) => {
      listingData.push({ ...doc.data(), id: doc.id });
    });
    return listingData;
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }
};

export const deleteListing = async (id) => {
  try {
    await deleteDoc(doc(db, "listings", id));
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }
};

export const editListing = async (updatedData) => {
  try {
    const docRef = doc(db, "listings", updatedData.id);
    delete updatedData.id;
    await updateDoc(docRef, updatedData);
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }
};

export const getSpecificListing = async (id) => {
  try {
    const docRef = doc(db, "listings", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }
};

//test function to delay events.
export const test = async () => {
  console.log("DATA IS FETCHING.....");

  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("DATA FEThed.....");
  // throw new Error("Something went wrong");
};
