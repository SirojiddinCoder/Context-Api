import React,{useState, createContext} from "react";

export const Kino = createContext();


export const KinoProvider =({Children})=>{
    const [data,setData] = useState([

        {id:1,name:'Harry potter',price:'100$'},
        {id:2,name:'Borilar',price:'200$'},
        {id:3,name:'Mr Been',price:'400$'},
        {id:4,name:'Mr Been1',price:'700$'},



   ])

    return(

        <Kino.Provider value={[data,setData]}>
       
         {Children}
        </Kino.Provider>
    )

}

