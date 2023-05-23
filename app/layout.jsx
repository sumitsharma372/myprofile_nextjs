import Navbar from '@components/Navbar'
import React from 'react'
import '@styles/global.css'
import Provider from '@components/Provider'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body className='bg-primary no-scrollbar'>
          <Provider>
            <main className='w-full h-screen bg-primary'>
                <Navbar/>
                {children}
            </main>
          </Provider>
        </body>
    </html>
  )
}

export default RootLayout