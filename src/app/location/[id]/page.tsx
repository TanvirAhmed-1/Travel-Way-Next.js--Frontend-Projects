import LocationDetails from "@/components/ui/LocationDetails";

const page = ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <LocationDetails id={params.id} />
    </div>
  );
};

export default page;
