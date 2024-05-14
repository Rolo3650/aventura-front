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
            src: '/imgs/banners/paseos/img_1.jpg'
        },
        {
            alt: 'img-2',
            src: '/imgs/banners/paseos/img_2.jpg'
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
                    En Aventura en tu Escuela, nos enorgullece ofrecer los mejores viajes culturales para escuelas en todo México. ¡Atrévete a organizar una experiencia educativa inolvidable para tus alumnos en algunos de los destinos más fascinantes del país!
                    <br />
                    <br />
                    Desde el majestuoso Estado de México hasta las exuberantes selvas de Tabasco, ofrecemos una amplia variedad de destinos para que elijas el que mejor se adapte a los intereses y necesidades de tu grupo escolar. Ya sea explorando las antiguas ruinas mayas en Cancún, sumergiéndose en la rica historia de Oaxaca o descubriendo la belleza natural de Veracruz, nuestros viajes culturales prometen una experiencia enriquecedora para todos.
                    <br />
                    <br />
                    Nuestros paquetes incluyen todo lo necesario para que tu viaje sea cómodo, seguro y emocionante. Desde el transporte en autobús de turismo hasta el alojamiento en hoteles de 4 o 5 estrellas, nos aseguramos de que cada detalle esté cuidadosamente planificado. Además, nuestros paquetes incluyen alimentos, entradas a los lugares de visita, recorridos guiados, información cultural detallada y actividades recreativas diseñadas para enriquecer la experiencia de aprendizaje de los estudiantes.
                    <br />
                    <br />
                    Para garantizar la seguridad de todos los participantes, cada grupo contará con la supervisión de al menos un explorador por cada 10-12 alumnos. Además, ofrecemos un seguro contra accidentes con una cobertura de hasta $20,000.00 y servicio médico disponible en todo momento.
                    <br />
                    <br />
                    ¡Embárcate en una emocionante aventura cultural con Aventura en tu Escuela y crea recuerdos duraderos para tus estudiantes!
                    <br />
                    <br />
                    Estado de México
                    <br />
                    Querétaro
                    <br />
                    Hidalgo
                    <br />
                    Oaxaca
                    <br />
                    Morelos
                    <br />
                    Cancún
                    <br />
                    Veracruz
                    <br />
                    Puebla
                    <br />
                    Tabasco
                    <br />
                    <br />
                    Incluye:
                    <br />
                    <br />
                    <li> Transporte en autobús de turismo
                    </li><li>Hospedaje en hotel de 4 o 5 estrellas
                    </li><li>Alimentos
                    </li><li>Entradas a los lugares de visita
                    </li><li>Recorridos guiados
                    </li><li>Información cultural detallada
                    </li><li>1 explorador por cada 10-12 alumnos
                    </li><li>Actividades recreativas
                    </li><li>Rally cultural
                    </li><li>Seguro contra accidentes (hasta $ 20,000.00)
                    </li><li>Servicio medico
                    </li>
                </Typography>
            </BoxStyled>
            <ServicesOne />
        </main>
    )
}
