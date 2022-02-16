import React from "react";
import AppComponent from "../components/App";

export default function App({enterprises, enterprise}){
    return (
        <AppComponent enterprises={enterprises} enterprise={enterprise}/>
    );
}
