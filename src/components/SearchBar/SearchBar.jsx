import React, { useEffect, useRef } from 'react'
import {FaSearch} from  'react-icons/fa'
import {useAppContext} from "../../context"
import {useNavigate} from "react-router-dom"
import "./SearchBar.css"

const SearchBar = () =>{

    const {isLoggedIn} = useAppContext()
    const {setSearchBook, setResultTitle} = useAppContext();
    const navigate = useNavigate();
    const searchText = useRef("")
    useEffect(()=> searchText.current.focus(),[]);
    const handleSubmit = (e) => {
        // e.preventDefault();
        let tempSearchBook = searchText.current.value.trim()
        if((tempSearchBook.replace(/[^\w\s]/gi,"")).length === 0){
            setSearchBook("");
            setResultTitle("Enter Something");
        }
        else{
            setSearchBook(searchText.current.value);
        }
        navigate("/book")
    }

    return(
        <>
            <div className='search-form' >
                <div className="container">
                    <div className="search-form-content">
                        <form action="" className="search-form" onSubmit={handleSubmit}>
                            <div className="search-form-elem flex flex-sb">
                                <input type="text" className='form-control' placeholder='The Lost world...' ref={searchText}/>
                                <button type='submit' className='flex flex-c' onClick={handleSubmit}>
                                    <FaSearch className="text-purple" size={30}></FaSearch>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar