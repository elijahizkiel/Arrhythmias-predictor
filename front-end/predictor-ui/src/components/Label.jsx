// import { Children } from "react";

function Label({text, classes, children}){
    return <div className={"label "+classes}>
        {text}{children}
    </div>
}

export default Label;