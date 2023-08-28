import React from 'react';

const Cell = ({cell}) => {
    return (
        <div className={"flex flex-col justify-center "}>
            {cell.number !== 0 ?
                <div className={"flex flex-col items-center h-full bg-slate-200"}>
                    {cell.text}
                </div> :
                null
            }
        </div>
    );
};

export default Cell;
