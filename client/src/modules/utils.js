const formatISBN = (isbn) => {
    const regex = /\D/g;
    return isbn.replace(regex, '');
}

export { formatISBN }