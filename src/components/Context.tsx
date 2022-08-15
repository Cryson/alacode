import React, { createContext } from 'react';

export const LoadingContext: React.Context<Boolean> = createContext<Boolean>(false);