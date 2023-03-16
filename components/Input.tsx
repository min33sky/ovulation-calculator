import React, { HTMLInputTypeAttribute } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  return (
    <input
      {...props}
      type={props.type || 'text'}
      value={props.value || ''}
      onChange={
        props.onChange || (() => console.log('TODO: onChange handler!!!'))
      }
      placeholder={props.placeholder || '내용을 입력해주세요.'}
      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  );
}
