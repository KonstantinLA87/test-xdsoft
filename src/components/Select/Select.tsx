import { ChangeEvent, useMemo } from 'react';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className, 
    label,
    options = [],
    value,
    onChange,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  }

  const optionsList = useMemo(() => {
    return options?.map(item => (
      <option value={item.value} key={item.value}>
        {item.content}
      </option>
    ))
  }, [options]);

  return (
    <div className="">
      { label && (<label>{label}</label>) }
      <select 
        className="shadow-md"
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
        >
        { optionsList }
      </select>
    </div>
  );
};