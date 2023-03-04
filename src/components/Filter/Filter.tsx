import InputField from '@/components/FormControl/InputField';
import { SearchParams } from '@/types/postsType';
import { Box } from '@mui/material';
import debounce from 'lodash.debounce';
import * as React from 'react';
import { useForm } from 'react-hook-form';

export interface FilterProps {
  filterParams: SearchParams;
  onChange: (...event: any[]) => void;
}

export default function Filter({ filterParams, onChange }: FilterProps) {
  const form = useForm({
    defaultValues: {
      search: filterParams.title_like || '',
    },
  });

  const control = form.control;

  const handleOnChange = (filters: SearchParams) => {
    onChange(filters);
  };

  // save to useRef due to it will re-create every re-render
  const debouncedSearch = React.useRef(
    debounce(async (searchValue: string) => {
      const filters = {
        ...filterParams,
        title_like: searchValue,
      };
      handleOnChange(filters);
    }, 500)
  ).current;

  // Clean debounce search when unmounting
  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearchChange = () => {
    // const target = e.target as HTMLInputElement;
    const search = form.getValues('search');
    debouncedSearch(search);
  };

  return (
    <Box sx={{ width: '50%' }}>
      <InputField
        name="search"
        label="Search"
        control={control}
        onCustomChange={handleSearchChange}
      ></InputField>
    </Box>
  );
}
