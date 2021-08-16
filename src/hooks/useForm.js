// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues) => {
    //representing state as AN OBJECT - ref guided project for format if needed
    const [values, setValues] = useState('formValues', initialValues);
    
    const handleChanges = e => {
        console.log("User typed an input:", e.target.name);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues("");
    };

    return [values, handleChanges, handleSubmit];
}



export default useForm;