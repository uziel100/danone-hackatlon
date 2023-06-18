import { FC, useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { Card, CardContent, Stack } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { BpTextField, BpTypography } from '@/components/shared';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ProductFilters as IProductFilters } from '../models/productModel';

interface Props {
  userLogged: boolean;
  userCalories: number;
  onChangeFilters: (filters: IProductFilters) => void;
}

const ProductFilters: FC<Props> = ({ userCalories, onChangeFilters, userLogged }) => {
  const [query, setQuery] = useState<string>('');
  const [optionMaxCalories, setOptionMaxCalories] = useState<string>('custom');
  const [maxCalories, setMaxCalories] = useState(0);
  const queryDebounce = useDebounce(query, 500);
  const maxCaloriesDebounce = useDebounce(maxCalories, 800);

  useEffect(() => {
    onChangeFilters({
      query: queryDebounce
    });
  }, [queryDebounce]);

  useEffect(() => {
    if (optionMaxCalories === 'user') {
      onChangeFilters({
        energeticValue: userCalories
      });
    }
    if (optionMaxCalories === 'custom') {
      onChangeFilters({
        energeticValue: maxCaloriesDebounce
      });
    }
  }, [optionMaxCalories]);

  useEffect(() => {
    if (optionMaxCalories === 'custom') {
      onChangeFilters({
        energeticValue: maxCaloriesDebounce
      });
    }
  }, [maxCaloriesDebounce]);

  useEffect(() => {
    if (userLogged) {
      onChangeFilters({
        energeticValue: userCalories
      });
    }
  }, [userCalories]);

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 2,
        position: 'sticky',
        top: 90
      }}
    >
      <CardContent>
        <Stack mb={2} justifyContent="space-between" spacing={2} alignItems="center">
          <BpTypography textAlign="left" component="p" fontWeight={700} color="grey.800" variant="h6">
            Filtros
          </BpTypography>
        </Stack>

        <BpTextField
          id="query"
          name="query"
          label="Buscar"
          type="search"
          placeholder="Ej: Yogurt"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
          size="small"
          InputProps={{
            endAdornment: <SearchOutlinedIcon color="secondary" />
          }}
        />
        <FormLabel sx={{ mt: 2, display: 'block' }} id="demo-row-radio-buttons-group-label">
          Máximo de calorías
        </FormLabel>
        <FormControl>
          <RadioGroup
            value={optionMaxCalories}
            onChange={e => {
              setOptionMaxCalories(e.target.value);
            }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ mb: 1 }}
          >
            <FormControlLabel value="custom" control={<Radio />} label="Personalizado" />
            {userLogged && <FormControlLabel value="user" control={<Radio />} label="Preferencia del usuario" />}
          </RadioGroup>
          {optionMaxCalories === 'custom' && (
            <BpTextField
              value={maxCalories}
              onChange={e => {
                setMaxCalories(Number(e.target.value));
              }}
              size="small"
              label="Máximo de calorías"
            />
          )}
          {optionMaxCalories === 'user' && (
            <BpTypography textAlign="left" component="p" fontWeight={400} color="text.primary" variant="body2">
              {userCalories} calorías
            </BpTypography>
          )}
        </FormControl>
      </CardContent>
    </Card>
  );
};
export default ProductFilters;
