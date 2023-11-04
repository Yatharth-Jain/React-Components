import React from 'react';

const BUTTON_VARIANT = {
  normal: ''
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: keyof typeof BUTTON_VARIANT;
}

export default function Button(props: ButtonProps) {
  const { variant = 'normal' } = props;
  return (
    <button
      className={`bg-green-600 py-2 px-2 text-lg font-bold text-white w-full flex justify-center items-center ${BUTTON_VARIANT[variant]}`}
      {...props}
    >
      {props?.children}
    </button>
  );
}
