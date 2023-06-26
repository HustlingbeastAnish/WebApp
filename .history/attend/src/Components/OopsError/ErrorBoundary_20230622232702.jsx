import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to display fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <>
          <div>
            <h2>Oops! It seems there's a server issue. 😅</h2>
            <Oops />
          </div>
        </>
      );
    }

    // Render children components
    return this.props.children;
  }
}

export default ErrorBoundary;
