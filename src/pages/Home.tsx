import { Button } from '@/components/Button';
import { BUTTON_VARIANTS } from '@/components/Button';

function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button variant={BUTTON_VARIANTS.PRIMARY}>Primário</Button>
      <Button variant={BUTTON_VARIANTS.SECONDARY}>Secundário</Button>
    </>
  );
}

export default Home;
