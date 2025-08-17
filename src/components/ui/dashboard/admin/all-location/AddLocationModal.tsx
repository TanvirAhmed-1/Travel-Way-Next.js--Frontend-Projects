"use client";

import FormProviderWrapper from "@/components/shared/FormProviderWrapper";
import RHFInput from "@/components/shared/RHFInput";
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

interface AddLocationFormValues {
  tour_title: string;
  tour_location: string;
  bus_name: string;
  bus_contact: string;
  guide_name: string;
  guide_contact: string;
  places: string;
  description: string;
  things_to_carry: string;
  ratings: string;
  tour_manager: string;
  tour_manager_contact: string;
  total_days: string;
  hotel_name: string;
  hotel_description: string;
  hotel_image: string;
  tour_cover_photo: string;
  bus_photo: string;
  price: string;
}

export function AddLocationModal() {
  const axiosPublic = useAxiosPublic();

  const handleAdd = async (data: AddLocationFormValues) => {
    try {
      const res = await axiosPublic.post("/addData", data);
      if (res.data.acknowledged) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data has been saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: unknown) {
      const errMsg =
        error instanceof Error ? error.message : "Something went wrong!";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errMsg,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-green-400 hover:bg-green-600">
          Add Location
        </Button>
      </DialogTrigger>

      <DialogContent className="lg:min-w-3xl min-w-xl ">
        <DialogHeader>
          <DialogTitle>Add Location</DialogTitle>
        </DialogHeader>

        <FormProviderWrapper<AddLocationFormValues> onSubmit={handleAdd}>
          <div className="max-h-[60vh] overflow-y-auto mt-4  grid  md:grid-cols-2 grid-cols-1 gap-4">
            <RHFInput
              label="Tour Title"
              name="tour_title"
              placeholder="Tour Title"
              required
            />
            <RHFInput
              label="Tour Location"
              name="tour_location"
              placeholder="Location"
              required
            />
            <RHFInput
              label="Bus Name"
              name="bus_name"
              placeholder="Bus Name"
              required
            />
            <RHFInput
              label="Bus Contact"
              name="bus_contact"
              placeholder="Bus Contact"
              required
            />
            <RHFInput
              label="Guide Name"
              name="guide_name"
              placeholder="Guide Name"
              required
            />
            <RHFInput
              label="Guide Contact"
              name="guide_contact"
              placeholder="Guide Contact"
              required
            />
            <RHFInput
              label="Places"
              name="places"
              placeholder="Places"
              required
            />
            <RHFInput
              label="Description"
              name="description"
              placeholder="Description"
              required
            />
            <RHFInput
              label="Things To Carry"
              name="things_to_carry"
              placeholder="Things To Carry"
              required
            />
            <RHFInput
              label="Ratings"
              name="ratings"
              placeholder="Ratings"
              required
            />
            <RHFInput
              label="Tour Manager"
              name="tour_manager"
              placeholder="Tour Manager"
              required
            />
            <RHFInput
              label="Manager Contact"
              name="tour_manager_contact"
              placeholder="Manager Contact"
              required
            />
            <RHFInput
              label="Total Days"
              name="total_days"
              placeholder="Total Days"
              required
            />
            <RHFInput
              label="Hotel Name"
              name="hotel_name"
              placeholder="Hotel Name"
              required
            />
            <RHFInput
              label="Hotel Description"
              name="hotel_description"
              placeholder="Hotel Description"
              required
            />
            <RHFInput
              label="Hotel Image URL"
              name="hotel_image"
              placeholder="Hotel Image URL"
              required
            />
            <RHFInput
              label="Tour Cover Photo"
              name="tour_cover_photo"
              placeholder="Tour Cover URL"
              required
            />
            <RHFInput
              label="Bus Photo"
              name="bus_photo"
              placeholder="Bus Photo URL"
              required
            />
            <RHFInput label="Price" name="price" placeholder="Price" required />
          </div>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </FormProviderWrapper>
      </DialogContent>
    </Dialog>
  );
}
