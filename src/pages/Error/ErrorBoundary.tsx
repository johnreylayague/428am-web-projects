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
          <div className="h-screen w-screen flex flex-col items-center justify-center bg-red-50 text-center px-6">
            <div className="text-4xl font-semibold text-red-600 mb-4">
              Something went wrong
            </div>
            <p className="text-gray-700 mb-6">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
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
