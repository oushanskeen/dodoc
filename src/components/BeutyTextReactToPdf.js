
    import React, {useState} from 'react';
    import '../css/latex.css';
    import Pdf from "react-to-pdf";

    const ref = React.createRef();

    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [8.27,11.69]
    };

    function Hello() {
        return (
            <div>
                <div>
                    <Pdf 
                        targetRef={ref} 
                        filename="code-example.pdf"
                    >
                        {({ toPdf }) => 
                            <button onClick={toPdf}>
                                Generate Pdf
                            </button>
                        }
                    </Pdf>
                </div>
                <div ref={ref} class="block" options={options} x={.5} y={.5}>
                    <h1>{"Hello, I'm print friedly page"}</h1>
                    <p>This content should be printed</p>
                </div>
                <div>
                    <p>This content should be ignored</p>
                </div>
            </div>
        );
    }

    export default Hello;
