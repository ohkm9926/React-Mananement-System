
import React,{Component} from 'react';
import Customer from './components/Customer';
import './App.css';
import  {Table}  from '@material-ui/core';
import {TableBody} from '@material-ui/core';
import {TableHead} from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import {TableCell} from '@material-ui/core';


const customers =[
  {
  'id'   : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '오경민',
  'birthday' : '961222',
  'gender' :  '남자',
  'job' : '개발자'
},
{
  'id'   : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '오세민',
  'birthday' : '950618',
  'gender' :  '남자',
  'job' : '대학생'
},
{
  'id'   : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '오질섭',
  'birthday' : '720415',
  'gender' :  '남자',
  'job' : '소매업자'
}]

function App () {
  
  return (
 
   <div>
     <table>
     <TableBody>
    {
   customers.map( c=> {
    return(
      <Customer 
      key={c.id}
      id={c.id}
      image={c.image}
      name={c.name}
      birthday={c.birthday}
      gender={c.gender}
      job={c.job}
      />
    )
   })
  }
  </TableBody>
  </table>
   </div>
  
    
  );

}

export default App;
