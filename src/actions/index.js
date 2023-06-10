export const incNumber=(num)=>{
    return{
        type:"INCREMENT",
        payload:num
    }
}

export const decNumber=(num2)=>{
    return{
        type:"DECREMENT",
        payload:num2
        
    }
}