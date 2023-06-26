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
        <div>
          <h2>Oops! It seems there's a server issue. 😅</h2>
          <div>
            <svg
              fill="#000000"
              height="200px"
              width="200px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <path d="M255.977,0C114.839,0,0,114.839,0,255.977c0,141.137,114.839,255.976,255.977,255.976 c141.137,0,255.976-114.839,255.976-255.976C511.952,114.839,397.114,0,255.977,0z M352.325,353.217l-97.346-97.347 l97.346-97.346l25.899,25.898l-71.449,71.45l71.449,71.449L352.325,353.217z M159.674,158.084l97.347,97.347 l-97.347,97.346l-25.898-25.899l71.449-71.449l-71.449-71.45L159.674,158.084z" />
              </g>
            </svg>
          </div>
        </div>
      );
    }

    // Render children components
    return this.props.children;
  }
}

export default ErrorBoundary;
