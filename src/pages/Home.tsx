import { Button } from '@/components/Button/Button';
import { BUTTON_VARIANTS } from '@/components/Button/Button';
import { TextArea } from '@/components/TextArea/TextArea';
import { useState } from 'react';

function Home() {
  const [promptValue, setPromptValue] = useState<string>('');

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPromptValue(event.target.value);
  };

  return (
    <>
      <h1>Hello World</h1>
      <Button variant={BUTTON_VARIANTS.PRIMARY}>Primário</Button>
      <Button variant={BUTTON_VARIANTS.SECONDARY}>Secundário</Button>
      <TextArea
        name="prompt"
        value={promptValue}
        onChange={handleTextAreaChange}
      ></TextArea>
    </>
  );
}

export default Home;
