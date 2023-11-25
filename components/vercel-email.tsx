import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface VercelInviteUserEmailProps {
    username?: string;
    userImage?: string;
    invitedByUsername?: string;
    invitedByEmail?: string;
    teamName?: string;
    teamImage?: string;
    inviteLink?: string;
    inviteFromIp?: string;
    inviteFromLocation?: string;
  }
  
  export const VercelInviteUserEmail = ({
    username = '',
    invitedByUsername = '',
  }: VercelInviteUserEmailProps) => {
    const previewText = `我是不着陆的主理人夜游船，很高兴你对不着陆感兴趣。`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
              <Heading className="text-black text-[24px] text-center p-0 my-[30px] mx-0 font-bold tracking-wide">
                欢迎订阅不着陆！
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                你好{username}:
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                我是不着陆的主理人<strong>夜游船</strong>，很高兴你对不着陆感兴趣。不着陆是我和马克发起的闲聊播客，我们希望能在这里分享我们的热情和兴趣。
              </Text>
              <Img src='https://s2.loli.net/2023/11/22/vFlBdKrDLfjSnbu.png' alt='不着陆' className="w-[350px]" />
              <Text className="text-black text-[14px] leading-[24px]">
                上面的卡片是我对不着陆聚焦的主题的设想，分别是<strong>科技、设计、开发和对活动和事件的一些想法</strong>。
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                如果你有更多的反馈或者单纯想和我们做朋友，请随时回复这封邮件，我会及时回复~
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                顺颂商祺,
              </Text>
              <Text className="text-black text-[14px] leading-[24px] -mt-4">
                夜游船
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                你可以随时<Link href='https://buzhaolu.live/unsubscribe' className='text-blue-500'>退订</Link>这封邮件。
              </Text>
            </Container>
          </Body>
          </Tailwind>
      </Html>
    );
  };
  
  export default VercelInviteUserEmail;