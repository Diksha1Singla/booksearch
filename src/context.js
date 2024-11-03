import React , { useCallback, useEffect, useState } from "react";

const url = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {

    
    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user,setUser] = useState("")

    const storetoken=(token)=>{
        setToken(token)
        return localStorage.setItem("token",token)
    }

    let isLoggedIn = !!token;

    const LogoutUser = ()=>{
        setToken("")
        return localStorage.removeItem("token")
    }




    const [searchBook,setSearchBook] = useState("");
    const [books,setBooks] = useState([]);
    const [Loading,setLoading] = useState(true);
    const [resultTitle,setResultTitle] = useState("");

    const fetchBooks =  useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchBook}`)
            const data = await response.json()
            const {docs} = data;
            // console.log("docs = ",docs);

            if(docs){
                const bookdata = docs.slice(0,20).map((book) => {
                    // console.log("book.author_name = ",book.author_name)
                    // console.log("book= ",book)
                    // console.log("key",book.key)
                    // console.log("author_name",book.author_name)
                    // console.log("cover_i",book.cover_i)
                    // console.log("title",book.title)
                    // console.log("first_publish_year",book.first_publish_year)
                    // console.log("edition_count",book.edition_count)
                    return {
                        id: book.key,
                        author: book.author_name,
                        cover_id:book.cover_i,
                        title: book.title,
                        first_publish_year: book.first_publish_year,
                        edition_count: book.edition_count
                    }
                })

                setBooks(bookdata)

                if(bookdata.length>1){
                    setResultTitle((searchBook))
                }
                else{
                    setResultTitle("Book Not Found")
                }

            }
            else{
                setBooks([])
                setResultTitle("Book Not Found")
            }
            setLoading(false)
        } catch (error) {
            // console.log("error: ",error);
            setLoading(false);
        }
    },[searchBook])

    useEffect(()=>{
        fetchBooks();
    },[searchBook,fetchBooks])

    return(
        <AppContext.Provider value={{setLoading,searchBook,setSearchBook,books,setBooks,Loading,fetch,resultTitle,setResultTitle,user,setUser,storetoken,isLoggedIn,LogoutUser}}>
        {/* // <AppContext.Provider value={{fetch,user,setUser,storetoken,isLoggedIn,LogoutUser}}> */}
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => React.useContext(AppContext);

export {AppContext,AppProvider}