import { FC, useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { Card, CardContent, Stack, Button } from '@mui/material';
import { BpTextField, BpTypography } from '@/components/shared';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ProductFilters as IProductFilters } from '../models/productModel';

interface Props {
  onChangeFilters: (filters: IProductFilters) => void;
}

const ProductFilters: FC<Props> = ({ onChangeFilters }) => {
  const [query, setQuery] = useState<string>('');
  const queryDebounce = useDebounce(query, 500);

  useEffect(() => {
    onChangeFilters({
      query: queryDebounce
    });
  }, [queryDebounce]);

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
          <Button>Limpiar filtros</Button>
        </Stack>

        <BpTextField
          id="query"
          name="query"
          label="Buscar"
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
      </CardContent>
    </Card>
  );
};
export default ProductFilters;
