"use client";

import FormProviderWrapper from "@/components/shared/FormProviderWrapper";
import RHFInput from "@/components/shared/RHFInput";
import RHFSelect from "@/components/shared/RHFSelect";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Swal from "sweetalert2";
import useAxiosPublic from "@/lib/AxiosPublic";

export interface GuideFormValues {
  name: string;
  image: string;
  phone: string;
  email: string;
  address: string;
  rating: number | string;
  isAvailable: string;
  experience?: number | string;
  languages?: string;
  availabilityType: "Full-time" | "Part-time" | "Seasonal" | "";
}

const AddGuides = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (data: GuideFormValues) => {
    const guideData = {
      ...data,
      rating: parseFloat(data.rating as string),
      experience: data.experience ? parseInt(data.experience as string) : 0,
      isAvailable: data.isAvailable === "true",
    };

    try {
      const res = await axiosPublic.post("/guides", guideData);
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Success!",
          text: "Guide is successfully added!",
          icon: "success",
        });
      }
    } catch (error: unknown) {
      const errMsg =
        error instanceof Error ? error.message : "Something went wrong!";
      Swal.fire({
        title: "Error!",
        text: errMsg,
        icon: "error",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-green-400 hover:bg-green-600">
          Add Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Guide</DialogTitle>
        </DialogHeader>

        <FormProviderWrapper<GuideFormValues> onSubmit={handleSubmit}>
          <div className=" max-h-[60vh] overflow-y-auto mt-4">
            <RHFInput
              label="Guide Name"
              name="name"
              placeholder="Enter guide name"
              required="Guide name is required"
            />

            <RHFInput
              label="Image URL"
              name="image"
              placeholder="Paste image link"
              required="Image URL is required"
            />

            <RHFInput
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="0178XXXXXXX"
              required="Phone number is required"
            />

            <RHFInput
              label="Email"
              name="email"
              type="email"
              placeholder="example@mail.com"
              required="Email is required"
            />

            <RHFInput
              label="Address"
              name="address"
              placeholder="Street, City, District"
              required="Address is required"
            />

            <RHFInput
              label="Rating"
              name="rating"
              type="number"
              placeholder="4.5"
              required="Rating is required"
            />

            <RHFSelect
              label="Availability"
              name="isAvailable"
              required="Availability is required"
              options={[
                { label: "Available", value: "true" },
                { label: "Unavailable", value: "false" },
              ]}
            />

            <RHFInput
              label="Experience (Years)"
              name="experience"
              type="number"
              placeholder="e.g., 5"
            />

            <RHFInput
              label="Languages Spoken"
              name="languages"
              placeholder="e.g., Bangla, English"
            />

            <RHFSelect
              label="Availability Type"
              name="availabilityType"
              required="Availability type is required"
              options={[
                { label: "Full-time", value: "Full-time" },
                { label: "Part-time", value: "Part-time" },
                { label: "Seasonal", value: "Seasonal" },
              ]}
            />
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add Guide</Button>
          </DialogFooter>
        </FormProviderWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default AddGuides;
