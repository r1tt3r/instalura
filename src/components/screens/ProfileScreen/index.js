import React from 'react';
import { useUserService } from '../../../services/user/hook';
import Image from '../../commons/Image';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { ProfileAvatar } from './styles';

export default function ProfileScreen() {
  const dados = useUserService.getProfilePage();

  return (
    <Box paddingTop="50px" backgroundColor="#fff">
      <Grid.Container>
        <Grid.Row alignItems="center" justifyContent="center">
          <Grid.Col
            offset={{ xs: 0, md: 2 }}
            value={{ xs: 4, md: 3 }}
            display="flex"
            justifyContent="center"
          >
            <ProfileAvatar />
          </Grid.Col>
          <Grid.Col
            value={{ xs: 8, md: 7 }}
            paddingTop={{ xs: '20px', md: '40px' }}
          >
            <Grid.Row>
              <Grid.Col value={{ xs: 3, md: 3 }} padding={{ xs: '0' }}>
                <Box display="flex" flexDirection="column">
                  <Text
                    variant="titleXS"
                    color="tertiary.main"
                    fontSize={{ md: '24px', xs: '16px' }}
                  >
                    22K
                  </Text>
                  <Text
                    variant="paragraph1"
                    color="tertiary.light"
                    marginTop="8px"
                    fontSize={{ md: '16px', xs: '12px' }}
                  >
                    Publicações
                  </Text>
                </Box>
              </Grid.Col>
              <Grid.Col
                value={{ xs: 3, md: 3 }}
                padding={{ xs: '0' }}
                margin={{ xs: '0 20px', md: '0' }}
              >
                <Box display="flex" flexDirection="column">
                  <Text
                    variant="titleXS"
                    color="tertiary.main"
                    fontSize={{ md: '24px', xs: '16px' }}
                  >
                    22K
                  </Text>
                  <Text
                    variant="paragraph1"
                    color="tertiary.light"
                    marginTop="8px"
                    fontSize={{ md: '16px', xs: '12px' }}
                  >
                    Seguidores
                  </Text>
                </Box>
              </Grid.Col>
              <Grid.Col value={{ xs: 3, md: 3 }} padding={{ xs: '0' }}>
                <Box display="flex" flexDirection="column">
                  <Text
                    variant="titleXS"
                    color="tertiary.main"
                    fontSize={{ md: '24px', xs: '16px' }}
                  >
                    22K
                  </Text>
                  <Text
                    variant="paragraph1"
                    color="tertiary.light"
                    marginTop="8px"
                    fontSize={{ md: '16px', xs: '12px' }}
                  >
                    Seguindo
                  </Text>
                </Box>
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Box display="flex" flexDirection="column" paddingTop="32px">
            <Text
              variant="titleXS"
              color="tertiary.main"
              fontSize={{ md: '24px', xs: '16px' }}
            >
              Nicolas Cage
            </Text>
            <Text variant="paragraph1" color="tertiary.light" marginTop="8px">
              A wholesome person responsible for the best movies ever.
            </Text>
          </Box>
        </Grid.Row>
        <Grid.Row
          marginTop={{ md: '72px', xs: '17px' }}
          margin="auto"
          paddingLeft={{ md: '10%', xs: 'initial' }}
          paddingRight={{ md: '10%', xs: 'initial' }}
        >
          <Grid.Col>
            <Grid.Row>
              {dados.data &&
                dados.data.posts.map((post) => (
                  <Grid.Col
                    key={post.createdAt}
                    value={{ md: 4, xs: 4 }}
                    padding={{ xs: '5px' }}
                  >
                    <Box marginBottom="15px">
                      <Image
                        src={post.photoUrl}
                        alt={post.description}
                        width="285"
                        height="285"
                      />
                    </Box>
                  </Grid.Col>
                ))}
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
