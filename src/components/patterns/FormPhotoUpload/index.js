/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import Flickity from 'react-flickity-component';
import { Lottie } from '@crello/react-lottie';

import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import { useForm } from '../../../infra/hooks/forms/useForm';
import Text from '../../foundation/Text';
import { Box } from '../../foundation/layout/Box';
import { BoxForm, BoxPhoto, PhotoSkeleto, Figure, filterList } from './styles';
import loadingAnimation from './animations/loading.json';
import { photoService } from '../../../services/photo/photoService';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';

const URL = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
const photoSchema = yup.object().shape({
  imageUrl: yup
    .string()
    .matches(URL, 'Insira uma URL válida')
    .required('"URL" é obrigatório'),
});

const flickityOptions = {
  initialIndex: 2,
  groupCells: true,
};

export default function FormPhotoUpload({ modalProps }) {
  const websitePageContext = React.useContext(WebsitePageContext);
  const [step, setStep] = React.useState(1);
  const [currentFilter, setCurrentFilter] = React.useState('');
  const initialValues = {
    imageUrl: '',
    filter: '',
  };

  const form = useForm({
    initialValues,
    async onSubmit() {
      form.setIsFormDisabled(true);
      form.setIsFormLoading(true);

      await photoService
        .photo({
          photoUrl: form.values.imageUrl,
          filter: currentFilter,
        })
        .then(() => {
          websitePageContext.toggleModal();
          setStep(1);
        })
        .catch((err) => console.error(err.message, 'Error posting image'))
        .finally(() => {
          form.setIsFormDisabled(false);
          form.setIsFormLoading(false);
          websitePageContext.setProfileData();
        });
    },
    async validateSchema(values) {
      return photoSchema.validate(values, { abortEarly: false });
    },
  });

  return (
    <BoxForm>
      <Box {...modalProps}>
        <Box textAlign="right" padding="20px">
          {modalProps.ButtonCloseModal}
        </Box>
        <form onSubmit={form.handleSubmit} id="photoUpload">
          {step === 1 && (
            <Box>
              <BoxPhoto>{PhotoSkeleto}</BoxPhoto>
              <Box padding="24px">
                <TextField
                  placeholder="URL da imagem"
                  name="imageUrl"
                  value={form.values.imageUrl}
                  error={form.errors.imageUrl}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  isTouched={form.touched.imageUrl}
                />
                <Text
                  tag="p"
                  variant="paragraph2"
                  textAlign="center"
                  color="#88989E"
                >
                  Formatos suportados: jpg, png, svg e xpto.
                </Text>

                <Button
                  type="submit"
                  variant="primary.main"
                  id="nextStep"
                  margin={{
                    xs: '0 auto',
                    md: 'initial',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setStep(2);
                  }}
                  fullWidth
                  disabled={form.isFormDisabled}
                >
                  Avançar
                </Button>
              </Box>
            </Box>
          )}

          {step === 2 && (
            <Box>
              <BoxPhoto id="postPreview">
                <figure className={currentFilter}>
                  <img
                    alt="Post"
                    src={form.values.imageUrl}
                    width="350px"
                    height="350px"
                  />
                </figure>
              </BoxPhoto>
              <Box padding="24px 0 0 24px">
                <Flickity
                  className="carousel"
                  groupCells
                  options={flickityOptions}
                  static
                >
                  {filterList.map((filter) => (
                    <Box
                      key={filter.filter}
                      onClick={() => setCurrentFilter(filter.filter)}
                    >
                      <Figure className={filter.filter} key={filter.filter}>
                        <img
                          alt="Post"
                          src={form.values.imageUrl}
                          width="88px"
                          height="88px"
                        />
                      </Figure>
                      <Text
                        tag="p"
                        textAlign="center"
                        variant="smallestException"
                      >
                        {filter.name}
                      </Text>
                    </Box>
                  ))}
                </Flickity>
              </Box>
              <Box padding="0 24px 24px 24px">
                <Button
                  type="submit"
                  id="makePost"
                  variant="primary.main"
                  margin={{
                    xs: '0 auto',
                    md: 'initial',
                  }}
                  fullWidth
                  disabled={form.isFormDisabled}
                >
                  {form.isFormLoading ? (
                    <Box margin="auto" width="100px">
                      <Lottie
                        width="100px"
                        height="20px"
                        config={{
                          animationData: loadingAnimation,
                          loop: true,
                          autoplay: true,
                        }}
                      />
                    </Box>
                  ) : (
                    'Postar'
                  )}
                </Button>
              </Box>
            </Box>
          )}
        </form>
      </Box>
    </BoxForm>
  );
}

FormPhotoUpload.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  modalProps: PropTypes.any.isRequired,
};
