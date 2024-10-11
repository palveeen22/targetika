import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface TProps {
  show: boolean;
  title: string;
  desc: string;
}

const AlertMessage = ({ show, title, desc }: TProps) => {
  if (!show) return null;

  return (
    <Alert className="mb-6 border border-[#8D7FC7]">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {desc}
      </AlertDescription>
    </Alert>
  );
};

export default AlertMessage;