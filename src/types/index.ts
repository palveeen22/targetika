import { ProductFormValues } from "@/components/ProductForm/hooks/productFormSchema"

export type TUseProduct = {
    showAlert: boolean
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>
    key: number
    setKey: React.Dispatch<React.SetStateAction<number>>
    handleSubmit: (data: ProductFormValues) => void
}