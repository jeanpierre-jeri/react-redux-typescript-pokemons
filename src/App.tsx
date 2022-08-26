import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Layout } from './components/layouts'

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-900 text-white">
        <Layout />
      </div>
    </Provider>
  )
}

export default App
