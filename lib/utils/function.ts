import { ComponentName, ComponentStyle } from '../types';

export function getDynamicStyle(
    component: ComponentName,
    style: ComponentStyle,
    value: string | number
) {
    switch (component) {
        case 'row':
            switch (style) {
                case 'gutter':
                    switch (value) {
                        case 1:
                            return 'gap-1';
                        case 2:
                            return 'gap-2';
                        case 3:
                            return 'gap-3';
                        case 4:
                            return 'gap-4';
                        case 5:
                            return 'gap-5';
                        case 6:
                            return 'gap-6';
                        case 7:
                            return 'gap-7';
                        case 8:
                            return 'gap-8';
                        case 9:
                            return 'gap-9';
                        case 10:
                            return 'gap-10';
                        case 11:
                            return 'gap-11';
                        case 12:
                            return 'gap-12';
                        default:
                            return '';
                    }
                case 'justify':
                    switch (value) {
                        case 'start':
                            return 'justify-start';
                        case 'end':
                            return 'justify-end';
                        case 'center':
                            return 'justify-center';
                        case 'between':
                            return 'justify-between';
                        case 'around':
                            return 'justify-around';
                        default:
                            return '';
                    }
                case 'align':
                    switch (value) {
                        case 'start':
                            return 'items-start';
                        case 'end':
                            return 'items-end';
                        case 'center':
                            return 'items-center';
                        case 'stretch':
                            return 'items-stretch';
                        case 'baseline':
                            return 'items-baseline';
                        default:
                            return '';
                    }
                case 'cols':
                    switch (value) {
                        case 1:
                            return 'grid-cols-1';
                        case 2:
                            return 'grid-cols-2';
                        case 3:
                            return 'grid-cols-3';
                        case 4:
                            return 'grid-cols-4';
                        case 5:
                            return 'grid-cols-5';
                        case 6:
                            return 'grid-cols-6';
                        case 7:
                            return 'grid-cols-7';
                        case 8:
                            return 'grid-cols-8';
                        case 9:
                            return 'grid-cols-9';
                        case 10:
                            return 'grid-cols-10';
                        case 11:
                            return 'grid-cols-11';
                        case 12:
                            return 'grid-cols-12';
                        default:
                            return '';
                    }
                default:
                    return '';
            }
        case 'col':
            switch (style) {
                case 'span':
                    switch (value) {
                        case 1:
                            return 'col-span-1';
                        case 2:
                            return 'col-span-2';
                        case 3:
                            return 'col-span-3';
                        case 4:
                            return 'col-span-4';
                        case 5:
                            return 'col-span-5';
                        case 6:
                            return 'col-span-6';
                        case 7:
                            return 'col-span-7';
                        case 8:
                            return 'col-span-8';
                        case 9:
                            return 'col-span-9';
                        case 10:
                            return 'col-span-10';
                        case 11:
                            return 'col-span-11';
                        case 12:
                            return 'col-span-12';
                        default:
                            return '';
                    }
                case 'offset':
                    switch (value) {
                        case 1:
                            return 'col-start-2';
                        case 2:
                            return 'col-start-3';
                        case 3:
                            return 'col-start-4';
                        default:
                            return '';
                    }
                default:
                    return '';
            }
        case 'table':
            // Добавьте здесь логику для 'table', если необходимо
            return '';
        default:
            return '';
    }
}
