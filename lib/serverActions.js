"use server";

import {
  addNewListing,
  deleteListing,
  editListing,
} from "./firebase/firestore";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addNewListingAction = async (data) => {
  await addNewListing(data);
  revalidatePath("/dashboard/listings");
  redirect("/dashboard/listings");
};

export const deleteListingAction = async (id) => {
  await deleteListing(id);
  revalidatePath("/dashboard/listings");
  redirect("/dashboard/listings");
};

export const editListingAction = async (data) => {
  await editListing(data);
  revalidatePath("/dashboard/listings");
  redirect("/dashboard/listings");
};
