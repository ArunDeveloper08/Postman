
import { Box } from "@mui/material";
import Form from "./Form";
import Header from "./Header";
import SelectTab from "./SelectTab";
import Response from "./Response";
import ErrorScreen from "./ErrorScreen";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
import { checkParams } from "./utils/common-utils";
import SnackBar from "./SnackBar";
import { getData  } from "./service/api";

const Home = () => {
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const[apiResponse , setapiResponse]= useState({});
    const [errorResponse , setErrorResponse] = useState(false)
    const { formData, paramData, headerData, jsonText } = useContext(DataContext);


    const onSendClick = async() => {
        if (!checkParams(formData, paramData, headerData, jsonText, setErrorMsg)) {
            setError(true);
            return false;
        }
         let response =   await  getData(formData , paramData , headerData ,jsonText);

      if(!response){
        setErrorResponse(true)
      }
    else{
        setErrorResponse(false)
        setapiResponse(response?.data)
    }
    }
    return (
        <>
            <Header />
            <Box style={{ width: "60%", margin: "20px auto 0 auto" }}>

                <Form onSendClick={onSendClick} />
                <SelectTab />
              
                

                { 
                  errorResponse ?<ErrorScreen /> :    <Response data={apiResponse}/>
                }
                { 
                error &&  <SnackBar error={error} setError={setError} errorMsg={errorMsg}/>
                }
            </Box>

        </>
    )
}
export default Home;