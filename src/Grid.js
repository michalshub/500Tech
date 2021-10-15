import React from 'react';

const borderStyle={border:"1px solid black"}

const Grid = ({ config, data }) => (
  <table style={{textAlign:"center"}}>
    <thead>
 <tr >
     <th style={borderStyle}>Title</th>
 <th style={borderStyle}>Year</th>
 <th style={borderStyle}> Rated</th>
 <th style={borderStyle}> Released</th>
 <th style={borderStyle}> Runtime</th>
 <th style={borderStyle}> Genre</th>
 <th style={borderStyle}> Director</th>
 <th style={borderStyle}> Writer</th>
 <th style={borderStyle}> Actors</th>
 <th style={borderStyle}> Plot</th>
 <th style={borderStyle}> Poster</th>
 <th style={borderStyle}> imdbRating</th>
 <th style={borderStyle}> imdbVotes</th>
 <th style={borderStyle}> imdbID</th>
 <th style={borderStyle}> Type</th>
 <th style={borderStyle}> Response</th>
 <th style={borderStyle}> Trailer</th>
</tr>  
    </thead>
    <tbody>
        {data.map((item,index)=>(
 <tr key={index} >
      <td style={borderStyle}>{item.Title}</td>
      <td style={borderStyle}>{item.Year}</td>
      <td style={borderStyle}> {item.Rated}</td>
      <td style={borderStyle}>{item.Released}</td>
      <td style={borderStyle}> {item.Runtime}</td>
      <td style={borderStyle}> {item.Genre}</td>
      <td style={borderStyle}> {item.Director}</td>
      <td style={borderStyle}> {item.Writer}</td>
      <td style={borderStyle}> {item.Actors}</td>
      <td style={borderStyle}> {item.Plot}</td>
      <td style={borderStyle}> {item.Poster}</td>
      <td style={borderStyle}> {item.imdbRating}</td>
      <td style={borderStyle}> {item.imdbVotes}</td>
      <td style={borderStyle}> {item.imdbID}</td>
      <td style={borderStyle}>{item.Type}</td>
      <td style={borderStyle}> {item.Response}</td>
     <td style={borderStyle}>{item.Trailer.url}</td>

</tr>
        ))}
    </tbody>
  </table>
);

export default Grid;