/* import { Form } from "./components/class/Form";
import { Form as FormFunc } from "./components/func/Form"; */
import { Message } from "./components/message/Message";
/* import { useState } from "react";*/
export const App = () => {
    /* const [toggle, setToggle] = useState(true); */
    return <>
        <Message text="Hello" />
        {/* <Form />
        <hr />
        <button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>
        {toggle && <FormFunc />} */}
    </>;
}