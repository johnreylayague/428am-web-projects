import Text from '@/components/common/text';
import clsx from 'clsx';
import React, { Component } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Optional: log to external error service
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="h-screen w-screen flex flex-col items-center justify-center text-theme-dark-navy-50 text-center px-6">
            <h3 className={clsx('font-semibold text-4xl', 'text-red-500')}>
              Oops! Something went wrong.
            </h3>

            <Text className={clsx('mt-5')}>
              An unexpected error occurred. Please try refreshing the page.
            </Text>

            <button
              onClick={() => window.location.reload()}
              className={clsx(
                'mt-3 group inline-flex items-center justify-center py-5 px-9 mb-8 space-x-3 leading-none rounded-sm font-medium transition-all duration-400 ease-in-out cursor-pointer',
                'bg-theme-orange text-white hover:bg-theme-blue'
              )}
            >
              Refresh Page
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
