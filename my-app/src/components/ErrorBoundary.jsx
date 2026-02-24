import { Component } from "react";
import Link from "./ui/Link";

class ErrorBoundary extends Component {
  constructor(prorps) {
    super(prorps);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <p>error page</p>
          <a href="/">go to home</a>
        </>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
