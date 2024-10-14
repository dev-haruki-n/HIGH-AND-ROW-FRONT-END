import React from "react";
import "./PillButton.css"

type props = {
    label?: string;
    color?: string;
    onClick?: () => void
}

function PillButton(props: props) {
    const { label, onClick, color = 'bg-blue-500' } = props;
    return (
        <button
            className="pill-button"
            style={{ background:color }}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default PillButton;