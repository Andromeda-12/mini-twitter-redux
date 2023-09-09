import React, {useState} from 'react';
import {
    Control,
    Controller,
    FieldValues,
    RegisterOptions,
} from 'react-hook-form';
import {MIN_PASSWORD_LENGTH} from '@/constants/validation';
import {FormFieldContainer} from './FormFieldContainer';
import {Input} from '../Input';
import {Progress} from '../Progress';

interface PasswordFormFieldProps {
    control: Control<any>;
    name: string;
    rules: RegisterOptions<FieldValues, string>;
    label: string;
    hasPasswordStrengthProgress?: boolean;
}

export const PasswordFormField = ({
    control,
    name,
    rules,
    label,
    hasPasswordStrengthProgress = false,
}: PasswordFormFieldProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const calculatePasswordStrength = (password: string) => {
        const lengthScore = password.length >= MIN_PASSWORD_LENGTH ? 0 : -100;

        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const digitRegex = /[0-9]/;
        // eslint-disable-next-line no-useless-escape
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-\/\\]/;
        const repeatedCharRegex = /([a-zA-Z0-9])\1{2,}/;

        const hasLowercase = lowercaseRegex.test(password);
        const hasUppercase = uppercaseRegex.test(password);
        const hasDigit = digitRegex.test(password);
        const hasSpecialChar = specialCharRegex.test(password);
        const hasRepeatedChars = repeatedCharRegex.test(password);

        const typesCount = [
            hasLowercase,
            hasUppercase,
            hasDigit,
            hasSpecialChar,
        ].filter(Boolean).length;

        const typesScore = typesCount * 25;

        const repeatedScore = hasRepeatedChars ? -100 : 0;

        return Math.max(lengthScore + typesScore + repeatedScore, 0);
    };

    const getPasswordStrengthColor = (strength: number) => {
        if (strength >= 100) { return 'bg-green'; }
        if (strength >= 75) { return 'bg-green'; }
        if (strength >= 50) { return 'bg-yellow-400'; }
        return 'bg-red';
    };

    const handlePasswordChange = (password: string) => {
        const strength = calculatePasswordStrength(password);
        setPasswordStrength(strength);
    };

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field, fieldState: {error}}) => (
                <FormFieldContainer
                    label={label}
                    name={name}
                    errorText={error?.message}
                >
                    <Input
                        {...field}
                        error={!!error}
                        type={isPasswordVisible ? 'text' : 'password'}
                        iconName={isPasswordVisible ? 'eye-slash' : 'eye'}
                        onIconClick={togglePasswordVisibility}
                        onChange={(e) => {
                            handlePasswordChange(e.target.value);
                            field.onChange(e);
                        }}
                    />

                    {hasPasswordStrengthProgress && (
                        <Progress
                            className="mt-[8px]"
                            value={passwordStrength}
                            indicatorClassName={getPasswordStrengthColor(
                                passwordStrength,
                            )}
                        />
                    )}
                </FormFieldContainer>
            )}
        />
    );
};
