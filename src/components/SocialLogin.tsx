import { FaComment, FaGithub } from 'react-icons/fa';
import { Box, Button, Divider, HStack, Text, VStack } from '@chakra-ui/react';

export default function SocialLogin() {
  let kakaoParams = {
    client_id: process.env.REACT_APP_REST_API_KEY as string,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI as string,
    response_type: 'code',
  };
  // const params = new URLSearchParams(kakaoParams).toString();
  const githubParams = {
    client_id: process.env.REACT_APP_GITHUB_CLIENT_ID as string,
    scope: 'read:user,user:email',
  };
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?${new URLSearchParams(
    kakaoParams
  ).toString()}`;
  const githubUrl = `https://github.com/login/oauth/authorize?${new URLSearchParams(
    githubParams
  ).toString()}`;
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text textTransform={'uppercase'} color='gray.500' fontSize='xs' as='b'>
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button as='a' href={githubUrl} w='100%' leftIcon={<FaGithub />}>
          Continue with Github
        </Button>
        <Button
          as='a'
          href={kakaoUrl}
          w='100%'
          leftIcon={<FaComment />}
          colorScheme={'yellow'}>
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
