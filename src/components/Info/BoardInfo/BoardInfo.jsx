import React from 'react';

function BoardInfo({info}) {
    return (
        <div>
            {info.map((result, index) => (
                <div >
                    <div>{result.id}</div>
                    <div>{result.title}</div>
                    <div>{result.view_count}</div>
                    <div>{result.write_date}</div>
                </div>
            ))}
        </div>
    );
}

export default BoardInfo;