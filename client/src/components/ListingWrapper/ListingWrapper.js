import { useEffect, useState, useContext } from 'react';
import { Context } from './../../store/store'
import StyledListingWrapper from './ListingWrapper.styled';
import Card from './../Card/Card';
import Loader from './../Loader/Loader';
import { formatISBN } from './../../modules/utils'

function ListingWrapper () {
  const [state, dispatch] = useContext(Context);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {   
    fetch('http://localhost:5000/books')
    .then(response => response.json())
    .then(data => {
      setBooks(data)
    })
    .then(() => {
      dispatch({type: 'SET_FETCHING_BOOKS', payload: false})
    })
    .finally(() => {
        setIsLoading(false)
      }
    );
   }, []);

    return (
      <StyledListingWrapper className="styledListingWrapper">
       {isLoading ? 
       <Loader/> : 
       books.map(book => 
        <Card 
          key={`${book["Book Id"]}`} 
          title={`${book["Title"]}`}
          author={`${book["Author"]}`}
          shelf={`${book["Exclusive Shelf"]}`}
          isbn={`${formatISBN(book["ISBN"])}`}
        ></Card>
      )}
      </StyledListingWrapper>
    );
}

export default ListingWrapper;