import { Box, Button, CircularProgress, TextField } from "@mui/material"
import { Suspense, useEffect, useLayoutEffect, useState } from "react"

const Home = () => {
    const [data, SetData] = useState("テスト")
    return (
        <>
            <Button variant="contained" onClick={()=>{
                SetData("")
                asyncTime().then((value) => {
                    SetData(value)
                })
            }}>読み込みテストボタン</Button>
            <Box >
            {data === "" ? <CircularProgress /> : <p>{data}</p>}
            </Box>
        </>
    );
}

const fetchTime = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(new Date().toString());
      }, 1000);
    });
    return promise
};

async function asyncTime() {
    try{
        return await fetchTime()
    }catch(error){
        console.log("Error", error)
    }
}


export default Home