import {
  doc,
  collection,
  getDocs,
  getDoc,
} from "firebase/firestore";

import { db } from "./config";

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

export const getAllFacilities = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "facilities"));
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
export const getSpecificFacility = async (id) => {
  try {
    const docRef = doc(db, "facilities", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }
};

export const getAllSubCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const subCategoriesData = [];
    querySnapshot.forEach((doc) => {
      subCategoriesData.push({ ...doc.data(), id: doc.id });
    });
    return subCategoriesData;
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }
};

export const getAllBlogs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogsData = [];
    querySnapshot.forEach((doc) => {
      blogsData.push({ ...doc.data(), id: doc.id });
    });
    return blogsData;
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }
};

export const getSpecificBlog = async (id) => {
  try {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }
};

export const getRidersProfile = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "ridersprofile"));
    const ridersProfile = [];
    querySnapshot.forEach((doc) => {
      const { basicInfo, cnicInfo, vehicleInfo, status, assignedArea } =
        doc.data();

      const transformedData = {
        key: doc.id,
        name: basicInfo?.name,
        number: basicInfo?.phonenumber,
        photoId: basicInfo?.profilePhoto,
        cnicfront: cnicInfo?.cnicFront,
        cnicback: cnicInfo?.cnicBack,
        vehicalphoto: vehicleInfo?.vehicalPicture,
        vehicalcardfront: vehicleInfo?.vehicalCardFront,
        vehicalcardback: vehicleInfo?.vehicalCardBack,
        status,
        assignArea: {
          areaname: assignedArea.areaname ? assignedArea.areaname : " ",
          coordinates: assignedArea.coordinates
            ? JSON.parse(assignedArea.coordinates)
            : null,
        },
      };
      ridersProfile.push(transformedData);
    });
    return ridersProfile;
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
