import React, { useState } from 'react';

const ComponentA = () => {
    const[books, setBooks]=useState([]);
    const[title, setTitle]=useState('');
    const[author, setAuthor]=useState('');

    function handleAddBook(){
        if (title !== '' && author !== '') {
            const newBook = { title, author };
            setBooks([...books, newBook]);
            setTitle('');
            setAuthor('');
          }
    }
    function handleDeleteBook(index){
         const updatedBooks = [...books];
         updatedBooks.splice(index, 1);
         setBooks(updatedBooks);
    }
    function handleToggleRead(index) {
        const updatedBooksRead = [...books];
        updatedBooksRead[index].read = !updatedBooksRead[index].read;
        setBooks(updatedBooksRead);
    }
  return (
    <>
    <div>
      <h1>Book Application</h1>
      <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
            type="text"
            placeholder="Author..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
    </div>
    <div>
        {books.map((item,index)=>{console.log(item)
            return(
            <div key={index} >
             <h3>{item.title}</h3>
             <p>{item.author}</p>
             <p>{item.read ? "Read" : "Unread"}</p>
        <button onClick={() => handleToggleRead(index)}>
            {item.read ? "Mark as Unread" : "Mark as Read"}
        </button>
             <button onClick={() => handleDeleteBook(index)}>Delete</button>
             </div>
            )
        })}
    </div>
    </>
  )
}

export default ComponentA






