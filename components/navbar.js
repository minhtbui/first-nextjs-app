import Link from 'next/link';

const Navbar = () => {
   return (
      <nav>
         <style jsx>{`
            nav {
               display: flex;
               justify-content: space-between;
               align-items: center;
               padding: 0 10px;
            }
            nav h1 {
               cursor: pointer;
            }
            .navbar {
               display: flex;
            }
            .navbar li {
               font-size: 1rem;
               margin-left: 50px;
            }
         `}</style>
         <Link href='/'>
            <h1 className='logo'>Welcome to ...! Just a logo 🤷</h1>
         </Link>

         <ul className='navbar'>
            <li>
               <Link href='/'>
                  <a>Home</a>
               </Link>
            </li>
            <li>
               <Link href='/about'>
                  <a>About</a>
               </Link>
            </li>
            <li>
               <Link href='/gg-books'>
                  <a>Library</a>
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
