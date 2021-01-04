import styles from '../styles/Home.module.css';
import Link from 'next/link';
import axios from 'axios';
import SearchInput from '../components/SearchInput';
import { useEffect, useState } from 'react';

function Books({ newBooks }) {
   const [input, setInput] = useState('');
   const [books, setBooks] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         await axios
            .get(`https://api.itbook.store/1.0/search/${input}`)
            .then((req) => {
               setBooks({ books: req.data.books, total: req.data.total });
            });
      };
      fetchData();
   }, [input]);

   const onInputChange = (e) => {
      e.preventDefault();
      setInput(e.target.value.toLowerCase());
   };

   return (
      <div className={styles.container}>
         <main className={styles.main}>
            <h1 className={styles.title}>Library</h1>
            <SearchInput
               placeholder='Search by Author, Book Title, ISBN'
               onChange={onInputChange}
               value={input}
               books={books.books}
               total={books.total}
            />
            <div className='new-books'>
               <h3>New Books</h3>
               <ul className='books'>
                  {newBooks.map((book, i) =>
                     i < 3 ? (
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
                     ) : null,
                  )}
               </ul>
            </div>
         </main>
         <style jsx>{`
            .new-books h3 {
               width: 100%;
               text-align: center;
            }
            .books {
               display: flex;
               flex-wrap: wrap;
               max-width: 1200px;
               margin: 0 auto;
               padding: 20px 0 0;
            }
            .books li {
               width: calc(100% / 3.2);
               border: 0.2px solid #999;
               border-radius: 20px;
               text-align: center;
               margin: 10px auto;
            }
         `}</style>
      </div>
   );
}

export const getStaticProps = async () => {
   const res = await axios.get('https://api.itbook.store/1.0/new');
   const { books } = res.data;

   return {
      props: {
         newBooks: books,
      },
   };
};

export default Books;
