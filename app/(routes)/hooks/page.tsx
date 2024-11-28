"use client"

import { useForm } from "@/app/assets/hooks/useForm";

export default function Hooks() {
    const [ formVal, setFormVal ] = useForm({email: "", password: ""})
    
    return <div>
        <input name="email" onChange={setFormVal} />
        <input name="password" type="password" onChange={setFormVal} />
    </div>
}