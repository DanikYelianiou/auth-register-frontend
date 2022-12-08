import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as AuthProvider } from 'next-auth/client';
import NextApp from 'next/app';
import { NextIntlProvider } from 'next-intl';
import UserProvider from '../lib/useProvider';
import { store, persistor } from '../redux/store';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider session={pageProps.session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <UserProvider>
              <NextIntlProvider messages={{ ...pageProps.messages }}>
                <Component {...pageProps} />
              </NextIntlProvider>
            </UserProvider>
          </PersistGate>
        </Provider>  
      </AuthProvider>
    </>
  )
}
export default App
