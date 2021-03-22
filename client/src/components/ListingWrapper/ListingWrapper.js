import { useEffect, useState } from 'react';
import StyledListingWrapper from './ListingWrapper.styled';
import Card from './../Card/Card';
import Loader from './../Loader/Loader';
import { formatISBN } from './../../modules/utils'

function ListingWrapper () {

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {   
    fetch('http://localhost:5000/books')
    .then(response => response.json())
    .then(data => {
      setBooks(data)
    })
    .finally(() => setIsLoading(false));
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