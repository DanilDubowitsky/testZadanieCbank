import Table from "./components/table";
import React from "react";
import main from './components/main.module.css'


function App() {
    return (
        <div className={main.container}>
            <div>
                <Table/>
            </div>
        </div>
    );
}

export default App;
