import React, {useState} from "react";

const initialFormValues = {
    name: '',
    email: '',
    role: '',
}

function Form (props) {
    const {teamList,setTeamList} = props
    const [formValue, setFormValue] = useState(initialFormValues)

    const onChange = (evt) => {
        const {name, value} = evt.target
        setFormValue ({...formValue, [name]: value})

    }

    const submitForm = (evt) => {
        evt.preventDefault()
        const newTeam = {
            name: formValue.name.trim(),
            email: formValue.email.trim(),
            role: formValue.role,
        }
        setTeamList([ ...teamList, newTeam])

        setFormValue(initialFormValues)
    }


    return (
        <div className="input">
            <form onSubmit={submitForm}>
                <label> Name <input
                      name="name" 
                      value={formValue.name} 
                      type="text"
                      placeholder="enter name"
                      onChange={onChange}/>
                     </label>

               <label> E-mail <input 
                    name="email"
                    value={formValue.email} 
                    type="email"
                    placeholder="enter e-mail"
                    onChange={onChange}/>
                 </label>
               
               <label> Role <select name="role" value={formValue.role} onChange={onChange}>
                <option value=""> --- choose a role ---</option>
                <option value="Frontend engineer">frontend engineer</option>
                <option value="Backend engineer">backend engineer</option>
                <option value="Software engineer">software engineer</option>
               </select>
               </label>
               
               <button disabled={!formValue.name || !formValue.email || !formValue.role}>Submit</button>
            </form>
        </div>
    )
}
export default Form