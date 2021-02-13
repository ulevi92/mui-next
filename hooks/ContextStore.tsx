import { createContext, PureComponent, useContext } from "react";

interface ContextStoreState {
  logged: boolean;
  loading: boolean;
}
export interface StoreProps extends ContextStoreState {
  setLogged: () => void;
  setLoading: () => void;
}

export const StoreContext = createContext<StoreProps | null>(null);

export const useStore = () => useContext(StoreContext);

class ContextStore extends PureComponent<{}, ContextStoreState> {
  state: ContextStoreState = {
    logged: false,
    loading: true,
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
