import React from 'react';

export const handleResponse = (response) => {
    return response.json().then(data => {
        if(response.ok) {
            return data
        }else {
            return Promise.reject(data)
        }
    })
};


export const renderChangePercent = changePercent => {
    if(changePercent > 0) {
        return (
            <span className="percent-raised">
                {changePercent}% &uarr;
            </span>
        )
    } else if (changePercent < 0) {
        return (
            <span className="percent-fallen">
                {changePercent}% &darr;
            </span>
        )
    } else {
        return (
            <span className="percent-fallen">
                {changePercent};
            </span>
        )
    }
}