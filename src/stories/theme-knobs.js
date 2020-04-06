import { select } from '@storybook/addon-knobs';
 

export const makeThemeSelect = (label='Theme',group='Theme-Group',defaultValue='theme-blue-light')=>{
const options = {
 BlueLight:'theme-blue-light',
 PinkLight :'theme-pink-light',
 None : null
};
 
    return select(label, options, defaultValue, group);
}