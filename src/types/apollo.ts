import { MutationOptions, QueryOptions } from '@apollo/client';

export type IGeneralOptionMutation = Omit<MutationOptions, 'mutation' | 'variables'>;
export type IGeneralOptionQuery = Omit<QueryOptions, 'query' | 'variables'>;
