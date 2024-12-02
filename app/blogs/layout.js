import React from "react";

export default function layout({ children, details }) {
    return (
        <div>
            {details}
            {children}
        </div>
    );
}
