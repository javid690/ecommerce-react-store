import { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{this.props.fallback}</p>
            <p>{this.state.error.message}</p>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
