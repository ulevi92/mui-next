// export const a = [];

// import Modal from "../components/modals/Modal";

// const Login = () => {
//   return (
//     <>
//       <RenderModal
//         title='login'
//         description='login to MusicSurfic and enjoy the music!'
//       >
//         dasdas
//       </RenderModal>
//     </>
//   );
// };

// export default Login;

import { Component, FC } from "react";
import ReactDOM from "react-dom";

import {
  createUniversalPortal,
  removeUniversalPortals,
} from "react-portal-universal";

const Head: FC = ({ children }) => {
  // pass selector for a document.querySelector
  // instead of a DOM node like in createPortal
  return createUniversalPortal(children, "head");
};

class Modal extends Component {
  render() {
    return (
      <article>
        <Head>
          <title>Hello, World!</title>
          <meta name='description' content='Lorem ipsum...' />
        </Head>
        <h1>Hello, World!</h1>
        <p>Lorem ipsum sit doloret um.</p>
      </article>
    );
  }
}

// remove static markup and allow React
// to render only actual components
removeUniversalPortals();

ReactDOM.render(<Modal />, document.querySelector("#root"));
