import axios from 'axios';

function Book({ id, book }) {
   return (
      <div className='book'>
         <h2>{book.title}</h2>
         <h3>ISBN: {id}</h3>
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
