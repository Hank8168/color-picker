import './ColorPicker.scss'
import { FC } from 'react';
import _ from 'lodash';
import { H } from './H';
import { S } from './S';
import { L } from './L';

export const ColorPicker: FC = () => {
    return (
        <div className="color-picker">
            <L hue={200} />
        </div>
    );
};