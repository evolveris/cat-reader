import { useEffect, useState } from 'react';
import StyledListingWrapper from './ListingWrapper.styled';
import Card from './../Card/Card'

function ListingWrapper () {

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {   
    fetch('http://localhost:5000')
    .then(response => response.json())
    .then(data => {
      setBooks(data)
    })
    .finally(() => setIsLoading(false));
   }, []);

    return (
      <StyledListingWrapper>
       {books.map(book => 
        <Card 
          key={`${book["Book Id"]}`} 
          title={`${book["Title"]}`}
          author={`${book["Author"]}`}
          shelf={`${book["Exclusive Shelf"]}`}
        ></Card>
      )}
      </StyledListingWrapper>
    );
}

export default ListingWrapper;