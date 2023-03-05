import { Button } from '@/components/Button/Button';
import { BUTTON_VARIANTS } from '@/components/Button/Button';
import { TextArea } from '@/components/TextArea/TextArea';
import { useState } from 'react';
import { SlControlPlay } from 'react-icons/sl';

function Home() {
  const [promptValue, setPromptValue] = useState<string>('');

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPromptValue(event.target.value);
  };

  return (
    <>
      <TextArea
        name="prompt"
        value={promptValue}
        onChange={handleTextAreaChange}
      >
        <Button variant={BUTTON_VARIANTS.ICON}>
          <SlControlPlay />
        </Button>
      </TextArea>
    </>
  );
}

export default Home;
