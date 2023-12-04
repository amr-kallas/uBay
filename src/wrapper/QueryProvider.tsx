import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        getNextPageParam: (lastPage: any, allPages) => {
          return allPages.length < lastPage.totalPages
            ? lastPage.pageNumber + 1
            : undefined
        },
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
