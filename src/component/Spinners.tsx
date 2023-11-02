import { Spinner } from "@chakra-ui/react";

const Spinners = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default Spinners;
