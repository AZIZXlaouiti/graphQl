import { Box } from '@chakra-ui/react';
import React from 'react'

interface WrapperProps {
    variant?: "small" | "regular"
}

export const Wrapper: React.FC<WrapperProps> =({ 
    children, variant 
}) => {
        return (
            <Box mx="auto" mt={8} maxW={variant === 'regular' ? '800px' : '400px'} w="100%">
                {children}
            </Box>
        );
    }