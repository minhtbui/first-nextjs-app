import SearchRounded from '@material-ui/icons/SearchRounded';

function SearchInput({ value, ...rest }) {
   return (
      <div className='searchInput'>
         <input {...rest} />
         <SearchRounded />
         <style jxs>{`
         .searchInput{
             display:flex;
             align-items:center;
             justify-content:space-between;
             width:250px;
             border: 1px solid #999;
             border-radius:20px;
             padding: 5px 20px;
             margin:20px 0;
             color: #999;
         }
         .searchInput input{
             outline:none;
             border:none;
             flex:1;
         }
         `}</style>
      </div>
   );
}

export default SearchInput;
