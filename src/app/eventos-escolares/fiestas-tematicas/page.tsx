'use client'
import { CarouselOne, ServicesOne, TitleOne } from '@/components'
import { Img } from '@/core'
import { Box, Typography, BoxProps, styled } from '@mui/material'

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        paddingLeft: '60px',
        paddingRight: '60px'
    },
    [theme.breakpoints.down('md')]: {
        paddingLeft: '30px',
        paddingRight: '30px'
    }
}))

export default function Parties() {
    const imgs: Img[] = [
        {
            alt: 'img-1',
            src: '/imgs/banners/fiestas_tematicas/img_1.jpg'
        },
        {
            alt: 'img-2',
            src: '/imgs/banners/fiestas_tematicas/img_2.jpeg'
        },
        {
            alt: 'img-3',
            src: '/imgs/banners/fiestas_tematicas/img_3.jpg'
        },
        {
            alt: 'img-4',
            src: '/imgs/banners/fiestas_tematicas/img_4.jpg'
        },
        {
            alt: 'img-5',
            src: '/imgs/banners/fiestas_tematicas/img_5.jpg'
        },
        {
            alt: 'img-6',
            src: '/imgs/banners/fiestas_tematicas/img_6.jpg'
        },
        {
            alt: 'img-7',
            src: '/imgs/banners/fiestas_tematicas/img_7.jpg'
        },
        {
            alt: 'img-8',
            src: '/imgs/banners/fiestas_tematicas/img_8.jpeg'
        },
        {
            alt: 'img-9',
            src: '/imgs/banners/fiestas_tematicas/img_9.jpeg'
        },
        {
            alt: 'img-10',
            src: '/imgs/banners/fiestas_tematicas/img_10.jpeg'
        },
        {
            alt: 'img-11',
            src: '/imgs/banners/fiestas_tematicas/img_11.jpg'
        },
        {
            alt: 'img-12',
            src: '/imgs/banners/fiestas_tematicas/img_12.jpeg'
        },
    ]


    return (
        <main>
            <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
                <CarouselOne imgs={imgs} />
                <br />
                {/* <BoxStyled paddingLeft={'60px'}>
          <Typography variant='h2' fontWeight={600}>
            Últimas Noticias
          </Typography>
        </BoxStyled> */}
            </Box>
            <TitleOne text='Paseos o Visitas Escolares' />
            <BoxStyled maxWidth={'1200px'} marginX={'auto'} paddingY={4}>
                <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                    ¿Estás listo para llevar la diversión al siguiente nivel en tu escuela? En Aventura en tu Escuela, ofrecemos emocionantes fiestas temáticas que transformarán tu escuela en un mundo de aventuras y fantasía.
                    <br />
                    <br />
                    Nuestras fiestas temáticas están diseñadas para brindar una experiencia única y emocionante para los estudiantes, llenando el ambiente escolar con alegría, creatividad y emoción. Desde fiestas de disfraces hasta eventos inspirados en tus películas o libros favoritos, ofrecemos una amplia variedad de temas para que elijas el que mejor se adapte a los intereses de tu escuela.
                    <br />
                    <br />
                    Cada fiesta temática incluye una increíble decoración, actividades divertidas y emocionantes juegos diseñados para involucrar a todos los estudiantes y fomentar el trabajo en equipo y la creatividad. Nuestro dedicado equipo de profesionales se encarga de cada detalle, desde la planificación hasta la ejecución, garantizando que tu fiesta sea un éxito rotundo.
                    <br />
                    <br />
                    Ya sea que estés buscando organizar una celebración especial para una ocasión especial o simplemente quieras llevar un poco de diversión extra al día a día en tu escuela, nuestras fiestas temáticas son la opción perfecta. ¡Prepárate para vivir una experiencia inolvidable llena de diversión, risas y momentos memorables con Aventura en tu Escuela!
                    <br />
                    <br />
                </Typography>
            </BoxStyled>
            <ServicesOne />
        </main>
    )
}