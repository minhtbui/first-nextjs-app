import axios from 'axios';
import Rating from '@material-ui/lab/Rating';

function Book({ id, book }) {
   const star = [];
   return (
      <div className='book'>
         <h2>{book.title}</h2>
         <h3>Author: {book.author ? book.author : 'Unknown'}</h3>
         <h3>ISBN: {id}</h3>
         <h4>Publisher: {book.publisher}</h4>
         <h4>Public Year: {book.year}</h4>
         <div>
            <Rating value={book.rating} readOnly />
         </div>
         <figure>
            <img src={book.image} />
         </figure>
         <p>{book.desc}</p>
         <style jsx>{`
            .book {
               display: flex;
               flex-direction: column;
               max-width: 700px;
               align-items: center;
               padding: 0 20px;
               margin: 0 auto;
            }
            .book h2,
            h3,
            h4 {
               margin: 10px 0;
            }
         `}</style>
      </div>
   );
}
Book.getInitialProps = async ({ query }) => {
   const res = await axios.get(
      `https://api.itbook.store/1.0/books/${query.id}`,
   );
   const { data } = res;
   return { ...query, book: data };
};
export default Book;
