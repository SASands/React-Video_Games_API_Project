import React, { useState } from 'react';
import './GameDetailTable.css'



const GDTable = ({searchGames}) => {
    // const [search, setSearch] = useState('')
    
   
    
        return ( 
            
            <div class ="table" className='Table'>
                <table className='table'>
                    <div className='thead'>
                     <thead >
                        <tr className='theader'>
                           <th >Game Name</th>
                           <th >Release Year</th>
                           <th >Genre</th>
                           <th >Publisher</th>
                        </tr>
                    </thead>
                    </div>
                {searchGames.map((game) => {
                    return (
                    
                   
                    <tbody className='body_layout'>
                        <tr>
                            <td>{game.name}</td>
                            <td>{game.year}</td>
                            <td>{game.genre}</td>
                            <td>{game.publisher}</td>
                        </tr>
                    </tbody>
                    
                    );
                })}
                </table>
            </div> 
              
        );
    }
     
    export default GDTable;