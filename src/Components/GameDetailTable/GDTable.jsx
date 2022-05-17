import React, { useState } from 'react';




const GDTable = ({searchGames}) => {
    // const [search, setSearch] = useState('')
    
   
    
        return ( 
            
            
                <table className='table'>
                     <thead className='thead-dark'>
                        <tr className='game_fields'>
                           <th scope="col">Game Name</th>
                           <th scope="col">Release Year</th>
                           <th scope="col">Genre</th>
                           <th scope="col">Publisher</th>
                        </tr>
                    </thead>
                {searchGames.map((game) => {
                    return (
                    <div>
                   
                    <tbody scope="row"className='body_layout'>
                        <tr>
                            <td>{game.name}</td>
                            <td>{game.year}</td>
                            <td>{game.genre}</td>
                            <td>{game.publisher}</td>
                        </tr>
                    </tbody>
                    </div>
                    );
                })}
                </table>
              
        );
    }
     
    export default GDTable;