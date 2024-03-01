"use client";
import React, { useState, useEffect } from "react";

import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Upload,
  Select,
  notification,
} from "antd";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/lib/firebase/config";

import { addNewFacilityAction, editFacilityAction } from "@/lib/serverActions";

import { useTransition } from "react";

import Map, { Marker, GeolocateControl } from "react-map-gl";
import { FaMapPin } from "react-icons/fa6";

const FacilityFrom = ({ facilityData, id }) => {
  const [isPending, startTransition] = useTransition();
  const [viewport, setViewport] = useState({});

  useEffect(() => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setViewport({
          ...viewport,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
    }
  }, []);

  const onFinish = async (values) => {
    if (values.pictures.event) {
      console.error("Pictures not uploaded yet!");
      notification.error({ message: "Pictures not uploaded yet!" });
      return;
    }
    const uploadedFiles = values.pictures?.fileList?.map((file) =>
      file.response ? file.response : file
    );

    const newFacilityData = {
      title: values.title,
      name: values.name,
      phonenumber: values.phonenumber,
      sector: values.sector,
      type: values.type,
      latitude: viewport?.latitude,
      longitude: viewport?.longitude,
      city: values.city,
      address: values.address,
      pictures: uploadedFiles,
    };

    startTransition(async () => {
      if (facilityData) {
        const result = await editFacilityAction({ ...newFacilityData, id });
        if (result?.error) {
          console.error(result);
          notification.error({ message: result?.error });
        } else {
          notification.success({
            message: "Facility Edited Successfully",
          });
        }
      } else {
        const result = await addNewFacilityAction(newFacilityData);
        if (result?.error) {
          console.error(result);
          notification.error({ message: result?.error });
        } else {
          console.log("Facility added Successfully");
          notification.success({ message: "Facility added Successfully" });
        }
      }
    });
  };

  const onMarkerDragEnd = (event) => {
    setViewport({
      latitude: event.lngLat?.lat,
      longitude: event.lngLat?.lng,
    });
  };

  return (
    <>
      <Form
        initialValues={facilityData}
        name="basic"
        labelCol={{ span: 24 }}
        onFinish={onFinish}
        autoComplete="off"
        className="flex flex-wrap justify-between w-11/12 !m-auto "
      >
        <Form.Item
          className="w-[48%]"
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please fill the field!",
            },
          ]}
        >
          <Input size="large" placeholder="Enter facility title" />
        </Form.Item>

        <Form.Item
          className="w-[48%]"
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please fill the field!",
            },
          ]}
        >
          <Input size="large" placeholder="Enter representative name" />
        </Form.Item>

        <Form.Item
          className="w-[48%]"
          label="Phone Number"
          name="phonenumber"
          rules={[
            {
              required: true,
              message: "Please fill the field!",
            },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            size="large"
            min={1}
            placeholder="Enter representative phone number "
          />
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[
            {
              required: true,
              message: "Please fill the field!",
            },
          ]}
          className="w-[48%]"
        >
          <Select
            size="large"
            placeholder="please select facility type"
            options={[
              {
                value: "recyclingcenter",
                label: "Recycling Center",
              },
              {
                value: "scrapyard",
                label: "Scrap Yard",
              },
              {
                value: "wastemanagement",
                label: "Waste Management Facility",
              },
            ]}
          />
        </Form.Item>

        <div className="flex justify-between flex-1">
          <div className="w-[48%]">
            <Form.Item
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please fill the field!",
                },
              ]}
              // className="w-[48%]"
            >
              <Input placeholder="Enter city name" />
            </Form.Item>

            <Form.Item
              label="Sector"
              name="sector"
              rules={[
                {
                  required: true,
                  message: "Please fill the field!",
                },
              ]}
              // className="w-[48%]"
            >
              <Input placeholder="Enter sector name" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please fill the field!",
                },
              ]}
              // className="w-[48%]"
            >
              <Input.TextArea
                rows={6}
                placeholder="Enter your complete Address"
              />
            </Form.Item>
          </div>
          <div className="w-[48%] flex flex-col justify-between border-[#d9d9d9] px-4 pt-2 border-[1px] rounded-2xl">
            <p> Drop Pin At exact location</p>
            <div style={{ height: "100%", width: "100%" }}>
              <Map
                mapboxAccessToken="pk.eyJ1Ijoic2hhamphcjk5IiwiYSI6ImNsdDdjcWc1dDBscmgybW1zcW9uc2todXgifQ.eRSbnQ9C5g3FxpZ2NEviRA"
                initialViewState={{
                  longitude: viewport?.longitude || "73.0288",
                  latitude: viewport?.latitude || "33.7156",
                  zoom: 3.5,
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              >
                <Marker
                  longitude={viewport?.longitude || 0}
                  latitude={viewport?.latitude || 0}
                  anchor="bottom"
                  draggable={true}
                  onDragEnd={onMarkerDragEnd}
                >
                  <FaMapPin size={34} color="red" />
                </Marker>
                <GeolocateControl />
              </Map>
            </div>

            <div className="flex justify-between items-center m-4">
              <div className="w-[48%] p-2 border-[1px] rounded-lg border-[#d9d9d9]">
                <p>{viewport?.latitude}</p>
              </div>
              <div className="w-[48%] p-2 border-[1px] rounded-lg border-[#d9d9d9]">
                <p>{viewport?.longitude}</p>
              </div>
            </div>
          </div>
        </div>

        <Form.Item
          name="pictures"
          label="Pictures"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                const fileList = getFieldValue("pictures");

                if (
                  (fileList && fileList.length > 0) ||
                  (fileList.fileList && fileList.fileList.length > 0)
                ) {
                  return Promise.resolve();
                }
                return Promise.reject("Please upload at least one picture!");
              },
            }),
          ]}
          className="w-[100%]"
        >
          <Upload
            defaultFileList={facilityData?.pictures}
            name="logo"
            listType="picture"
            size="large"
            accept=".png, .jpeg"
            multiple
            customRequest={async ({ onError, onSuccess, file, onProgress }) => {
              const imagesRef = ref(storage, `facilities/${file.name}`);
              const uploadTask = uploadBytesResumable(imagesRef, file);

              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  onProgress({
                    percent:
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
                  });
                },
                (error) => {
                  // Handle unsuccessful uploads
                  onError(error);
                  notification.error({
                    message: error,
                  });
                },
                async () => {
                  try {
                    const downloadURL = await getDownloadURL(imagesRef);
                    const picutureObj = {
                      uid: file.uid,
                      name: file.name,
                      status: "done",
                      url: downloadURL,
                    };
                    onSuccess(picutureObj);
                    notification.success({
                      message: "Picture Uploaded Successfully",
                    });
                  } catch (e) {
                    console.error("Error getting download URL:", e);
                    notification.error({
                      message: e,
                    });
                  }
                }
              );
            }}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item className="w-[100%] flex justify-end ">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="!bg-primary-800 "
            icon={<PlusOutlined />}
            loading={isPending}
          >
            {facilityData ? "Edit" : "Register"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FacilityFrom;
