import { createContext, PureComponent, useContext } from "react";

interface ContextStoreState {
  darkMode: boolean;
  logged: boolean;
  loading: boolean;
}
export interface StoreProps extends ContextStoreState {
  setLogged: () => void;
  setLoading: () => void;
  setDarkMode: () => void;
}

export const StoreContext = createContext<StoreProps | null>(null);

export const useStore = () => useContext(StoreContext);

class ContextStore extends PureComponent<{}, ContextStoreState> {
  state: ContextStoreState = {
    darkMode: false,
    logged: false,
    loading: true,
  };

  setLogged = () => {
    this.setState({ logged: !this.state.logged });
  };
  setLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  setDarkMode = () => {
    const darkModeToString = !this.state.darkMode ? "true" : "false";
    window.localStorage.setItem("dark-mode", darkModeToString);
    this.setState({ darkMode: !this.state.darkMode });
  };

  componentDidMount() {
    if (window.localStorage.getItem("dark-mode") !== null) {
      return this.setState({
        darkMode: JSON.parse(window.localStorage.getItem("dark-mode")),
      });
    }
  }

  render() {
    return (
      <StoreContext.Provider
        value={{
          ...this.state,
          setLogged: this.setLogged,
          setLoading: this.setLoading,
          setDarkMode: this.setDarkMode,
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export default ContextStore;
