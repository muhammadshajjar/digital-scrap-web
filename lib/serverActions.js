"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  doc,
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  arrayUnion,
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

export const addNewFacilityAction = async (data) => {
  try {
    await addDoc(collection(db, "facilities"), data);
  } catch (e) {
    return { error: e.message };
  }

  revalidatePath("/dashboard/facilities");
  redirect("/dashboard/facilities");
};

export const deleteFacilityAction = async (id) => {
  try {
    await deleteDoc(doc(db, "facilities", id));
  } catch (e) {
    return { error: e.message };
  }

  revalidatePath("/dashboard/facilities");
  redirect("/dashboard/facilities");
};

export const editFacilityAction = async (updatedData) => {
  try {
    const docRef = doc(db, "facilities", updatedData.id);
    delete updatedData.id;
    await updateDoc(docRef, updatedData);
  } catch (e) {
    return { error: e.message };
  }
  revalidatePath("/dashboard/facilities");
  redirect("/dashboard/facilities");
};

export const addNewSubCategory = async (data, documentId) => {
  try {
    const docRef = doc(db, "categories", documentId);
    await updateDoc(docRef, {
      subcategories: arrayUnion(data),
    });
  } catch (e) {
    return { error: e.message };
  }

  revalidatePath("/scraprates");
  revalidatePath("/dashboard/categories");
};

export const addNewBlogPost = async (data) => {
  try {
    await addDoc(collection(db, "blogs"), data);
  } catch (e) {
    return { error: e.message };
  }
  revalidatePath("/dashboard/blogs");
  revalidatePath("/");
  redirect("/dashboard/blogs");
};

export const deleteBlogAction = async (id) => {
  try {
    await deleteDoc(doc(db, "blogs", id));
  } catch (e) {
    return { error: e.message };
  }
  revalidatePath("/dashboard/blogs");
  revalidatePath("/");
  redirect("/dashboard/blogs");
};

export const editBlogAction = async (updatedData) => {
  try {
    const docRef = doc(db, "blogs", updatedData.id);
    delete updatedData.id;
    await updateDoc(docRef, updatedData);
  } catch (e) {
    return { error: e.message };
  }
  revalidatePath("/dashboard/blogs");
  revalidatePath(`/blogs/${updatedData.id}`);
  redirect("/dashboard/blogs");
};
