import  { FC, useState } from 'react';

interface Props {
    initVal?: number;
    colors: string[];
}

export const Palette: FC<Props> = ({ initVal, colors}) => {
    const [val, setVal] = useState<number>(initVal ?? 0);
    return (
        <div className="palette">
            {colors.map((c, i) =>
                <div style={{ backgroundColor: c }} 
                className="cell is-clickable"
                onClick={() => setVal(i)}
                onMouseEnter={e => (e.buttons & 1) && setVal(i)}
                key={c}>
                    <span className="val" hidden={i !== val}>{i}</span>
                    </div>
            )}
            </div>
    );
};