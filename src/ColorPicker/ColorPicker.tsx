import './ColorPicker.scss';
import { FC, useState } from 'react';
import _ from 'lodash';
import cv from 'color-convert';
import { HSL } from './HSL';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';


export const ColorPicker: FC = () => {
    const [rgb, setRgb] = useState<[number, number, number]>([255, 0, 0]);
    const rgbStr = `#${cv.rgb.hex(rgb)}`;
    
    return (
        <div className="color-picker">
            <div className="columns is-mobile">
                <div className="column is-3">
                    <div className="preview" style={{backgroundColor: rgbStr}}>
                    <p>{rgbStr}</p>
                    <div className="copy is-clickable">
                    <FontAwesomeIcon icon ={faCopy} />
                    </div>
                </div>
                </div>
            <div className="column">
            <HSL onSelect={(h: number, s: number, l: number) => setRgb(cv.hsl.rgb([h, s, l]))} />
        </div>
    </div>
</div>
    );
};