import { useCallback, useState } from "react";
import { ProductFormValues } from "./productFormSchema";
import { TUseProduct } from "@/types";

export const useProduct = (): TUseProduct => {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [key, setKey] = useState<number>(0);
  
    const resetForm = useCallback(() => {
      setKey(prevKey => prevKey + 1);
    }, []);
  
    const handleSubmit = (data: ProductFormValues) => {
      console.log('Form data:', data);
      setShowAlert(true);
      resetForm();
  
      setTimeout(() => setShowAlert(false), 3000);
    };

    return {
        showAlert, 
        setShowAlert,
        key, 
        setKey,
        handleSubmit
    }
}