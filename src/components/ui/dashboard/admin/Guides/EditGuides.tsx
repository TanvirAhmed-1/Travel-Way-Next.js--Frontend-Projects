"use client";

import FormProviderWrapper from "@/components/shared/FormProviderWrapper";
import RHFInput from "@/components/shared/RHFInput";
import RHFSelect from "@/components/shared/RHFSelect";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Swal from "sweetalert2";
import useAxiosSecure from "@/lib/AxiosSecure";
import { GuideType } from "@/types/GuideType";
import { FaPencil } from "react-icons/fa6";
import useGuides from "@/hooks/useGuides";

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

interface EditGuidesProps {
  guide: GuideType;
}

const EditGuides = ({ guide }: EditGuidesProps) => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useGuides();

  const handleSubmit = async (data: GuideFormValues) => {
    const guideData = {
      ...data,
      rating: parseFloat(data.rating as string),
      experience: data.experience ? parseInt(data.experience as string) : 0,
      isAvailable: data.isAvailable === "true",
    };

    try {
      const res = await axiosSecure.patch(`/guides/${guide._id}`, guideData);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Guide is Update!",
          timer: 300,
          showConfirmButton: true,
        });
        refetch();
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
        <Button
          variant="ghost"
          size="icon"
          title="Edit Guide"
          className="text-blue-500 hover:text-white border p-2 rounded-full hover:bg-blue-700"
        >
          <FaPencil />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Guide</DialogTitle>
          <DialogDescription>
            Update guide information and click save.
          </DialogDescription>
        </DialogHeader>

        {/* 👇 Prefill form with guide values */}
        <FormProviderWrapper<GuideFormValues>
          onSubmit={handleSubmit}
          defaultValues={{
            name: guide.name,
            image: guide.image,
            phone: guide.phone,
            email: guide.email,
            address: guide.address,
            rating: guide.rating,
            isAvailable: String(guide.isAvailable),
            experience: guide.experience,
            languages: guide.languages,
            availabilityType: guide.availabilityType,
          }}
        >
          <RHFInput label="Guide Name" name="name" required="Required" />
          <RHFInput label="Image URL" name="image" required="Required" />
          <RHFInput label="Phone" name="phone" type="tel" required="Required" />
          <RHFInput
            label="Email"
            name="email"
            type="email"
            required="Required"
          />
          <RHFInput label="Address" name="address" required="Required" />
          <RHFInput
            label="Rating"
            name="rating"
            type="number"
            required="Required"
          />
          <RHFSelect
            label="Availability"
            name="isAvailable"
            options={[
              { label: "Available", value: "true" },
              { label: "Unavailable", value: "false" },
            ]}
          />
          <RHFInput
            label="Experience (Years)"
            name="experience"
            type="number"
          />
          <RHFInput label="Languages" name="languages" />
          <RHFSelect
            label="Availability Type"
            name="availabilityType"
            options={[
              { label: "Full-time", value: "Full-time" },
              { label: "Part-time", value: "Part-time" },
              { label: "Seasonal", value: "Seasonal" },
            ]}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </FormProviderWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default EditGuides;
