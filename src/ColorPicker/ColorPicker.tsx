import './ColorPicker.scss'
import { FC } from 'react';
import { Palette } from './Palette';

export const ColorPicker: FC = () => {
    return (
        <div className="color-picker">
            <Palette />
        </div>
    );
};