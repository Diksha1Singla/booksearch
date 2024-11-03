import React from 'react'
import {useAppContext} from "../../context"
import Loading from "../Loader/Loader"
import coverImg from "../../images/cover_not_found.jpg" 
import Book from  "../BookList/Book"

import "./BookList.css"

// https://covers.openlibrary.org/b/id/240727-S.jpg


const BookList = () =>{

    const  {books, resultTitle , isLoggedIn} = useAppContext()
    const booksWithCover = books.map((bookcover)=>{
        return {
            // loading=true,
            ...bookcover,
            id : (bookcover.id).replace("/works/",""),
            cover_img : bookcover.cover_id ? `https://covers.openlibrary.org/b/id/${bookcover.cover_id}-L.jpg`:coverImg
        }
    })
    console.log(booksWithCover)
    console.log(resultTitle)
    if(!booksWithCover.length) {
        if(resultTitle === "Enter Something"){
            <h2>Enter Something</h2>
        }
        else{
            return <Loading/>
        }
    }

    return(
        <div>
            {
                isLoggedIn?
                    <section className='booklist'>
                        <div className="container">
                            <div className="section-title">
                                    <h2>{resultTitle}</h2>
                            </div>
                            <div className="booklist-content grid">
                                {booksWithCover.slice(0,30).map((book, index) => {
                                    return(
                                        <Book key={index} {...book} />
                                    )
                                }
                            )}
                            </div>
                        </div>
                    </section>
                :
                <h1> <a href="/login">Login </a>First</h1>
            }
            
        </div> 
    )
}

export default BookList