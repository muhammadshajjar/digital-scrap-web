"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  doc,
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase/config";

export const addNewListingAction = async (data) => {
  try {
    await addDoc(collection(db, "listings"), data);
  } catch (e) {
    return { error: e.message };
  }

  revalidatePath("/dashboard/listings");
  redirect("/dashboard/listings");
};

export const deleteListingAction = async (id) => {
  try {
    await deleteDoc(doc(db, "listings", id));
  } catch (e) {
    return { error: e.message };
  }

  revalidatePath("/dashboard/listings");
  redirect("/dashboard/listings");
};

export const editListingAction = async (updatedData) => {
  try {
    const docRef = doc(db, "listings", updatedData.id);
    delete updatedData.id;
    await updateDoc(docRef, updatedData);
  } catch (e) {
    return { error: e.message };
  }
  revalidatePath("/dashboard/listings");
  redirect("/dashboard/listings");
};
