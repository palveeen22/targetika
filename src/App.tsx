import { useCallback, useState } from 'react';
import { ProductFormValues } from './components/ProductForm/hook/productFormSchema';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ProductForm } from './components/ProductForm/ProductForm';

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [key, setKey] = useState(0);

  const resetForm = useCallback(() => {
    setKey(prevKey => prevKey + 1);
  }, []);

  const handleSubmit = (data: ProductFormValues) => {
    console.log('Form data:', data);
    setShowAlert(true);
    resetForm();

    // Hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-8 md:px-0">
      <div className='flex flex-col items-center bg-white p-8 shadow-md max-w-xl w-full rounded-3xl overflow-hidden'>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Создание товара</h1>
        {showAlert && (
          <Alert className="mb-6 border border-[#8D7FC7]">
            <AlertTitle>Успех</AlertTitle>
            <AlertDescription>
              Форма отправлена успешно
            </AlertDescription>
          </Alert>
        )}
        <div className="w-full max-h-[calc(100vh-200px)] overflow-y-auto">
          <ProductForm key={key} onSubmit={handleSubmit}/>
        </div>
      </div>
    </main>
  );
};

export default App;