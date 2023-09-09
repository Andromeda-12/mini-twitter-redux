import React from 'react';
import {
    Control,
    Controller,
    FieldValues,
    RegisterOptions,
} from 'react-hook-form';
import {FormFieldContainer} from './FormFieldContainer';
import {Input} from '../Input';

interface CleanableFormFieldProps {
    control: Control<any>;
    name: string;
    rules: RegisterOptions<FieldValues, string>;
    label: string;
}

export const CleanableFormField = ({
    control,
    name,
    rules,
    label,
}: CleanableFormFieldProps) => (
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
                    iconName={field.value ? 'cross' : undefined}
                    onIconClick={() => field.onChange('')}
                />
            </FormFieldContainer>
        )}
    />
);
