import Head from 'next/head';

const Header = () => {
   return (
      <Head>
         <title>First Next App</title>
         <link rel='icon' href='/favicon.ico' />
         <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
         />
      </Head>
   );
};

export default Header;
