import SearchRounded from '@material-ui/icons/SearchRounded';
import Link from 'next/link';

function SearchInput({ books, total, value, ...rest }) {
   return (
      <div className='searchBoard'>
         <div className='searchInput'>
            <input {...rest} />
            <SearchRounded />
         </div>
         {value.length > 0 && books ? (
            <div className='searchData'>
               {books.map((b) => (
                  <Link
                     href={`/book?id=${b.isbn13}`}
                     as={`/book/${b.isbn13}`}
                     key={b.isbn13}>
                     <a className='row'>
                        <figure>
                           <img src={b.image} alt='' />
                        </figure>
                        <div className='content'>
                           <h4>{b.title}</h4>
                           <h5>ISBN: {b.isbn13}</h5>
                           <span>Price: {b.price}</span>
                        </div>
                     </a>
                  </Link>
               ))}
            </div>
         ) : null}
         <style jxs>{`
         .searchBoard{
             position:relative;
             width:100%;
         }
         .searchInput{
             display:flex;
             align-items:center;
             justify-content:space-between;
             width:250px;
             border: 1px solid #999;
             border-radius:20px;
             padding: 5px 20px;
             margin:20px auto;
             color: #999;
         }
         .searchInput input{
             outline:none;
             border:none;
             flex:1;
         }
         .searchData{
             position:absolute;
             width:70%;
             height:50vh;
             overflow-y:auto;
             background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
             padding:10px;
             border-radius: 5px;
             margin:0 auto;
             left:0;
             right:0;
         }
        
         .searchData::-webkit-scrollbar{
             display:none;
         }
         .searchData .row{
             display:flex;
             border-top:1px solid #f5f7fa;
             transition: all 0.2s ease-in-out;
         }
         .searchData .row:hover{
             opacity:0.7;
             transition: all 0.2s ease-in-out;
             box-shadow: 0 0 20px rgba(33, 33, 33, 0.2);
         }
         .searchData .row figure{
             max-width:100px;
         }
         .searchData .row figure img{
             width:100%;
         }
         .searchData .row h4, .searchData .row h5{
             font-size:14px;
             margin:5px 0;
         }
         `}</style>
      </div>
   );
}

export default SearchInput;
