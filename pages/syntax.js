import React, {useEffect, useState} from "react";

const Syntax = () => {
    const [checkBoxValue, setCheckBoxValue] = useState(false);
    useEffect(() => {
        console.log("In Effect");
        return ()=> {
            console.log("In useEffect Cleanup");
        }
    }, [checkBoxValue]);

    return ( 
        <div>

        </div>
     );
};
 
export default Syntax;