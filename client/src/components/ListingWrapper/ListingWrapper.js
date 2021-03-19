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
        <Card key={`${book["Book Id"]}`}>{book["Title"]}</Card>
      )}
      </StyledListingWrapper>
    );
}

export default ListingWrapper;