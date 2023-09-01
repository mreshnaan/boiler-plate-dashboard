import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useGetQuery = (url) => {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryFn: async () => {
      try {
        const response = await fetch(url);
        const { data } = await response.json();
        return data;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    },
  });

  useEffect(() => {
    if (isLoading) {
      const toastId = toast.loading("Loading data...");
      return () => {
        toast.dismiss(toastId);
      };
    } else if (isError) {
      toast.error("Failed to fetch data");
    } else if (data) {
      toast.success("Data fetched successfully");
    }
  }, [isLoading, isError, data]);

  return { isLoading, isError, data, error, refetch };
};

export default useGetQuery;
