import React from 'react';
export default function Alergen({
    title,
    index,
    count,
}: {
    title: any;
    count: number;
    index: number;
}) {
    return (
        <p>
            {title}
            {index + 1 >= count ? '' : ','}
        </p>
    );
}
