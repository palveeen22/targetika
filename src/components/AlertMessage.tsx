import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface TProps {
  show: boolean;
}

const AlertMessage = ({ show }: TProps) => {
  if (!show) return null;

  return (
    <Alert className="mb-6 border border-[#8D7FC7]">
      <AlertTitle>Успех</AlertTitle>
      <AlertDescription>
        Форма отправлена успешно
      </AlertDescription>
    </Alert>
  );
};

export default AlertMessage;