import { useState } from 'react';
import { ProductFormValues } from './components/ProductForm/productFormSchema';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ProductForm } from './components/ProductForm/ProductForm';

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (data: ProductFormValues) => {
    console.log('Form data:', data);
    setShowAlert(true);

    // Hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className='flex flex-col items-center bg-white p-8 rounded-lg shadow-md max-w-2xl w-full'>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Создание товара</h1>
        {showAlert && (
          <Alert className="mt-4">
            <AlertTitle>Успех</AlertTitle>
            <AlertDescription>
              Форма отправлена успешно
            </AlertDescription>
          </Alert>
        )}
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export default App;