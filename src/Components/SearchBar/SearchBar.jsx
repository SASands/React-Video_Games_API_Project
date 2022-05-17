import React, { useState } from 'react';


const SearchBar = (props) => {
    // console.log (props)
    const [search, setSearch] = useState("")
    function SearchResult(event) {
        event.preventDefault();
        let response = props.videoGames.filter((element) => {
            if (element.name.toLowerCase().includes(search)) {
                return true;
            }
            else if (element.platform.toLowerCase().includes(search)) {
                return true;
            }
            else if (element.genre.toLowerCase().includes(search)) {
                return true
            }
            else if (element.publisher.toLowerCase().includes(search)) {
                return true
            }
        })
        props.setSearchGames(response);
        console.log(response)
        setSearch('')
        
        if (search === ''){
            props.getVideoGames()
        }
        return true;
        
       
        }
    return (   <form onSubmit={SearchResult}>
        <div>
        <input type= "text" 
        placeholder="Search here..." 
        value={search} onChange={(event) => setSearch(event.target.value)}/>
        <button type= "submit">Search</button></div>
        </form> 
)}
    
 
   
export default SearchBar;
