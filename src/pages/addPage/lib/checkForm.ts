import {FormErrorsType, ApplicationType} from 'shared/lib/types';

export const hasErrors = (appErrors: FormErrorsType): boolean => {
    return appErrors.accidentType || appErrors.address || appErrors.name || appErrors.phone || appErrors.coordinates || appErrors.priority;
}

const checkPhone = (phone: string): boolean => {
    const phoneRegexp = /^[\+]?[0-9]{1,3}?[-\s\.]?[0-9]{1,3}?[-\s\.]?[0-9]{3,4}?[-\s\.]?[0-9]{4,6}$/im;
    return phoneRegexp.test(phone);
}

export const getErrors = (app: ApplicationType): FormErrorsType => {
    const errors: FormErrorsType = {
        address: false,
        accidentType: false,
        priority: false,
        name: false,
        phone: false,
        coordinates: false
    };
    console.log(app)

    errors.address = app.address === "";
    errors.accidentType = app.accidentType === "";
    errors.priority = app.priority === "";
    errors.name = app.name === "";
    errors.phone = !checkPhone(app.phone);
    errors.coordinates = app.coordinates[0] === 0 || app.coordinates[1] === 0;
    console.log(errors)

    return errors;
}