import { Provider } from 'react-redux'
import store from '../redux/store/index'
import { useRouter } from "next/router";
import Message from '../components/Generic/message/index.jsx';
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return <Provider store={store}>
    <Message/>
    <Component {...pageProps} />
  </Provider>
}
