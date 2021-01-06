import { useState } from 'react'

export const useForm = (initialState) => {
    const [inputValues, setInputValues] = useState(initialState);

    return [
        inputValues, (event) => {
            const target = event.target
            const value = target.type === 'checkbox' ? target.checked : target.value
            const name = target.name
            setInputValues({
                // ...inputValues,
                [name]: value
            })
        }
    ]
}