/**
 * This file will be a centralised place for storing
 * all variables that will be used throughout the
 * Alert component.
 * 
 * @author Rushabh Mulraj Shah
 * @since 0.0.42
 */

/* Variable imports */
import * as STATES from './states';

export const ICON_NAMES = {
    [STATES.ERROR]: 'error_colored',
    [STATES.INFO]: 'info',
    [STATES.SUCCESS]: 'success_colored',
    [STATES.WARN]: 'warning_colored'
};

export const ICON_COLORS = {
    [STATES.ERROR]: '#F50031',
    [STATES.INFO]: '#3535F3',
    [STATES.SUCCESS]: '#219653',
    [STATES.WARN]: '#F06D0F'
};
