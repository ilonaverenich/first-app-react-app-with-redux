//action - объект, у которого есть два свойства type,payload 

import {SET_TEXT} from '../actions/actionTypes'
const initialValue = '' //начальное значение для стейта

 export default function textReducer (state = initialValue, action){

   switch(action.type){
         case SET_TEXT:{
            return action.payload;
         }
         default:{
            return state;
         }
   }
}