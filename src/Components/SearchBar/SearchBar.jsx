import React, { useState } from 'react';


const SearchBar = (props) => {
    // console.log (props)
    const [search, setSearch] = useState("")
    function SearchResult(event) {
        event.preventDefault();
        let response = props.videoGames.filter((element) => {
            if (element.name.includes(search)) {
                return true;
            }
            else if (element.platform.includes(search)) {
                return true;
            }
            else if (element.genre.includes(search)) {
                return true
            }
            else if (element.publisher.includes(search)) {
                return true
            }
        })
        props.setSearchGames(response);
        console.log(response)
        setSearch('')
        if (search === ''){
            props.getVideoGames()
        }
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


    // <div onSubmit={handleSubmit}>
    // <input type= "text" placeholder="Search here" value={searchRequest} onChange={(event) => setSearchRequest=(event.target.value)}/>
    // </div>








// export default InputTag(){
//     onChange Handler function
//     with event parameter
//     const getInputValue = (event)=>{
//         // show the user input value to console
//         const userValue = event.target.value;

//         console.log(userValue);
//     };

//     return (
//         // Add onChnage handler with function to execute
//         <input type="text" onChange={getInputValue} />
//     );
// }