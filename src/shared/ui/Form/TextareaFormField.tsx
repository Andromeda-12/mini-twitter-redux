import React from 'react';
import {
    Control,
    Controller,
    FieldValues,
    RegisterOptions,
} from 'react-hook-form';
import {FormFieldContainer} from './FormFieldContainer';
import {Textarea} from '../Textarea';

interface TextareaFormFieldProps {
    control: Control<any>;
    name: string;
    rules?: RegisterOptions<FieldValues, string>;
    label: string;
}

export const TextareaFormField = ({
    control,
    name,
    rules,
    label,
}: TextareaFormFieldProps) => (
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
                <Textarea
                    {...field}
                    error={!!error}
                    className="h-[100px]"
                />
            </FormFieldContainer>
        )}
    />
);
