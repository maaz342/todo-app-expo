import { useState } from "react"
import {Text,TextInput,View,Button, Alert} from "react-native"


export default function HomeScreen() {
  const [text,Settext]=useState("");
  const [todo,SetTodo]=useState<any>([]);
  const addTodo=()=>{

    
    console.log(text);
    
   // todo.push(text);
    SetTodo([...todo,{text:text}]);
    Settext("");
    
    

  }
  const deleteTodo=(i:any)=>{
  todo.splice(i,1);
  SetTodo([...todo])
  }
  return (
    <View style={{padding:50}}>
      <Text style={{color:"green",textAlign:"center",fontSize:30}}>

     Hello Expo
     </Text>
     <TextInput value={text}
     onChange={(e:any)=>{
      Settext(e.target.value);
     }}
     style={{width:"90%",borderWidth:2,borderColor:"green"}}
     placeholder="Enter Todo"
     />
     {todo.map((todos:any,index:any)=>{
return(
  <Text key={index}>
    {todos.text}
    <Button onPress={()=>deleteTodo(index)} title="Delete" color="green">
      </Button>

  </Text>)})}


    
     <Button onPress={()=>addTodo()} title="Add" color="green">
      
     </Button>

      </View>



  )
}


