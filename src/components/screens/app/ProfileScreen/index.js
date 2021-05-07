import React from 'react';
import Image from '../../../commons/Image';
import PhotoLike from '../../../commons/PhotoLike';
import { Box } from '../../../foundation/layout/Box';
import { Grid } from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';
import { WebsitePageContext } from '../../../wrappers/WebsitePage';
import { ProfileAvatar, ImageContainer } from './styles';

export default function ProfileScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);
  const [postsData, setPostsData] = React.useState([]);

  React.useEffect(() => {
    websitePageContext.setProfileData();
  }, []);

  React.useEffect(() => {
    setPostsData(websitePageContext.getProfileData());
  }, [websitePageContext.getProfileData()]);

  return (
    <Box paddingTop={{ md: '50px', xs: '20px' }} backgroundColor="#E5E5E5">
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
                    234
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
                    22k
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
              <Grid.Col value={{ xs: 3, md: 3 }} padding={{ xs: '0' }}>
                <Box display="flex" flexDirection="column">
                  <Text
                    variant="titleXS"
                    color="tertiary.main"
                    fontSize={{ md: '24px', xs: '16px' }}
                  >
                    134k
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
            </Grid.Row>
            <Grid.Row>
              <Box
                display="flex"
                flexDirection="column"
                paddingTop={{ md: '32px', xs: '15px' }}
              >
                <Text
                  variant="titleXS"
                  color="tertiary.main"
                  fontSize={{ md: '24px', xs: '16px' }}
                >
                  Nicolas Cage
                </Text>
                <Text
                  fontSize={{ xs: '14px', md: '16px' }}
                  color="#88989E"
                  marginTop="8px"
                >
                  A wholesome person responsible for the best movies ever.
                </Text>
              </Box>
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row
          marginTop={{ md: '72px', xs: '17px' }}
          marginBottom={{ md: '72px', xs: '17px' }}
          margin="auto"
          paddingLeft={{ md: '10%', xs: 'initial' }}
          paddingRight={{ md: '10%', xs: 'initial' }}
        >
          <Grid.Col>
            <Grid.Row id="profilePhotoList">
              {postsData?.map((post) => (
                <Grid.Col
                  className="profileImage"
                  key={post.createdAt}
                  value={{ md: 4, xs: 4 }}
                  padding={{ xs: '5px' }}
                >
                  <ImageContainer
                    className="imageContainer"
                    marginBottom="15px"
                    position="relative"
                  >
                    <PhotoLike post={post} />
                    <Image
                      filter={post.filter}
                      src={post.photoUrl}
                      alt={post.description}
                      layout="fill"
                    />
                  </ImageContainer>
                </Grid.Col>
              ))}
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
