import styles from '../styles/Home.module.css';
import Link from 'next/link';
import axios from 'axios';

function Books({ books }) {
   return (
      <div className={styles.container}>
         <main className={styles.main}>
            <h1 className={styles.title}>Library</h1>
            <ul className='books'>
               {books.map((book) => (
                  <li key={book.isbn13} className='book'>
                     <Link
                        href={`/book?id=${book.isbn13}`}
                        as={`/book/${book.isbn13}`}>
                        <a>
                           <h3>{book.title}</h3>
                           <figure>
                              <img src={book.image} alt='cover' />
                           </figure>
                        </a>
                     </Link>
                  </li>
               ))}
            </ul>
         </main>
         <style jsx>{`
            .books {
               display: flex;
               flex-wrap: wrap;
               max-width: 1200px;
               margin: 0 auto;
               padding: 20px 0 0;
            }
            .books li {
               width: calc(100% / 3.2);
               border: 0.2px solid #2f2f2f;
               border-radius: 20px;
               text-align: center;
               margin: 10px auto;
            }

            .books li figure img {
               width: 60%;
            }
         `}</style>
      </div>
   );
}

Books.getInitialProps = async () => {
   const res = await axios.get('https://api.itbook.store/1.0/new');
   const { books } = res.data;
   return { books };
};

export default Books;
