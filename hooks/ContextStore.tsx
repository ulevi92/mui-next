import { createContext, PureComponent, useContext } from "react";

interface ContextStoreState {
  darkMode: boolean;
  logged: boolean;
  loading: boolean;
}
export interface StoreProps extends ContextStoreState {
  setDarkMode: () => void;
  setLogged: () => void;
  setLoading: () => void;
}

export const StoreContext = createContext<StoreProps | null>(null);

export const useStore = () => useContext(StoreContext);

class ContextStore extends PureComponent<{}, ContextStoreState> {
  state: ContextStoreState = {
    darkMode: false,
    logged: false,
    loading: true,
  };

  setDarkMode = () => {
    const darkModeToString = !this.state.darkMode ? "true" : "false";
    window.localStorage.setItem("dark-mode", darkModeToString);
    this.setState({ darkMode: !this.state.darkMode });
  };

  setLogged = () => {
    this.setState({ logged: !this.state.logged });
  };
  setLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    return (
      <StoreContext.Provider
        value={{
          ...this.state,
          setDarkMode: this.setDarkMode,
          setLogged: this.setLogged,
          setLoading: this.setLoading,
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export default ContextStore;
