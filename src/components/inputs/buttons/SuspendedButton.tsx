'use client'
import { Box } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SuspendeButtons = () => {
    const pathName = usePathname()

    return (
        <>
            <Box
                sx={{
                    '& img': {
                        position: 'fixed',
                        bottom: !pathName.includes('Queretaro') ? '110px' : '20px',
                        right: '20px',
                        width: '70px',
                        height: '70px',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        zIndex: 1000
                    }
                }}
            >
                <a href="https://api.whatsapp.com/send/?phone=5538060138&text=Buenas tardes, estoy interesado&type=phone_number&app_absent=0" target='_blank'>
                    <img src='https://img.icons8.com/?size=100&id=16713&format=png&color=000000' alt='whats-icon' />
                </a>
            </Box>
            {!pathName.includes('Queretaro') && <Box
                sx={{
                    '& img': {
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        width: '250px',
                        height: '70px',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '15px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        zIndex: 1000
                    }
                }}
            >
                <Link href={'/Queretaro'}>
                    <img src='/imgs/logos/img_2.jpg' alt='whats-icon' className='btn-queretaro' />
                </Link>
            </Box>}
            </>
    )
}

export { SuspendeButtons }
