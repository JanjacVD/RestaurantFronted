import React from 'react';
export default function Loading() {
    return (
        <div className="backdrop">
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
