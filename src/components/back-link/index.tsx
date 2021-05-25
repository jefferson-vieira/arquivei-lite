import { useRouter } from 'next/router';

import Button from '../button';

const BackLink: React.FC = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Button
      $alt
      appearance="primary"
      onClick={goBack}
      title="Voltar à página anterior"
    >
      Voltar
    </Button>
  );
};

export default BackLink;
