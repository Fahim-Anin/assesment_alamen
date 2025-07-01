// import React, { Component } from 'react';

// class ErrorBoundary extends Component {
//   state = {
//     hasError: false,
//     errorMessage: '',
//   };

//   static getDerivedStateFromError(error) {
//     // Update state to render fallback UI
//     return { hasError: true, errorMessage: error.message };
//   }

//   componentDidCatch(error, errorInfo) {
//     // Log error details for debugging
//     console.error('ErrorBoundary caught an error:', error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg max-w-4xl mx-auto">
//           <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
//           <p className="mb-4">{this.state.errorMessage || 'An unexpected error occurred.'}</p>
//           <button
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//             onClick={() => window.location.reload()}
//           >
//             Refresh Page
//           </button>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;




import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
          <p className="mb-4">{this.state.errorMessage || 'An unexpected error occurred.'}</p>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;