import { Button } from '@/components/Button/Button';
import { BUTTON_VARIANTS } from '@/components/Button/Button';
import { TextArea } from '@/components/TextArea/TextArea';
import { ChangeEvent, useState } from 'react';

function Home() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <h1>Hello World</h1>
      <Button variant={BUTTON_VARIANTS.PRIMARY}>Primário</Button>
      <Button variant={BUTTON_VARIANTS.SECONDARY}>Secundário</Button>
      <TextArea
        name={'prompt'}
        value={value}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setValue(event.target.value);
        }}
      >
        Texto
      </TextArea>
    </>
  );
}

export default Home;
