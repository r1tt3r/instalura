import React from 'react';
import { Logo } from '../../../../theme/Logo';
import Avatar from '../../../commons/Avatar';
import FeedCard from '../../../commons/FeedCard';
import { IconButton } from '../../../commons/FeedCard/styles';
import { Box } from '../../../foundation/layout/Box';
import { Grid } from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';
import { WebsitePageContext } from '../../../wrappers/WebsitePage';
import { iconGithub } from './styles';

export default function FeedScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);
  const [postsData, setPostsData] = React.useState([]);
  const projetosDaGalera = [
    {
      username: 'john_cena',
      name: 'IT’S JOHN CENA',
    },
    {
      username: 'leeroy.jenkins',
      name: 'Leeroy Jenkins Official',
    },
    {
      username: 'gauchoronaldinho',
      name: 'Ronaldin Gaúcho',
    },
    {
      username: 'wally',
      name: 'this time it was easy',
    },
  ];

  React.useEffect(() => {
    websitePageContext.setProfileData();
  }, []);

  React.useEffect(() => {
    setPostsData(websitePageContext.getProfileData());
  }, [websitePageContext.getProfileData()]);

  return (
    <>
      <Box
        display={{ xs: 'block', md: 'none' }}
        textAlign="center"
        margin="10px"
      >
        <Logo />
      </Box>
      <Box
        paddingTop={{ md: '50px', xs: '0' }}
        paddingBottom="50px"
        backgroundColor="#E5E5E5"
        overflow="auto"
      >
        <Grid.Container>
          <Grid.Row alignItems="center" justifyContent="center">
            <Grid.Col
              value={{ xs: 12, md: 7 }}
              paddingLeft={{ xs: '0 !important' }}
              paddingRight={{ xs: '0 !important' }}
            >
              {postsData?.map((post) => (
                // eslint-disable-next-line no-underscore-dangle
                <Box flexDirection="column" key={post._id}>
                  <FeedCard post={post} />
                </Box>
              ))}
            </Grid.Col>
            <Grid.Col
              value={{ xs: 12, md: 5 }}
              paddingTop={{ xs: '20px', md: '40px' }}
            >
              <Box display="flex" alignItems="center">
                <Avatar size="big" border={false} />
                <Box marginLeft="15px">
                  <Text tag="div" marginBottom="5px" fontWeight="500">
                    nic.cage
                  </Text>
                  <Text tag="div" variant="paragraph1" color="#88989E">
                    Nicolas Cage
                  </Text>
                </Box>
                <Box
                  flexGrow="1"
                  textAlign="right"
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <IconButton>
                    {iconGithub}{' '}
                    <Text color="#FB7B6B" fontWeight="500" marginLeft="10px">
                      Github
                    </Text>
                  </IconButton>
                </Box>
              </Box>
              <Box marginTop="40px">
                <Box marginBottom="20px">
                  <Text color="#88989E" fontWeight="400">
                    Projetos da Galera
                  </Text>
                </Box>

                {projetosDaGalera.map((projeto) => (
                  <Box
                    display="flex"
                    alignItems="center"
                    marginBottom="20px"
                    key={projeto.username}
                  >
                    <Avatar size="big" border={false} />
                    <Box marginLeft="15px">
                      <Text tag="div" marginBottom="5px" fontWeight="500">
                        {projeto.username}
                      </Text>
                      <Text tag="div" variant="paragraph1" color="#88989E">
                        {projeto.name}
                      </Text>
                    </Box>
                    <Box
                      flexGrow="1"
                      textAlign="right"
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <IconButton>
                        {iconGithub}{' '}
                        <Text
                          color="#FB7B6B"
                          fontWeight="500"
                          marginLeft="10px"
                        >
                          Github
                        </Text>
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
    </>
  );
}
