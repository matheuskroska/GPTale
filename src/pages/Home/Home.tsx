import { Button } from '@/components/Button/Button';
import { BUTTON_VARIANTS } from '@/components/Button/Button';
import { Logo } from '@/components/Logo/Logo';
import { TextArea } from '@/components/TextArea/TextArea';
import { useState } from 'react';
import { SlControlPlay } from 'react-icons/sl';
import { ReactComponent as LogoSvg } from '@/assets/images/lady.svg';
import { StyledHome } from './Home.styled';
import { AIResponse } from '@/components/AIResponse/AIResponse';

function Home() {
  const [promptValue, setPromptValue] = useState<string>('');

  const tale = {
    title: 'The Three Little Pigs',
    paragraph: [
      {
        p: 'Once upon a time, there were three little pigs who left their home to build their own houses. The first little pig built his house out of straw, the second little pig built his house out of sticks, and the third little pig built his house out of bricks.',
      },
      {
        p: "One day, a big bad wolf came and blew down the straw house. The little pig ran to the stick house, but the wolf blew that down too. The two pigs then ran to the brick house, and the wolf tried to blow it down, but he couldn't. The wolf then tried to come down the chimney, but the third little pig had a pot of boiling water ready for him. The wolf fell into the pot and the three little pigs lived happily ever after in their sturdy brick house.",
      },
      {
        p: "The moral of the story is that hard work and perseverance pay off, and it's better to be safe than sorry.",
      },
    ],
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPromptValue(event.target.value);
  };

  return (
    <StyledHome>
      <Logo>
        GPTale <LogoSvg />
      </Logo>
      <TextArea
        name="prompt"
        value={promptValue}
        onChange={handleTextAreaChange}
      >
        <Button variant={BUTTON_VARIANTS.ICON}>
          <SlControlPlay />
        </Button>
      </TextArea>
      <AIResponse title="AIResponse">
        <p>{tale.paragraph[0].p}</p>
        <p>{tale.paragraph[1].p}</p>
        <p>{tale.paragraph[2].p}</p>
      </AIResponse>
      <Button variant={BUTTON_VARIANTS.PRIMARY}>Print</Button>
    </StyledHome>
  );
}

export default Home;
