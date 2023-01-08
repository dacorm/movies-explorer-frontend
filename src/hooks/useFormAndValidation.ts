import { ChangeEvent, useCallback, useState } from 'react';

type initialObject = Record<string, string>

export function useFormAndValidation(initValues: initialObject) {
    const [values, setValues] = useState<initialObject>(initValues);
    const [errors, setErrors] = useState<initialObject>({});
    const [isValid, setIsValid] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: e.target.validationMessage });
        setIsValid(e.target!.closest('form')!.checkValidity());
    };

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
    }, [setValues, setErrors, setIsValid]);

    return {
        values, handleChange, errors, isValid, resetForm, setValues, setIsValid,
    };
}
