import { Form } from "./components/class/Form";
import { Form as FormFunc } from "./components/func/Form";
import { useState } from "react";
export const App = () => {
    const [toggle, setToggle] = useState(true);
    return <>
        <Form />
        <hr />
        <button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>
        {toggle && <FormFunc />}
    </>;
}