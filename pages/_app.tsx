import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layouts/NavbarLayouts/Layout'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout>
      <div className={`bg-[#030014] overflow-scroll overflow-x-hidden`}>
        <Component {...pageProps} />
      </div>
    </Layout>
    </>
  )
}
