import { useState } from "react";

export const useForm = ( initialFormValues: any ) => {
    const [ formValues , setFormValues ] = useState(initialFormValues);

    return [ formValues, (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }]
}