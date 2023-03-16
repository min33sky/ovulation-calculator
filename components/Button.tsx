import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  return (
    <button
      {...props}
      onClick={
        props.onClick || (() => window.alert('TODO: onClick handler!!!'))
      }
      className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      {props.children}
    </button>
  );
}
