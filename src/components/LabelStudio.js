import React, { useEffect, useRef } from 'react';
import "@heartexlabs/label-studio/build/static/css/main.css"
import "@heartexlabs/label-studio/build/static/js/main.js"
import LabelStudio from '@heartexlabs/label-studio';

const LabelStudioReact = (props) => {
    const labelStudioContainerRef = useRef()
    const labelStudioRef = useRef()

    useEffect(() => {
        if (labelStudioContainerRef.current) {
            if (labelStudioRef.current) {
                labelStudioRef.current.destroy()

            }
            labelStudioRef.current = new LabelStudio(
                labelStudioContainerRef.current,
                props
            );
        }
    }, []);

    return (
        <div
            id="label-studio"
            ref={function (el) {
                labelStudioContainerRef.current = el
            }}
        />
    );
}

const LabelStudioReact2 = (props) => {
    const labelStudioContainerRef = useRef()
    const labelStudioRef = useRef()

    useEffect(() => {
        if (!labelStudioRef.current) {
            labelStudioRef.current = new LabelStudio("label-studio2", props)
        }
    }, [props]);

    return <div id="label-studio2" ref={function (el) {
        labelStudioContainerRef.current = el
    }} />
}

export { LabelStudioReact, LabelStudioReact2 }